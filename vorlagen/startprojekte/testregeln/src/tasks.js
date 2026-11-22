// Logik der Aufgabenliste ohne Zugriff auf die Seite, im Browser und in node:test nutzbar.
// Eine Aufgabe ist { title, priority }. Jede Funktion liefert eine neue Liste.

const empty_title_hint = "Bitte einen Titel eingeben";
const storage_key = "tasks";
const default_priority = "mittel";
const priority_rank = { hoch: 0, mittel: 1, niedrig: 2 };

function add_task(tasks, title, priority = default_priority) {
  const trimmed = title.trim();
  if (trimmed === "") {
    return { tasks, hint: empty_title_hint };
  }
  return { tasks: [...tasks, { title: trimmed, priority }], hint: "" };
}

function edit_task(tasks, index, title) {
  const trimmed = title.trim();
  if (trimmed === "") {
    return { tasks, hint: empty_title_hint };
  }
  const changed = tasks.map((task, i) => (i === index ? { ...task, title: trimmed } : task));
  return { tasks: changed, hint: "" };
}

// confirmed ist die Antwort auf die Rückfrage, die app.js stellt
function delete_task(tasks, index, confirmed) {
  return confirmed ? tasks.filter((task, i) => i !== index) : tasks;
}

// Sortiert nach Priorität, jede Aufgabe behält ihren Index in der ganzen Liste
function by_priority(tasks) {
  return tasks
    .map((task, index) => ({ ...task, index }))
    .sort((a, b) => priority_rank[a.priority] - priority_rank[b.priority]);
}

// storage hat getItem und setItem: im Browser der localStorage, im Test eine Attrappe (ADR 0001)
function load(storage) {
  const text = storage.getItem(storage_key);
  const stored = text === null ? [] : JSON.parse(text);
  return stored.map((task) => ({ priority: default_priority, ...task }));
}

function save(storage, tasks) {
  storage.setItem(storage_key, JSON.stringify(tasks));
}

if (typeof module !== "undefined") {
  module.exports = { add_task, edit_task, delete_task, by_priority, load, save };
}
