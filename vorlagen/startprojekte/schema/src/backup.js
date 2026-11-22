// Sicherung der Aufgabenliste als JSON-Text, zum Kopieren in eine Datei.
function backup_text(tasks) {
  return JSON.stringify(tasks, null, 2);
}

if (typeof module !== "undefined") {
  module.exports = { backup_text };
}
