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
committen und pushen — es ist kein Rebuild nötig.

## Struktur

```
Website/
├── index.html           Startseite (Hero, Software-Lösungen, Programme)
├── about.html            Über den Entwickler
├── styles.css            Gesamtes Design
├── script.js             Baut die Seiteninhalte aus den data/-Dateien
├── data/
│   ├── projects.js       ← hier Programme eintragen
│   └── about.js          ← hier Infos über dich eintragen
├── downloads/            ← herunterladbare Programme (Dateien)
├── .nojekyll             schaltet die Jekyll-Verarbeitung ab
└── README.md
```

## Deployment über GitHub Pages

Die Seite läuft über **GitHub Pages** und ist live unter
<https://finnru007.github.io/Website/>.

- Quelle: Branch `main`, Ordner `/` (Root) — eingestellt unter
  *Settings → Pages* im Repository.
- Bei jedem `git push` auf `main` wird die Seite automatisch neu
  veröffentlicht (Build dauert ca. 30 Sekunden).
- `.nojekyll` sorgt dafür, dass die Dateien 1:1 statisch ausgeliefert werden.

## Eigene Domain

Unter *Settings → Pages → Custom domain* lässt sich später eine eigene Domain
(z. B. `ru-services.de`) verbinden.
