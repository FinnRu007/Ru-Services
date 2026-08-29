/* ============================================================
   PROJEKTE
   ------------------------------------------------------------
   Hier stehen die Projekte. Jeder Block zwischen { und } ist
   ein Projekt. Einträge lassen sich kopieren, einfügen,
   löschen oder anpassen.

   Felder:
   - name         : Name des Projekts
   - status       : "Aktiv" | "In Entwicklung" | "Archiviert"
   - kategorie    : "Desktop-Programme" | "Chrome-Erweiterungen" | "Web-Projekte"
                    Danach kann auf der Startseite gefiltert werden.
                    Weglassen = erscheint unter "Sonstige".
   - beschreibung : Freitext, beliebig lang
   - stack        : Liste der verwendeten Technologien
   - website      : Link zur Live-Seite (nur bei Web-Projekten), sonst weglassen
   - link         : Link zum Quellcode (GitHub o.ä.), optional
   - download     : Pfad zu einer Datei im Repo, z.B. "downloads/programm.exe"
                    (nur bei Desktop-Programmen / Erweiterungen), optional
   - hinweis      : Kurzer Hinweis als Info-Zeile auf der Karte, optional
   ============================================================ */

const PROJECTS = [
  {
    name: "Sudoku-Löser",
    status: "Aktiv",
    kategorie: "Web-Projekte",
    beschreibung:
      "Löst beliebige Sudokus per Knopfdruck und generiert auf Wunsch neue, " +
      "eindeutig lösbare Sudokus in vier Schwierigkeitsstufen. Läuft komplett " +
      "im Browser mit Backtracking-Suche und Live-Erkennung von Widersprüchen.",
    stack: ["HTML", "CSS", "JavaScript", "Backtracking"],
    website: "https://finnru007.github.io/Sudoku-Solver/",
    link: "https://github.com/FinnRu007/Sudoku-Solver",
  },
  {
    name: "Klimawissen-Test",
    status: "Aktiv",
    kategorie: "Web-Projekte",
    beschreibung:
      "Ein Quiz zum Klimawandel: Zahlen rund um Erde und Klima werden über " +
      "Schieberegler geschätzt, die Bewertung läuft über eine Gauß-Kurve " +
      "(genau richtig = 10 Punkte, je weiter weg, desto weniger). Fünf Kapitel " +
      "mit Auswertung nach jedem Kapitel und einer Gesamtauswertung am Ende.",
    stack: ["HTML", "CSS", "JavaScript"],
    website: "https://finnru007.github.io/Klimawissen-Test/",
    link: "https://github.com/FinnRu007/Klimawissen-Test",
  },
  {
    name: "Ru-Rechnungen",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Desktop-Anwendung zur Rechnungserstellung für landwirtschaftliche Betriebe. " +
      "Erstellt professionelle PDF-Rechnungen auf Knopfdruck, verwaltet Kunden- und " +
      "Positionsdaten lokal und läuft als eigenständige Windows-Anwendung ohne " +
      "zusätzliche Installation.",
    stack: ["Python", "CustomTkinter", "ReportLab", "PyInstaller"],
    link: "",
  },
  {
    name: "Pomodoro Timer",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
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
    kategorie: "Desktop-Programme",
    beschreibung:
      "Desktop-Anwendung zum Erfassen von Mahlzeiten, Kalorien, Protein und " +
      "Kosten: Lebensmittel mit Standardmenge oder Stück-Umrechnung (z. B. " +
      "Eier) eintragen, feste Mahlzeiten einmal anlegen und wiederverwenden, " +
      "Körpergewicht über die Zeit verfolgen — alle Daten liegen lokal in " +
      "einer JSON-Datei neben dem Programm, kein Account, keine Cloud.",
    stack: ["Python", "CustomTkinter", "PyInstaller"],
    download: "downloads/NaehrwertLog.exe",
  },
  {
    name: "Fitness Trainer",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Desktop-Trainingsapp für individuelle Workouts: Übungen frei anlegen " +
      "(Wiederholungen oder Zeit-basiert), zu Trainings zusammenstellen und " +
      "starten. Führt mit Ton- und Farbsignalen durch Aufwärmen, jede Übung " +
      "und Pause, lässt geschaffte Wiederholungen eintragen und speichert " +
      "den Trainingsverlauf lokal in einer SQLite-Datenbank an einem frei " +
      "wählbaren Speicherort.",
    stack: ["Python", "CustomTkinter", "SQLite", "PyInstaller"],
    link: "https://github.com/FinnRu007/Fitnessx",
    download: "downloads/FitnessTrainer.exe",
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

  // Neues Projekt hinzufügen? Diesen Block kopieren und ausfüllen:
  //
  // {
  //   name: "Projektname",
  //   status: "Aktiv",
  //   kategorie: "Web-Projekte",
  //   beschreibung: "Beschreibung hier einfügen.",
  //   stack: ["Technologie 1", "Technologie 2"],
  //   website: "https://…",
  //   link: "https://github.com/…",
  // },
];
