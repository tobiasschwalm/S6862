const { test } = require("node:test");
const assert = require("node:assert/strict");
const { backup_text } = require("../src/backup.js");

test("Sicherung enthält alle Aufgaben mit allen Feldern", () => {
  const tasks = [
    { title: "Milch kaufen", priority: "hoch", due: "2026-11-20" },
    { title: "Brot backen", priority: "niedrig" },
  ];
  assert.deepEqual(JSON.parse(backup_text(tasks)), tasks);
});
