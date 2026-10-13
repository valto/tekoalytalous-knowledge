import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import test from "node:test";
import { renderTopic, topicSlugs } from "./import-website-topics.mjs";
import { parseDocument } from "./validate-knowledge.mjs";

const root = resolve(import.meta.dirname, "..");
const manifest = JSON.parse(await readFile(join(root, "website-topic-import.json"), "utf8"));

test("five published website topics retain identity, provenance and cross-theme reasons", async () => {
  assert.equal(manifest.source_commit, "8b6f35d3c8bfedf7843c3002e6a32ecf47def5d8");
  assert.deepEqual(manifest.files.map((item) => item.path), topicSlugs.map((slug) => `knowledge/topics/${slug}.md`));
  for (const { path, source_content_sha256: expectedHash } of manifest.files) {
    const { frontmatter: record, body } = parseDocument(await readFile(join(root, path), "utf8"));
    assert.equal(record.slug, path.split("/").at(-1).replace(/\.md$/, ""));
    assert.equal(record.source_commit, manifest.source_commit);
    assert.equal(record.source_content_sha256, expectedHash);
    assert.equal(record.generated.by, "process:tekoalytalous-website-topic-import");
    assert.equal(record.verified, undefined, "A machine-generated mapping is not a human verification");
    assert.equal(record.publication_status, "published");
    assert.equal(record.license, "CC BY 4.0");
    assert.equal(record.resource, `https://www.tekoalytalous.fi/kartta/${record.slug}`);
    assert.ok(record.sections.length >= 3 && record.sources.length > 0);
    assert.ok(record.editorial_connections.length >= 1);
    assert.ok(record.editorial_connections.every((connection) => connection.why.length >= 35));
    assert.ok(body.includes(`## ${record.sections[0].heading}`));
    assert.ok(body.includes("## Ristiinluenta"));
  }
});

test("conversion preserves distinct source, website and local relation boundaries", () => {
  const node = {
    id: topicSlugs[0], slug: topicSlugs[0], title: "Koeteltava aihe", summary: "Yhteenveto", subtitle: "Rajaus",
    status: "julkaistu", license: "CC BY 4.0", sources: [{ organisation: "Sitra", title: "Lähde", year: "2026", url: "https://example.org/primary" }],
    sections: [{ heading: "Kysymys", paragraphs: ["Ensimmäinen väite."], evidence: "mahdollinen" }],
    evidence_cutoff: "2026-10-13", version: "1.0", related_topics: [topicSlugs[1], "crd"],
    opportunities: [], risks: [], dependencies: [], open_questions: [], version_history: [],
  };
  const links = [
    { kind: "topic", slug: topicSlugs[1], why: "Aihe rajaa erillisen kysymyksen ja tarjoaa hyödyllisen vertailukohdan." },
    { kind: "perspective", slug: "tekoalytyokapasiteetti-ei-ole-arvo", why: "Näkökulma koettelee väitteen lähtöoletusta ja selittää arvioinnin ehdot." },
  ];
  const options = { sourceCommit: "a".repeat(40), generatedAt: "2026-10-13T00:00:00Z" };
  const first = renderTopic(node, links, options);
  assert.deepEqual(first, renderTopic(node, links, options));
  const { frontmatter: record } = parseDocument(first.markdown);
  assert.deepEqual(record.sources[0].resource, "https://example.org/primary");
  assert.deepEqual(record.related[0].target, `/topics/${topicSlugs[1]}.md`);
  assert.deepEqual(record.related[1].target, "https://www.tekoalytalous.fi/kartta/crd");
  assert.deepEqual(record.editorial_connections[1].target, "https://www.tekoalytalous.fi/nakokulmat#tekoalytyokapasiteetti-ei-ole-arvo");
  assert.throws(() => renderTopic({ ...node, status: "luonnos" }, links, options));
  assert.throws(() => renderTopic({ ...node, license: "unknown" }, links, options));
});
