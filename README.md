# S6862 – Lernumgebung

Lernumgebung für den Kurs **Spec-Driven Development mit OpenSpec**. Sie bringt alle Werkzeuge mit. Die Projekte der Übungen legt ihr selbst an.

## Start mit DevContainer

Voraussetzungen: [Docker Desktop](https://www.docker.com/products/docker-desktop) und [VS Code](https://code.visualstudio.com/) mit der Erweiterung **Dev Containers** (`ms-vscode-remote.remote-containers`).

1. Repository klonen und den Ordner in VS Code öffnen
2. „Reopen in Container“ wählen, oder über die Befehlspalette: _Dev Containers: Reopen in Container_
3. Warten, bis der Container gebaut ist (einmalig einige Minuten)
4. Einmal anmelden: im Terminal `claude` starten oder in der Claude-Code-Erweiterung. Die Anmeldung gilt für beide.

Die Anmeldung liegt in einem Volume auf `~/.claude` und bleibt bei „Rebuild Container“ erhalten. Öffnet sich im Container kein Browser, die Adresse aus dem Terminal im Browser des eigenen Rechners öffnen und den Code einfügen. Ist `ANTHROPIC_API_KEY` gesetzt, benutzt Claude Code den Schlüssel statt der Anmeldung.

Im Container stehen bereit:

| Werkzeug | Version | Prüfen |
|---|---|---|
| OpenSpec | 2.0.0 | `openspec --version` |
| Claude Code | 2.1.322 | `claude --version` |
| Node.js | 22 | `node --version` |
| OpenFastTrace | 4.11.0, mit Java 21 | `java -jar "$OFT_JAR" help` |

OpenFastTrace steht unter GPL-3.0-only. Der Container lädt es beim Bau von Maven Central. Wer das gebaute Image weitergibt, prüft die Pflichten der GPL-3.0. Eigene Texte stehen unter MIT (LICENSE). OpenSpec, Claude Code und OpenFastTrace sind Namen oder Marken ihrer Inhaber.


