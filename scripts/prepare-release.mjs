import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const includedRoots = ["knowledge/", "docs/", "schemas/"];
const includedFiles = ["README.md", "AUKTORITEETTI.md", "CONTRIBUTING.md", "LICENSE.md", "LICENSE-CODE"];

function run(command, args, options = {}) {
  const output = execFileSync(command, args, { cwd: root, encoding: "utf8", ...options });
  return typeof output === "string" ? output.trim() : "";
}

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

export async function prepareRelease({ version, outputDir, approvedBy, approvalNote, generatedAt }) {
  assert(/^knowledge-v\d+\.\d+\.\d+$/.test(version), "Version must use knowledge-vX.Y.Z");
  assert(resolve(outputDir) !== root && !resolve(outputDir).startsWith(`${root}/`), "Output must be outside the repository");
  assert.equal(run("git", ["status", "--short"]), "", "Repository must be clean");

  const sourceCommit = run("git", ["rev-parse", "HEAD"]);
  run("npm", ["test"], { stdio: "inherit" });
  run("npm", ["run", "validate"], { stdio: "inherit" });

  const tracked = run("git", ["ls-tree", "-r", "--name-only", sourceCommit])
    .split("\n")
    .filter((path) => includedFiles.includes(path) || includedRoots.some((prefix) => path.startsWith(prefix)))
    .sort();
  assert(tracked.includes("knowledge/index.md"));

  const destination = resolve(outputDir, version);
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  const archiveName = `${version}.tar.gz`;
  const archivePath = join(destination, archiveName);
  execFileSync("git", ["archive", "--format=tar.gz", `--prefix=${version}/`, "-o", archivePath, sourceCommit, ...tracked], { cwd: root });

  const fileInventory = [];
  for (const path of tracked) fileInventory.push({ path, sha256: await sha256(join(root, path)) });
  const conceptCount = tracked.filter((path) => path.startsWith("knowledge/") && path.endsWith(".md") && !path.endsWith("/index.md") && path !== "knowledge/index.md" && path !== "knowledge/log.md").length;
  const manifest = {
    schema_version: "1.0",
    release_id: version,
    okf_version: "0.2",
    source_repository: "valto/tekoalytalous-knowledge",
    source_commit: sourceCommit,
    generated_at: generatedAt,
    generator: "process:codex-primary-mac",
    concept_count: conceptCount,
    archive: { name: archiveName, sha256: await sha256(archivePath) },
    files: fileInventory,
    licences: { content: "CC BY 4.0", code: "MIT", external_sources: "not relicensed" },
  };
  await writeFile(join(destination, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(join(destination, "validation.json"), `${JSON.stringify({ source_commit: sourceCommit, commands: ["npm test", "npm run validate"], result: "passed", checked_at: generatedAt }, null, 2)}\n`);
  await writeFile(join(destination, "approval.json"), `${JSON.stringify({ release_id: version, source_commit: sourceCommit, approved_by: approvedBy, approval_note: approvalNote, approved_at: generatedAt, recorded_by: "process:codex-primary-mac" }, null, 2)}\n`);
  await writeFile(join(destination, "release-notes.md"), `# ${version}\n\nTekoälytalous.fi:n ensimmäinen julkisesta tietovarastosta julkaistu muuttumaton tietopaketti.\n\n- Open Knowledge Format: 0.2\n- Tietueita: ${conceptCount}\n- Lähderevisio: \`${sourceCommit}\`\n- Sisältö: tietopaketti, julkiset tausta-asiakirjat, skeemat ja lisenssit\n- Tarkistus: \`npm test\` ja \`npm run validate\` onnistuivat\n\nJulkaisu ei muuta verkkosivustoa automaattisesti eikä lisensoi ulkoisia lähdeaineistoja uudelleen.\n`);

  const checksumFiles = [archiveName, "manifest.json", "validation.json", "approval.json", "release-notes.md"];
  const sums = [];
  for (const name of checksumFiles) sums.push(`${await sha256(join(destination, name))}  ${name}`);
  await writeFile(join(destination, "SHA256SUMS"), `${sums.join("\n")}\n`);
  return { destination, sourceCommit, conceptCount };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const values = process.argv.slice(2);
  const args = {};
  for (let index = 0; index < values.length; index += 2) {
    const flag = values[index];
    const value = values[index + 1];
    assert(flag?.startsWith("--") && value, "Release arguments must use --name value pairs");
    args[flag.slice(2)] = value;
  }
  const result = await prepareRelease({
    version: args.version,
    outputDir: args["output-dir"],
    approvedBy: args["approved-by"],
    approvalNote: args["approval-note"],
    generatedAt: args["generated-at"],
  });
  console.log(JSON.stringify(result));
}
