---
# Nach MADR 4.0.0 (https://github.com/adr/madr, Tag 4.0.0), MIT OR CC0-1.0, gekürzt; Vorlage vorlagen/adr/0000-vorlage.md im Kursrepository.
status: accepted
date: 2026-11-05
decision-makers: "Projektteam"
---

# Aufgaben im Local Storage des Browsers speichern

## Context and Problem Statement

Die Aufgaben sollen das Neuladen der Seite überstehen. Die App läuft im Browser für eine Person, ohne Anmeldung und ohne Server.

## Considered Options

* Local Storage im Browser
* Kleiner Server mit Datenbank

## Decision Outcome

Gewählt: „Local Storage im Browser“, weil die App so ohne Server und ohne Installation auskommt.

### Consequences

* Gut, weil `index.html` allein reicht.
* Schlecht, weil die Aufgaben nur in diesem Browser auf diesem Gerät liegen.
