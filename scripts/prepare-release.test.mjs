import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");

test("release preparation records immutable identity and validation", async () => {
  const source = await readFile(resolve(root, "scripts/prepare-release.mjs"), "utf8");
  assert.match(source, /source_commit/);
  assert.match(source, /SHA256SUMS/);
  assert.match(source, /npm.*validate/s);
  assert.match(source, /approved_by/);
  assert.match(source, /Output must be outside the repository/);
});
