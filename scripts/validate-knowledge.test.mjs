import assert from "node:assert/strict";
import test from "node:test";

import { parseDocument, validateRepository } from "./validate-knowledge.mjs";

test("parses Open Knowledge Format frontmatter and body", () => {
  const parsed = parseDocument("---\ntype: Research\nid: example\n---\n\n# Example\n");
  assert.equal(parsed.frontmatter.type, "Research");
  assert.equal(parsed.frontmatter.id, "example");
  assert.equal(parsed.body, "# Example");
});

test("rejects a document without frontmatter", () => {
  assert.throws(() => parseDocument("# Example\n"), /metatieto puuttuu/);
});

test("repository passes standalone validation", async () => {
  const result = await validateRepository();
  assert.deepEqual(result.errors, []);
  assert.ok(result.conceptCount >= 20);
});
