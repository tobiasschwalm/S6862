---
# Nach MADR 4.0.0 (https://github.com/adr/madr, Tag 4.0.0), MIT OR CC0-1.0; Vorlage vorlagen/adr/0000-vorlage.md im Kursrepository.
status: accepted
date: 2026-11-05
decision-makers: "Projektteam"
---

# Aufgaben im Local Storage des Browsers speichern

## Context and Problem Statement

Die Aufgaben der Capability `aufgaben` sollen das Neuladen der Seite überstehen. Die App läuft im Browser für eine Person, ohne Anmeldung und ohne Build-Schritt. Entschieden wird, wo die Aufgaben gespeichert werden.

## Decision Drivers

* läuft ohne Installation, die Datei `index.html` reicht
* eine Person, ein Gerät
* Logik bleibt mit `node:test` ohne Browser prüfbar

## Considered Options

* Local Storage im Browser
* IndexedDB im Browser
* kleiner Server mit Datenbank

## Decision Outcome

Gewählt: „Local Storage im Browser“, weil es ohne Server auskommt und mit zwei Aufrufen (`getItem`, `setItem`) für einige hundert Aufgaben reicht.

### Consequences

* Gut, weil die App ohne Backend, Datenbank und Build-Schritt läuft.
* Gut, weil die Logik nur ein Speicher-Objekt mit `getItem` und `setItem` braucht. Im Test ersetzt eine Attrappe den Browser.
* Schlecht, weil die Aufgaben an einem Browser auf einem Gerät hängen. Ein zweites Gerät sieht sie nicht.
* Schlecht, weil Löschen der Browserdaten die Aufgaben löscht.

### Confirmation

Im Review und in der Prüfung des Changes:

* `grep -rnE "fetch\(|XMLHttpRequest|indexedDB" --include="*.js" --include="*.html" .` findet nichts.
* Der Test zum Szenario „Zustand nach dem Neuladen“ speichert und liest über ein übergebenes Speicher-Objekt. In Node gibt es localStorage ohne `--localstorage-file` nicht, deshalb nutzt der Test eine Attrappe.

## Pros and Cons of the Options

### Local Storage im Browser

* Gut, weil nichts zu installieren ist.
* Neutral, weil die Daten als JSON-Text gespeichert werden.
* Schlecht, weil der Speicher je Ursprung auf wenige Megabyte begrenzt ist und synchron arbeitet.

### IndexedDB im Browser

* Gut, weil sie größere Datenmengen und Abfragen über Indizes erlaubt.
* Schlecht, weil die Schnittstelle asynchron ist und für eine kurze Liste viel Code verlangt.

### kleiner Server mit Datenbank

* Gut, weil mehrere Geräte dieselben Aufgaben sehen.
* Schlecht, weil Server, Schnittstelle und Start-Skript dazukommen und die Seite nicht mehr per Doppelklick läuft.

## More Information

Neu entscheiden, sobald eine zweite Person oder ein zweites Gerät dazukommt. Dann löst ein neues ADR dieses ab.
