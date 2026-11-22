# Vorlagen

Dateien zum Kopieren in den eigenen Projektordner. `<kurs>` ist der Ordner der Lernumgebung oder des Kursrepositorys. Keine dieser Dateien ist Teil von OpenSpec.

| Datei | Zweck | Benutzt in |
|---|---|---|
| `adr/0000-vorlage.md` | gekürzte ADR-Vorlage nach MADR 4.0.0, nach `adr/` kopieren. Herkunft und Lizenz (MIT OR CC0-1.0) stehen in `adr/HERKUNFT.md`. | eigene ADRs, keine Übung |
| `config/hello-sdd.yaml` | `openspec/config.yaml` für das Hello World, aufgebaut wie `todo-app.yaml`: Browseranwendung in JavaScript ohne externe Abhängigkeiten, Start über Live Preview, Regeln für Specs und Tasks | Hello World in SDD |
| `config/todo-app.yaml` | `openspec/config.yaml` für die ToDo-App: Browseranwendung in JavaScript ohne externe Abhängigkeiten, Start über Live Preview, Regeln für Specs und Tasks, keine ADR- und keine Testregel | ToDo-App mit SDD |
| `config/testregeln.yaml` | Abschnitte `rules` und `operations` mit den Testregeln. Ersetzt in der `config.yaml` des Startprojekts `testregeln` alles ab `rules:`. | ToDo-App unter Testregeln |
| `config/ids-openfasttrace.yaml` | `openspec/config.yaml` mit Regeln für IDs im Format von OpenFastTrace | Vorführung des Trainers zur Trace-Prüfung |
| `schema/spec-driven-with-adr/` | Community-Schema mit dem Zusatzartefakt `adr`, nach `openspec/schemas/` kopieren. Herkunft und Lizenz (MIT) stehen in `LICENSE` im Ordner. | Schema mit ADR-Prüfung übernehmen |
| `lebenszyklus.md` | Vorlage für die Papierübung: Stationen mit OpenSpec-Schritten und Freigaben, Tabelle mit R und A je Artefakt, offene Fragen, Ersatzfall und Zusatz für Schnelle. Auf Papier übertragen oder kopieren. | SDD im Lebenszyklus |
| `startprojekte/testregeln/` | vorbereiteter Projektordner: ToDo-App mit Speichern, Bearbeiten, Löschen und Priorität, Hauptspec, zwei ADRs unter `adr/`, 13 Tests, kein offener Change | ToDo-App unter Testregeln |
| `startprojekte/schema/` | vorbereiteter Projektordner: ToDo-App mit fünf archivierten Changes, Testregeln in der `config.yaml`, zwei ADRs, 19 Tests und eine Funktion ohne Spec | Schema mit ADR-Prüfung übernehmen |
| `startprojekte/parallel/` | vorbereiteter Projektordner: `openspec/` der ToDo-App mit zwei fertigen Changes am selben Requirement | Zwei Changes, ein Requirement |
| `startprojekte/pipeline/` | vorbereiteter Projektordner: `openspec/` mit einem offenen Change und die Workflow-Datei `.github/workflows/openspec.yml` | Prüfung am Pull Request |
| `startprojekte/nachweis/` | vorbereiteter Projektordner: `openspec/` mit sechs archivierten Changes und `verlauf.bundle`, der Git-Verlauf des Projekts mit Code | Kurzaufgabe: Vom Requirement zum Ticket |

Kopieren, Beispiel für die ToDo-App:

```bash
cp <kurs>/vorlagen/config/todo-app.yaml openspec/config.yaml
```

`openspec init` legt eine eigene `config.yaml` an. Die Vorlage ersetzt sie.

Ein Startprojekt kopieren, Beispiel für die Übung Parallel:

```bash
mkdir -p <kurs>/projekte/parallel && cp -R <kurs>/vorlagen/startprojekte/parallel/. <kurs>/projekte/parallel/
```

## Lizenz

Eigene Texte stehen unter MIT, siehe `LICENSE` im Wurzelordner der Lernumgebung. Fremde Teile nennen Herkunft und Lizenz im jeweiligen Ordner: das Schema in `schema/spec-driven-with-adr/LICENSE`, die ADR-Vorlage in `adr/HERKUNFT.md`.

OpenSpec, Claude Code und OpenFastTrace sind Namen oder Marken ihrer Inhaber. Dieses Material ist von deren Herstellern unabhängig.
