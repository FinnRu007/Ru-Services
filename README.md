# Website: Projekte von Finn Rummel

Statische Website (HTML/CSS/JS, kein Build-Schritt), eine Sammlung der
privaten Softwareprojekte von Finn Rummel. Läuft über GitHub Pages.

Design nach dem gemeinsamen Regelwerk in
[`../Ru-Design/DESIGN.md`](https://github.com/FinnRu007/Ru-Design).

## Inhalte bearbeiten

Du musst **kein HTML anfassen**, um Texte zu ändern:

- **Projekte** → `data/projects.js`
  Jeder Eintrag ist ein Projekt mit Name, Status, Kategorie, Beschreibung,
  Technologien und Links. Neuen Eintrag: Block kopieren, einfügen, anpassen.

- **Kategorie / Filter** → Feld `kategorie` pro Eintrag:
  `"Web-Projekte"`, `"Desktop-Programme"` oder `"Chrome-Erweiterungen"`.
  Die Filterleiste auf der Startseite erscheint automatisch, sobald mehr als
  eine Kategorie vorkommt. Ohne `kategorie` landet ein Eintrag unter „Sonstige“.

- **Web-Projekt verlinken** → Feld `website: "https://…"` setzen (Link zur
  Live-Seite). Es erscheint ein „Website öffnen →“-Button. Die Web-Projekte
  liegen jeweils in einem eigenen Repo mit aktivierten GitHub Pages.

- **Quellcode verlinken** → Feld `link: "https://github.com/…"`.
  Es erscheint ein „Code auf GitHub →“-Button.

- **Programm zum Download anbieten** (nur Desktop-Programme / Erweiterungen):
  1. Datei (`.exe` / `.zip`) in den Ordner `downloads/` legen.
  2. Beim Eintrag `download: "downloads/dateiname.zip"` setzen.
  3. Es erscheint ein „Programm herunterladen →“-Button.

- **Hinweis / Anleitung** → optionales Feld `hinweis` pro Eintrag: erscheint
  als kleine Info-Zeile auf der Karte (z. B. eine kurze Installationsanleitung).

- **Über mich** → `data/about.js`
  Name, Rolle, Bio-Absätze, Ausbildung, Interessen, Kontakt.

- **Eigenes Foto** → Bilddatei in `img/` legen und in `data/about.js` bei
  `foto:` den relativen Pfad eintragen (z. B. `foto: "img/Bild.jpg"`).
  Am besten ein möglichst quadratisches Foto — es wird automatisch zugeschnitten.

Beide `data/`-Dateien sind kommentiert und lassen sich mit jedem Texteditor
(auch direkt auf GitHub im Browser) bearbeiten. Nach dem Speichern committen
und pushen — kein Rebuild nötig.

## Struktur

```
Website/
├── index.html           Startseite (Hero, Arten, Projektliste)
├── about.html            Über mich
├── styles.css            Gesamtes Design (Tokens aus dem gemeinsamen Regelwerk Ru-Design)
├── script.js             Baut die Seiteninhalte aus den data/-Dateien
├── data/
│   ├── projects.js       ← hier Projekte eintragen
│   └── about.js          ← hier Infos über dich eintragen
├── downloads/            ← herunterladbare Programme (.exe / .zip)
├── img/                  ← Bilder (Profilfoto)
├── .nojekyll             schaltet die Jekyll-Verarbeitung ab
└── README.md
```

## Deployment über GitHub Pages

Live unter <https://finnru007.github.io/Ru-Website/>.

- Quelle: Branch `main`, Ordner `/` (Root) — *Settings → Pages* im Repository.
- Bei jedem `git push` auf `main` wird die Seite automatisch neu
  veröffentlicht (Build dauert ca. 30 Sekunden).
- `.nojekyll` sorgt dafür, dass die Dateien 1:1 statisch ausgeliefert werden.

## Eigene Domain

Unter *Settings → Pages → Custom domain* lässt sich später eine eigene Domain
verbinden.
