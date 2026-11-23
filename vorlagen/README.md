# Vorlagen

Dateien zum Kopieren in den eigenen Projektordner. `<kurs>` ist der Ordner der Lernumgebung oder des Kursrepositorys. Keine dieser Dateien ist Teil von OpenSpec.

| Datei | Zweck | Benutzt in |
|---|---|---|
| `config/hello-sdd.yaml` | `openspec/config.yaml` für das Hello World: Browseranwendung in JavaScript ohne externe Abhängigkeiten, Capability begruessung, deutsche Artefakte, kein Task für eine Person | Hello World in SDD |
| `config/todo-app-tests.yaml` | ganze `openspec/config.yaml` für die eigene ToDo-App: Verweise auf `docs/projektvorgaben.md` und `adr/` wie in der Vorübung, dazu Testregeln für design, tasks und apply (Tests mit `node:test`, Test vor Code, Datum als Parameter). Ersetzt die eigene `config.yaml` oder liefert Zeilen zum Einfügen. | ToDo-App, Feature mit Tests |
| `startprojekte/todo-app/` | vorbereiteter Projektordner ohne `openspec/` und ohne Code: `docs/projektvorgaben.md` (Zweck, Technik, moderne Oberfläche), ein ADR unter `adr/` (Local Storage). Die `config.yaml` schreiben die Teilnehmenden selbst. | ToDo-App nach Projektvorgaben |

Kopieren, Beispiel für eine Vorlage der config.yaml:

```bash
cp <kurs>/vorlagen/config/hello-sdd.yaml openspec/config.yaml
```

`openspec init` legt eine eigene `config.yaml` an. Die Vorlage ersetzt sie.

Ein Startprojekt kopieren, Beispiel für die ToDo-App:

```bash
mkdir -p <kurs>/projekte/todo-app && cp -R <kurs>/vorlagen/startprojekte/todo-app/. <kurs>/projekte/todo-app/
```

## Lizenz

Eigene Texte stehen unter MIT, siehe `LICENSE` im Wurzelordner der Lernumgebung. Fremde Teile nennen Herkunft und Lizenz im jeweiligen Ordner.

OpenSpec, Claude Code und OpenFastTrace sind Namen oder Marken ihrer Inhaber. Dieses Material ist von deren Herstellern unabhängig.
