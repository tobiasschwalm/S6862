// Ein Test je Szenario aus openspec/specs/aufgaben/spec.md
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { add_task, edit_task, delete_task, by_priority, shown_tasks } = require("../src/tasks.js");

function titles(tasks) {
  return tasks.map((task) => task.title);
}

test("Aufgabe mit Titel", () => {
  assert.deepEqual(titles(add_task([], "Milch kaufen").tasks), ["Milch kaufen"]);
});

test("Leerer Titel", () => {
  const result = add_task([], "");
  assert.deepEqual(result.tasks, []);
  assert.equal(result.hint, "Bitte einen Titel eingeben");
});

test("Leerraum um den Titel", () => {
  assert.deepEqual(titles(add_task([], "  Milch kaufen  ").tasks), ["Milch kaufen"]);
});

const two = [{ title: "Milch kaufen" }, { title: "Brot backen" }];

test("Titel ändern", () => {
  const result = edit_task(two, 0, "Hafermilch kaufen");
  assert.deepEqual(titles(result.tasks), ["Hafermilch kaufen", "Brot backen"]);
});

test("Leerer Titel beim Bearbeiten", () => {
  const result = edit_task(two, 0, "");
  assert.deepEqual(titles(result.tasks), ["Milch kaufen", "Brot backen"]);
  assert.equal(result.hint, "Bitte einen Titel eingeben");
});

test("Aufgabe löschen", () => {
  assert.deepEqual(titles(delete_task(two, 0, true)), ["Brot backen"]);
});

test("Löschen abbrechen", () => {
  assert.deepEqual(titles(delete_task(two, 0, false)), ["Milch kaufen", "Brot backen"]);
});

test("Aufgabe mit Priorität", () => {
  const result = add_task([], "Milch kaufen", "hoch");
  assert.deepEqual(result.tasks, [{ title: "Milch kaufen", priority: "hoch" }]);
});

test("Ohne Angabe der Priorität", () => {
  const result = add_task([], "Milch kaufen");
  assert.deepEqual(result.tasks, [{ title: "Milch kaufen", priority: "mittel" }]);
});

test("Nach Priorität sortieren", () => {
  const tasks = [
    { title: "Brot backen", priority: "niedrig" },
    { title: "Milch kaufen", priority: "hoch" },
    { title: "Post holen", priority: "mittel" },
  ];
  assert.deepEqual(titles(by_priority(tasks)), ["Milch kaufen", "Post holen", "Brot backen"]);
});

test("Aufgabe mit Fälligkeitsdatum", () => {
  const result = add_task([], "Milch kaufen", "hoch", "2026-11-20");
  assert.deepEqual(result.tasks, [{ title: "Milch kaufen", priority: "hoch", due: "2026-11-20" }]);
});

test("Leeres Datumsfeld", () => {
  const result = add_task([], "Milch kaufen", "mittel", "");
  assert.deepEqual(result.tasks, [{ title: "Milch kaufen", priority: "mittel" }]);
});

test("Heute fällig ist nicht überfällig", () => {
  const tasks = [
    { title: "Milch kaufen", priority: "mittel" },
    { title: "Brot backen", priority: "mittel", due: "2026-11-10" },
  ];
  assert.deepEqual(titles(shown_tasks(tasks, "2026-11-10", false)), ["Milch kaufen", "Brot backen"]);
});

test("Überfällige Aufgabe steht oben", () => {
  const tasks = [
    { title: "Milch kaufen", priority: "mittel" },
    { title: "Post holen", priority: "mittel", due: "2026-11-20" },
    { title: "Brot backen", priority: "mittel", due: "2026-11-09" },
  ];
  assert.deepEqual(titles(shown_tasks(tasks, "2026-11-10", false)), [
    "Brot backen",
    "Milch kaufen",
    "Post holen",
  ]);
});

test("Überfällige Aufgabe steht beim Sortieren oben", () => {
  const tasks = [
    { title: "Post holen", priority: "niedrig" },
    { title: "Milch kaufen", priority: "hoch" },
    { title: "Brot backen", priority: "niedrig", due: "2026-11-09" },
  ];
  assert.deepEqual(titles(shown_tasks(tasks, "2026-11-10", true)), [
    "Brot backen",
    "Milch kaufen",
    "Post holen",
  ]);
});
