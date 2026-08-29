# Ru-Services — Website

Eine statische Website (HTML/CSS/JS, kein Build-Schritt nötig) für Netlify.

## Inhalte bearbeiten

Du musst **kein HTML anfassen**, um Texte zu ändern:

- **Programme / Projekte** → `data/projects.js`
  Jeder Eintrag ist ein Programm mit Name, Status, Kategorie, Beschreibung, Technologien und Link.
  Neuen Eintrag hinzufügen: Block kopieren, einfügen, Werte anpassen.

- **Kategorie / Filter** → Feld `kategorie` pro Eintrag:
  `"Exe-Programme"`, `"Chrome-Erweiterungen"` oder `"HTML-Dateien"`.
  Auf der Startseite erscheint automatisch eine Filterleiste, sobald mehr als
  eine Kategorie vorkommt. Ohne `kategorie` landet ein Eintrag unter „Sonstige“.

- **Programm zum Download anbieten**:
  1. Datei (z. B. eine `.exe` oder eine `.zip`) in den Ordner `downloads/` legen.
  2. In `data/projects.js` beim Eintrag `download: "downloads/dateiname.zip"` setzen.
  3. Es erscheint automatisch ein "Programm herunterladen →"-Button bei diesem Eintrag.

- **Hinweis / Anleitung** → optionales Feld `hinweis` pro Eintrag: erscheint als
  kleine Info-Zeile auf der Karte (z. B. eine kurze Installationsanleitung).

- **Über den Entwickler** → `data/about.js`
  Name, Rolle, Bio-Absätze, Ausbildung, Interessen, Kontakt.

- **Eigenes Foto hinzufügen**:
  1. Bilddatei in den Ordner `img/` legen (z. B. `img/profil.jpg`).
  2. In `data/about.js` bei `foto: ""` den Dateinamen eintragen, z. B. `foto: "img/profil.jpg"`.
  3. Ohne Eintrag wird weiterhin automatisch ein Kürzel-Icon angezeigt.
  Am besten ein möglichst quadratisches Foto verwenden — es wird automatisch zugeschnitten.

Beide Dateien sind mit Kommentaren versehen und können mit jedem Texteditor
(auch direkt auf GitHub im Browser) bearbeitet werden. Nach dem Speichern
einfach die Seite neu laden bzw. bei Netlify neu deployen — es ist kein
Rebuild nötig.

## Struktur

```
ru-services/
├── index.html          Startseite (Hero, Software-Lösungen, Programme)
├── about.html           Über den Entwickler
├── styles.css            Gesamtes Design
├── script.js              Baut die Seiteninhalte aus den data/-Dateien
├── data/
│   ├── projects.js      ← hier Programme eintragen
│   └── about.js           ← hier Infos über dich eintragen
├── downloads/            ← herunterladbare Programme (Dateien)
└── README.md
```

## Deployment auf Netlify

**Variante 1 — Drag & Drop (am schnellsten):**
1. Auf [app.netlify.com](https://app.netlify.com) einloggen.
2. "Add new site" → "Deploy manually".
3. Den kompletten `ru-services`-Ordner (oder die ZIP-Datei entpackt) per
   Drag & Drop in das Feld ziehen.
4. Fertig — die Seite ist sofort live.

**Variante 2 — über GitHub (empfohlen für laufende Änderungen):**
1. Ordnerinhalt in ein neues GitHub-Repository pushen.
2. Bei Netlify: "Add new site" → "Import an existing project" → Repository auswählen.
3. Build command: leer lassen. Publish directory: `.` (Root).
4. Bei jeder Änderung an `data/projects.js` oder `data/about.js` einfach
   committen und pushen — Netlify deployt automatisch neu.

## Eigene Domain

In Netlify unter "Domain settings" → "Add a domain" lässt sich später
jederzeit eine eigene Domain (z. B. `ru-services.de`) verbinden.
