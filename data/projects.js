/* ============================================================
   PROJEKTE / BESTEHENDE PROGRAMME
   ------------------------------------------------------------
   Hier trägst du deine Programme ein. Jeder Block zwischen
   { und } ist ein Programm. Du kannst Einträge kopieren,
   einfügen, löschen oder anpassen.

   Felder:
   - name         : Name des Programms
   - status       : z.B. "Aktiv", "In Entwicklung", "Archiviert"
   - kategorie     : "Exe-Programme" | "Chrome-Erweiterungen" | "HTML-Dateien"
                    Danach kann auf der Startseite gefiltert werden.
                    Weglassen = erscheint unter "Sonstige".
   - beschreibung : Freitext, beliebig lang
   - stack        : Liste der verwendeten Technologien
   - link         : Link zu GitHub o.ä. (optional, sonst "")
   - download     : Pfad zu einer Datei im Repo, die direkt herunter-
                    geladen werden kann, z.B. "downloads/mein-programm.zip"
                    (optional, sonst weglassen oder "")
   - hinweis      : Kurzer Hinweis, der als Info-Zeile auf der Karte
                    erscheint, z.B. eine Installationsanleitung (optional)
   ============================================================ */

const PROJECTS = [
  {
    name: "Ru-Rechnungen",
    status: "Aktiv",
    kategorie: "Exe-Programme",
    beschreibung:
      "Desktop-Anwendung zur Rechnungserstellung für landwirtschaftliche Betriebe. " +
      "Erstellt professionelle PDF-Rechnungen auf Knopfdruck, verwaltet Kunden- und " +
      "Positionsdaten lokal und läuft als eigenständige Windows-Anwendung ohne " +
      "zusätzliche Installation.",
    stack: ["Python", "CustomTkinter", "ReportLab", "PyInstaller"],
    link: "",
  },
  {
    name: "Rechnungsersteller V2",
    status: "Archiviert",
    kategorie: "Exe-Programme",
    beschreibung:
      "Vorgänger-Version des Rechnungsprogramms. Erzeugt Rechnungen als sauber " +
      "gesetzte LaTeX-PDFs über Jinja2-Vorlagen — für ein technisches, präzises " +
      "Layout statt einer klassischen Office-Vorlage.",
    stack: ["Python", "Tkinter", "Jinja2", "LaTeX"],
    link: "",
  },
  {
    name: "Sudoku-Löser",
    status: "Aktiv",
    kategorie: "HTML-Dateien",
    beschreibung:
      "Löst beliebige Sudokus per Knopfdruck und kann zusätzlich neue, " +
      "eindeutig lösbare Sudokus in vier Schwierigkeitsstufen generieren — " +
      "läuft komplett im Browser, mit Backtracking-Suche und Live-Erkennung " +
      "von Widersprüchen.",
    stack: ["HTML", "CSS", "JavaScript", "Backtracking"],
    link: "https://github.com/FinnRu007/Sudoku-Solver",
  },
  {
    name: "Ru-Services Pomodoro Timer",
    status: "Aktiv",
    kategorie: "Exe-Programme",
    beschreibung:
      "Moderner Pomodoro-Timer mit dunklem Design: Fokuszeit, Pausenzeit " +
      "und ein individuelles Lernzeitziel lassen sich frei einstellen, " +
      "der Fortschritt wird live als Kreis- und Balkenanzeige dargestellt.",
    stack: ["Python"],
    link: "https://github.com/FinnRu007/Ru-Pomodoro",
  },
  {
    name: "Nährwert-Log",
    status: "Aktiv",
    kategorie: "Exe-Programme",
    beschreibung:
      "Desktop-Anwendung zum Erfassen von Mahlzeiten, Kalorien, Protein und " +
      "Kosten: Lebensmittel mit Standardmenge oder Stück-Umrechnung (z. B. " +
      "Eier) eintragen, feste Mahlzeiten einmal anlegen und wiederverwenden, " +
      "Körpergewicht über die Zeit verfolgen — alle Daten liegen lokal in " +
      "einer JSON-Datei neben dem Programm, kein Account, keine Cloud.",
    stack: ["Python", "CustomTkinter", "PyInstaller"],
    link: "https://github.com/FinnRu007/NaehrwertLog",
    download: "downloads/NaehrwertLog.exe",
  },
  {
    name: "Fitness Trainer",
    status: "Aktiv",
    kategorie: "Exe-Programme",
    beschreibung:
      "Desktop-Trainingsapp für individuelle Workouts: Übungen frei anlegen " +
      "(Wiederholungen oder Zeit-basiert), zu Trainings zusammenstellen und " +
      "starten. Führt mit Ton- und Farbsignalen durch Aufwärmen, jede Übung " +
      "und Pause, lässt geschaffte Wiederholungen eintragen und speichert " +
      "den Trainingsverlauf lokal in einer SQLite-Datenbank an einem frei " +
      "wählbaren Speicherort.",
    stack: ["Python", "CustomTkinter", "SQLite", "PyInstaller"],
    link: "https://github.com/FinnRu007/Fitnessx",
    download: "",
  },
  {
    name: "YouTube Shorts deaktivieren",
    status: "Aktiv",
    kategorie: "Chrome-Erweiterungen",
    beschreibung:
      "Chrome-Erweiterung, die YouTube entrümpelt und fokussierter macht: " +
      "blendet Shorts komplett aus (inklusive Weiterleitung von Shorts-Links " +
      "auf den normalen Player), auf Wunsch auch Playables und die " +
      "Umfrage-Einblendungen. Zeigt die Dislike-Zahl wieder an, macht " +
      "automatische Titel-/Audio-Übersetzung rückgängig, unterdrückt " +
      "automatische Untertitel und legt eine feste Startlautstärke fest. " +
      "Dazu ein Website-Blocker für ablenkende Seiten (z. B. Instagram) mit " +
      "10-Minuten-Freischaltung und automatisches Ablehnen von Cookie-Bannern. " +
      "Alle Optionen einzeln an- und abschaltbar.",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "declarativeNetRequest"],
    link: "https://github.com/FinnRu007/youtube-shorts-deaktivieren",
    download: "downloads/youtube-shorts-deaktivieren.zip",
    hinweis:
      "ZIP herunterladen und mit Rechtsklick → „Alle extrahieren“ entpacken. " +
      "Dann chrome://extensions öffnen, oben rechts den Entwicklermodus " +
      "aktivieren, „Entpackte Erweiterung laden“ klicken und den entpackten " +
      "Ordner wählen (der Ordner, in dem die Datei manifest.json direkt liegt).",
  },

  // Neues Programm hinzufügen? Einfach diesen Block kopieren
  // und mit deinen Daten füllen:
  //
  // {
  //   name: "Programmname",
  //   status: "Aktiv",
  //   kategorie: "Exe-Programme",
  //   beschreibung: "Beschreibung hier einfügen.",
  //   stack: ["Technologie 1", "Technologie 2"],
  //   link: "https://…",
  //   download: "downloads/dateiname.zip",
  //   hinweis: "",
  // },
];
