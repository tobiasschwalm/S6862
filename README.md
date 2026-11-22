# S6862 – Lernumgebung

Lernumgebung für den Kurs **Spec-Driven Development mit OpenSpec**. Sie bringt alle Werkzeuge mit. Die Projekte der Übungen legt ihr selbst an.

## Start mit DevContainer

Voraussetzungen: [Docker Desktop](https://www.docker.com/products/docker-desktop) und [VS Code](https://code.visualstudio.com/) mit der Erweiterung **Dev Containers** (`ms-vscode-remote.remote-containers`).

1. Repository klonen und den Ordner in VS Code öffnen
2. „Reopen in Container“ wählen, oder über die Befehlspalette: _Dev Containers: Reopen in Container_
3. Warten, bis der Container gebaut ist (einmalig einige Minuten)
4. Einmal anmelden: im Terminal `claude` starten oder in der Claude-Code-Erweiterung. Die Anmeldung gilt für beide.

Die Anmeldung liegt in einem Volume auf `~/.claude` und bleibt bei „Rebuild Container“ erhalten. Öffnet sich im Container kein Browser, die Adresse aus dem Terminal im Browser des eigenen Rechners öffnen und den Code einfügen. Als Modell ist Sonnet eingestellt, wechseln lässt es sich in Claude Code mit `/model`.

### API-Schlüssel statt Anmeldung

Ist auf dem eigenen Rechner die Umgebungsvariable `ANTHROPIC_API_KEY` gesetzt, übernimmt der Container sie, und Claude Code benutzt den Schlüssel statt der Anmeldung. Der Schlüssel steht dabei in keiner Datei des Repositorys.

1. Variable auf dem eigenen Rechner setzen:
   - Windows: `set-anthropic-key.bat` doppelklicken und den Schlüssel eingeben, oder in PowerShell oder der Eingabeaufforderung `setx ANTHROPIC_API_KEY "sk-ant-…"`
   - macOS und Linux: die Zeile `export ANTHROPIC_API_KEY="sk-ant-…"` in `~/.zshrc` oder `~/.bashrc` eintragen
2. VS Code ganz beenden, alle Fenster, und neu starten. Ein laufendes VS Code sieht die neue Variable nicht.
3. Den Ordner wie oben im Container öffnen und im Terminal des Containers prüfen: `test -n "$ANTHROPIC_API_KEY" && echo gesetzt`

Liegt das Repository unter Windows in WSL und wird es von dort geöffnet, gelangt die Windows-Variable nur über `WSLENV` nach WSL. Einmal in PowerShell setzen und danach WSL mit `wsl --shutdown` neu starten:

```powershell
setx WSLENV "ANTHROPIC_API_KEY/u$(if ($env:WSLENV) { ':' + $env:WSLENV })"
```

Ein neuer Schlüssel gilt nach dem Neustart von VS Code und „Reload Window“, ohne Neubau des Containers.

Im Container stehen bereit:

| Werkzeug | Version | Prüfen |
|---|---|---|
| OpenSpec | 2.0.0 | `openspec --version` |
| Claude Code | 2.1.322 | `claude --version` |
| Node.js | 22 | `node --version` |
| OpenFastTrace | 4.11.0, mit Java 21 | `java -jar "$OFT_JAR" help` |

OpenFastTrace steht unter GPL-3.0-only. Der Container lädt es beim Bau von Maven Central. Wer das gebaute Image weitergibt, prüft die Pflichten der GPL-3.0. Eigene Texte stehen unter MIT (LICENSE). OpenSpec, Claude Code und OpenFastTrace sind Namen oder Marken ihrer Inhaber.


