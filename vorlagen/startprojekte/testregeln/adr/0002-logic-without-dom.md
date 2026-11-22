---
# Nach MADR 4.0.0 (https://github.com/adr/madr, Tag 4.0.0), MIT OR CC0-1.0; Vorlage vorlagen/adr/0000-vorlage.md im Kursrepository.
status: accepted
date: 2026-11-05
decision-makers: "Projektteam"
---

# Logik ohne Zugriff auf die Seite in src/tasks.js

## Context and Problem Statement

Die Tests laufen mit `node:test` ohne Browser und ohne Bibliothek für den DOM. Entschieden wird, wie der Code zwischen Logik und Seite geschnitten ist.

## Considered Options

* Logik ohne Zugriff auf die Seite
* Ein Skript für alles

## Decision Outcome

Gewählt: „Logik ohne Zugriff auf die Seite“ (Logik in `src/tasks.js`, Seite nur in `src/app.js`), weil sich jedes Szenario dann mit `node --test` ohne Paket prüfen lässt.

### Consequences

* Gut, weil jede Regel aus der Spec einen Test ohne Browser bekommt.
* Schlecht, weil die Verdrahtung in `src/app.js` ungetestet bleibt. Sie wird im Browser angesehen.

### Confirmation

`grep -nE "document|window" src/tasks.js` findet nichts. Jeder Test lädt nur `src/tasks.js`.

## Pros and Cons of the Options

### Logik ohne Zugriff auf die Seite

* Gut, weil die Tests schnell und ohne Abhängigkeit laufen.
* Schlecht, weil zwei Dateien zusammenpassen müssen.

### Ein Skript für alles

* Gut, weil alles an einer Stelle steht.
* Schlecht, weil ein Test dann eine DOM-Bibliothek und ein `package.json` braucht, gegen den Kontext in `config.yaml`.
