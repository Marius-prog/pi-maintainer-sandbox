import assert from "node:assert/strict";
import { test } from "node:test";
import { windowTitle } from "../src/title.js";

test("a one-line reply becomes the title", () => {
  assert.equal(windowTitle("Refactor the parser"), "Refactor the parser");
});

test("a long reply is shortened to 40 characters", () => {
  const title = windowTitle("x".repeat(60));
  assert.equal(title.length, 40);
  assert.ok(title.endsWith("…"));
});
