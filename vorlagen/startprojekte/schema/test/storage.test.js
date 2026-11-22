// Szenarien zu „Aufgaben bleiben erhalten“, mit einer Attrappe statt des Browserspeichers
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { load, save } = require("../src/tasks.js");

// Attrappe mit derselben Schnittstelle wie der Speicher im Browser
function fake_storage() {
  const items = new Map();
  return {
    getItem: (key) => (items.has(key) ? items.get(key) : null),
    setItem: (key, value) => items.set(key, String(value)),
  };
}

test("Zustand nach dem Neuladen", () => {
  const storage = fake_storage();
  save(storage, [{ title: "Milch kaufen" }]);
  assert.deepEqual(load(storage).map((task) => task.title), ["Milch kaufen"]);
});

test("Erster Start ohne Aufgaben", () => {
  assert.deepEqual(load(fake_storage()), []);
});

test("Gespeicherte Aufgabe ohne Priorität gilt als mittel", () => {
  const storage = fake_storage();
  storage.setItem("tasks", JSON.stringify([{ title: "Brot backen" }]));
  assert.deepEqual(load(storage), [{ title: "Brot backen", priority: "mittel" }]);
});
