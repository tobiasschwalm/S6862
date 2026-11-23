# Projektvorgaben

Eine ToDo-App im Browser für eine Person an einem Gerät, ohne Anmeldung und ohne Konto. Sie hält die Aufgaben fest, die diese Person erledigen will.

## Technik

- Browseranwendung in JavaScript ohne externe Abhängigkeiten: kein `package.json`, keine Pakete, kein Build-Schritt, nichts von fremden Adressen.
- Die Seite ist `index.html`. Eigener Code liegt unter `src/`, eingebunden als klassisches `<script src="...">` ohne `type="module"`.

## Oberfläche

Die App soll modern aussehen. Allgemeine Vorgaben, keine Pixelvorlage:

- Ruhige, helle Fläche mit einer Akzentfarbe für Schaltflächen und Fokus.
- Systemschrift (`system-ui`), gut lesbare Größe, großzügige Abstände.
- Aufgaben als Karten oder Zeilen mit runden Ecken und dezentem Schatten oder Rahmen.
- Sichtbare Zustände für Hover und Tastaturfokus.
- Vollständig per Tastatur bedienbar, Eingabefeld und Schaltflächen mit Beschriftung.
- Auf dem Smartphone lesbar, ohne seitliches Scrollen.
- Nur eigenes CSS im Projekt, kein Framework und keine Schrift von fremden Adressen.
