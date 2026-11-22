// Verbindet Formular und Liste mit der Logik aus tasks.js, speichert im localStorage (ADR 0001)
const form = document.getElementById("new-task");
const title_field = document.getElementById("title");
const priority_field = document.getElementById("priority");
const due_field = document.getElementById("due");
const sort_field = document.getElementById("sort");
const hint = document.getElementById("hint");
const list = document.getElementById("task-list");
let tasks = load(localStorage);

function update(new_tasks) {
  tasks = new_tasks;
  save(localStorage, tasks);
  render();
}

function button(text, on_click) {
  const element = document.createElement("button");
  element.type = "button";
  element.textContent = text;
  element.addEventListener("click", on_click);
  return element;
}

// Heute als "YYYY-MM-DD" in lokaler Zeit, toISOString() rechnet in UTC
function local_today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function render() {
  const shown = shown_tasks(tasks, local_today(), sort_field.checked);
  list.replaceChildren();
  shown.forEach((task) => {
    const edit = button("Bearbeiten", () => {
      const title = prompt("Neuer Titel", task.title);
      if (title !== null) {
        const result = edit_task(tasks, task.index, title);
        hint.textContent = result.hint;
        update(result.tasks);
      }
    });
    const remove = button("Löschen", () => {
      update(delete_task(tasks, task.index, confirm(`„${task.title}“ löschen?`)));
    });
    const item = document.createElement("li");
    const due = task.due === undefined ? "" : ` fällig ${task.due}`;
    item.append(`${task.title} (${task.priority})${due}`, " ", edit, " ", remove);
    list.append(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = add_task(tasks, title_field.value, priority_field.value, due_field.value);
  hint.textContent = result.hint;
  if (result.hint === "") {
    title_field.value = "";
    due_field.value = "";
  }
  update(result.tasks);
});

sort_field.addEventListener("change", render);

render();
