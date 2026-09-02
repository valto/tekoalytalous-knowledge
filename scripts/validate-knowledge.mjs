import { readdir, readFile } from "node:fs/promises";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { JSON_SCHEMA, load as loadYaml } from "js-yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const knowledgeRoot = join(root, "knowledge");
const requiredFields = ["type", "title", "description", "status", "license"];
const allowedStatuses = new Set(["draft", "stable", "deprecated"]);
const privateReferences = [
  "github.com/valto/tekoalytalous/blob/",
  "lovable.dev/projects/",
  "supabase.co",
];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(path)));
    else files.push(path);
  }
  return files;
}

export function parseDocument(source) {
  if (!source.startsWith("---\n")) throw new Error("YAML-metatieto puuttuu tiedoston alusta");
  const close = source.indexOf("\n---\n", 4);
  if (close === -1) throw new Error("YAML-metatietoa ei ole suljettu");
  const parsed = loadYaml(source.slice(4, close), { schema: JSON_SCHEMA });
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("YAML-metatiedon pitää olla avain-arvo-rakenne");
  }
  return { frontmatter: parsed, body: source.slice(close + 5).trim() };
}

function localMarkdownTargets(source) {
  const targets = [];
  const pattern = /\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of source.matchAll(pattern)) {
    const raw = match[1].trim().replace(/^<|>$/g, "");
    if (!raw || raw.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(raw)) continue;
    const target = decodeURIComponent(raw.split("#")[0].split("?")[0]);
    if (target && extname(target).toLowerCase() === ".md") targets.push(target);
  }
  return targets;
}

function resolveMarkdownTarget(sourceFile, target) {
  if (target.startsWith("/")) return join(knowledgeRoot, target.slice(1));
  return normalize(resolve(dirname(sourceFile), target));
}

function eventErrors(value, label) {
  if (value === undefined) return [];
  if (!value || typeof value !== "object" || Array.isArray(value)) return [`${label} ei ole rakenne`];
  const errors = [];
  if (typeof value.by !== "string" || !value.by) errors.push(`${label}.by puuttuu`);
  if (typeof value.at !== "string" || Number.isNaN(Date.parse(value.at))) errors.push(`${label}.at ei ole kelvollinen aika`);
  return errors;
}

export async function validateRepository() {
  const errors = [];
  const allFiles = await filesUnder(root);
  const publicFiles = allFiles.filter((file) => !file.includes(`${join(root, "node_modules")}/`) && !file.includes(`${join(root, ".git")}/`));
  const markdownFiles = publicFiles.filter((file) => extname(file).toLowerCase() === ".md");
  const knowledgeFiles = markdownFiles.filter((file) => file.startsWith(`${knowledgeRoot}/`));
  const conceptFiles = knowledgeFiles.filter((file) => !["index.md", "log.md"].includes(file.split("/").at(-1)));

  const rootIndex = parseDocument(await readFile(join(knowledgeRoot, "index.md"), "utf8"));
  if (rootIndex.frontmatter.okf_version !== "0.2") errors.push("knowledge/index.md: okf_version pitää olla 0.2");

  const ids = new Map();
  const slugs = new Map();

  for (const file of conceptFiles) {
    const label = relative(root, file);
    let parsed;
    try {
      parsed = parseDocument(await readFile(file, "utf8"));
    } catch (error) {
      errors.push(`${label}: ${error.message}`);
      continue;
    }

    for (const field of requiredFields) {
      if (typeof parsed.frontmatter[field] !== "string" || !parsed.frontmatter[field].trim()) {
        errors.push(`${label}: pakollinen kenttä ${field} puuttuu`);
      }
    }
    if (!allowedStatuses.has(parsed.frontmatter.status)) errors.push(`${label}: tuntematon status ${parsed.frontmatter.status}`);
    if (parsed.frontmatter.slug !== undefined && !/^[a-z0-9][a-z0-9-]*$/.test(parsed.frontmatter.slug)) {
      errors.push(`${label}: slug ei ole vakaa URL-tunniste`);
    }
    if (!parsed.body.startsWith("# ")) errors.push(`${label}: tekstiosa ei ala pääotsikolla`);

    for (const [field, map] of [["id", ids], ["slug", slugs]]) {
      const value = parsed.frontmatter[field];
      if (typeof value !== "string") continue;
      if (map.has(value)) errors.push(`${label}: ${field} ${value} on jo tiedostossa ${map.get(value)}`);
      else map.set(value, label);
    }

    for (const message of eventErrors(parsed.frontmatter.generated, "generated")) errors.push(`${label}: ${message}`);
    for (const message of eventErrors(parsed.frontmatter.verified, "verified")) errors.push(`${label}: ${message}`);

    if (parsed.frontmatter.sources !== undefined) {
      if (!Array.isArray(parsed.frontmatter.sources)) errors.push(`${label}: sources ei ole lista`);
      else {
        parsed.frontmatter.sources.forEach((source, index) => {
          if (!source || typeof source !== "object" || Array.isArray(source)) {
            errors.push(`${label}: sources[${index}] ei ole rakenne`);
            return;
          }
          for (const field of ["id", "resource", "title"]) {
            if (typeof source[field] !== "string" || !source[field]) errors.push(`${label}: sources[${index}].${field} puuttuu`);
          }
          if (typeof source.resource === "string" && !/^https:\/\//.test(source.resource)) {
            errors.push(`${label}: sources[${index}].resource ei ole julkinen HTTPS-osoite`);
          }
        });
      }
    }
  }

  for (const file of markdownFiles) {
    const source = await readFile(file, "utf8");
    const label = relative(root, file);
    for (const marker of privateReferences) {
      if (source.includes(marker)) errors.push(`${label}: sisältää yksityiseen tai palvelukohtaiseen ympäristöön viittaavan osoitteen (${marker})`);
    }
    for (const target of localMarkdownTargets(source)) {
      const resolved = resolveMarkdownTarget(file, target);
      if (!publicFiles.includes(resolved)) errors.push(`${label}: sisäinen linkki ei löydy: ${target}`);
    }
  }

  return { conceptCount: conceptFiles.length, filesChecked: publicFiles.length, errors };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await validateRepository();
  if (result.errors.length) {
    console.error(result.errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`Tarkistus valmis: ${result.conceptCount} tietuetta, ${result.filesChecked} tiedostoa, 0 virhettä.`);
  }
}
