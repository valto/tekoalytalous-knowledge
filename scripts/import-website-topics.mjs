import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { dump } from "js-yaml";

const root = resolve(import.meta.dirname, "..");
export const topicSlugs = [
  "agenttinen-suomi-julkinen-hallinto",
  "julkisen-hallinnon-toistuvat-toiminnot",
  "viranomaisagentin-valtuudet-ja-virkavastuu",
  "julkisen-hallinnon-agenttien-digisuvereniteetti",
  "agenttiautomaation-hyotyjen-mittaaminen",
];
const localTopics = new Set(topicSlugs);
const processId = "process:tekoalytalous-website-topic-import";

function digest(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function target(kind, slug) {
  if (kind === "topic" && localTopics.has(slug)) return `/topics/${slug}.md`;
  if (kind === "topic") return `https://www.tekoalytalous.fi/kartta/${slug}`;
  if (kind === "article") return `https://www.tekoalytalous.fi/kirjoitukset/${slug}`;
  if (kind === "perspective") return `https://www.tekoalytalous.fi/nakokulmat#${slug}`;
  throw new Error(`Unknown connection kind: ${kind}`);
}

function list(heading, values) {
  return values?.length ? `## ${heading}\n\n${values.map((value) => `- ${value}`).join("\n")}` : "";
}

function sourceActor(organisation) {
  const slug = organisation.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `team:${slug || "unknown"}`;
}

export function renderTopic(node, connections, { sourceCommit, generatedAt }) {
  assert(localTopics.has(node.slug) && node.id === node.slug, "Unexpected website topic identity");
  assert(node.status === "julkaistu", "Only published website topics may be imported");
  assert(node.license === "CC BY 4.0", "Website topic licence differs from imported content licence");
  assert(node.evidence_cutoff && node.version && node.sources.length, "Missing provenance on website topic");
  assert(connections.length > 0 && connections.length <= 3, "Curated reading links are missing");

  const contentHash = digest({ node, connections });
  const metadata = {
    type: "Topic",
    title: node.title,
    description: node.summary,
    resource: `https://www.tekoalytalous.fi/kartta/${node.slug}`,
    tags: ["tekoalytalous", "julkinen-hallinto", "tekoalyagentit"],
    generated: { by: processId, at: generatedAt },
    status: "stable",
    sources: node.sources.map((source, index) => ({
      id: `source-${index + 1}`,
      resource: source.url,
      title: source.title,
      author: sourceActor(source.organisation),
      source_year: source.year,
    })),
    id: node.id,
    slug: node.slug,
    content_type: node.content_type,
    publication_status: "published",
    evidence_level: node.evidence_level,
    evidence_cutoff: node.evidence_cutoff,
    time_horizon: node.time_horizon,
    level: node.level,
    domain: node.domain,
    authors: node.authors,
    contributors: node.contributors ?? [],
    created_at: node.created_at,
    published_at: node.published_at,
    updated_at: node.updated_at,
    version: node.version,
    license: node.license,
    source_repository: "valto/tekoalytalous",
    source_commit: sourceCommit,
    source_content_sha256: contentHash,
    sections: node.sections,
    related: node.related_topics.map((slug) => ({ type: "related_to", target: target("topic", slug) })),
    editorial_connections: connections.map((connection) => ({
      kind: connection.kind,
      target: target(connection.kind, connection.slug),
      why: connection.why,
    })),
    dependencies: node.dependencies,
    opportunities: node.opportunities,
    risks: node.risks,
    open_questions: node.open_questions,
    counter_views: node.counter_views ?? [],
    version_history: node.version_history,
  };

  const body = [
    `# ${node.title}`,
    node.subtitle ? `_${node.subtitle}_` : "",
    node.summary,
    ...node.sections.map((section) => [
      `## ${section.heading}`,
      ...section.paragraphs,
      ...(section.bullets?.length ? section.bullets.map((bullet) => `- ${bullet}`) : []),
      section.evidence ? `_Näyttötaso: ${section.evidence}._` : "",
    ].filter(Boolean).join("\n\n")),
    list("Mahdollisuudet", node.opportunities),
    list("Riskit", node.risks),
    list("Riippuvuudet", node.dependencies),
    list("Avoimet kysymykset", node.open_questions),
    list("Vastanäkökulmat", node.counter_views),
    list("Muut liittyvät aiheet", node.related_topics.map((slug) => `[${slug}](${target("topic", slug)})`)),
    list("Ristiinluenta", connections.map((connection) => `[${connection.slug}](${target(connection.kind, connection.slug)}): ${connection.why}`)),
  ].filter(Boolean).join("\n\n");

  return {
    contentHash,
    markdown: `---\n${dump(metadata, { lineWidth: -1, noRefs: true })}---\n\n${body}\n`,
  };
}

async function run() {
  const [flag, checkout] = process.argv.slice(2);
  assert(flag === "--website-checkout" && checkout, "Usage: node scripts/import-website-topics.mjs --website-checkout /absolute/path/to/exact/website/commit");
  const website = resolve(checkout);
  const websiteCommit = execFileSync("git", ["-C", website, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  assert.equal(websiteCommit, "8b6f35d3c8bfedf7843c3002e6a32ecf47def5d8", "Expected the approved website publication revision");
  assert.equal(execFileSync("git", ["-C", website, "status", "--porcelain"], { encoding: "utf8" }).trim(), "", "Website source checkout must be clean");
  const generatedAt = execFileSync("git", ["-C", website, "show", "-s", "--format=%cI", "HEAD"], { encoding: "utf8" }).trim();
  const { contentNodes } = await import(pathToFileURL(join(website, "src/data/content.ts")).href);
  const { curatedCrossConnections } = await import(pathToFileURL(join(website, "src/data/cross-connections.ts")).href);
  const files = [];
  for (const slug of topicSlugs) {
    const node = contentNodes.find((item) => item.slug === slug);
    assert(node, `Website source missing topic ${slug}`);
    const connections = curatedCrossConnections[`topic:${slug}`] ?? [];
    const { contentHash, markdown } = renderTopic(node, connections, { sourceCommit: websiteCommit, generatedAt });
    const path = `knowledge/topics/${slug}.md`;
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), markdown);
    files.push({ path, source_content_sha256: contentHash });
  }
  await writeFile(join(root, "website-topic-import.json"), `${JSON.stringify({
    schema_version: "1.0",
    source_repository: "valto/tekoalytalous",
    source_commit: websiteCommit,
    source_published_at: "2026-10-13",
    generated_at: generatedAt,
    content_class: "public-administration-website-topics",
    files,
  }, null, 2)}\n`);
  console.log(`Imported ${files.length} website topics from ${websiteCommit}`);
}

if (process.argv[1] && resolve(process.argv[1]) === new URL(import.meta.url).pathname) await run();
