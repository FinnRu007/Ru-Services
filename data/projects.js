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
      "Löst eingegebene Sudokus und erzeugt neue, eindeutig lösbare Rätsel " +
      "in vier Schwierigkeitsstufen. Läuft im Browser, mit Backtracking und " +
      "Hinweis auf Widersprüche.",
    stack: ["HTML", "CSS", "JavaScript", "Backtracking"],
    website: "https://finnru007.github.io/Ru-Sudoku/",
    link: "https://github.com/FinnRu007/Ru-Sudoku",
  },
  {
    name: "Klimawissen-Test",
    status: "Aktiv",
    kategorie: "Web-Projekte",
    beschreibung:
      "Quiz zum Klimawandel: Zahlen rund um Erde und Klima per Schieberegler " +
      "schätzen, die Punktzahl richtet sich nach der Abweichung. Fünf Kapitel " +
      "mit Auswertung je Kapitel und am Ende.",
    stack: ["HTML", "CSS", "JavaScript"],
    website: "https://finnru007.github.io/Ru-Klimaquiz/",
    link: "https://github.com/FinnRu007/Ru-Klimaquiz",
  },
  {
    name: "Ru-Rechnungen",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Windows-Programm zur Rechnungserstellung für landwirtschaftliche " +
      "Betriebe. Erzeugt PDF-Rechnungen und verwaltet Kunden- und " +
      "Positionsdaten lokal.",
    stack: ["Python", "CustomTkinter", "ReportLab", "PyInstaller"],
    link: "",
  },
  {
    name: "Pomodoro Timer",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Pomodoro-Timer mit dunklem Design: Fokuszeit, Pausenzeit und Tagesziel " +
      "frei einstellbar, Fortschritt als Kreis- und Balkenanzeige.",
    stack: ["Python"],
    link: "https://github.com/FinnRu007/Ru-Pomodoro",
  },
  {
    name: "Nährwert-Log",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Windows-Programm für Mahlzeiten, Kalorien, Protein und Kosten. " +
      "Lebensmittel per Standardmenge oder Stück eintragen, feste Mahlzeiten " +
      "wiederverwenden, Gewicht verfolgen. Alle Daten lokal in einer " +
      "JSON-Datei, kein Account.",
    stack: ["Python", "CustomTkinter", "PyInstaller"],
    link: "https://github.com/FinnRu007/Ru-Naehrwert",
    download: "downloads/NaehrwertLog.exe",
  },
  {
    name: "Fitness Trainer",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Windows-Trainingsapp: Übungen anlegen (Wiederholungen oder Zeit), zu " +
      "Trainings zusammenstellen und starten. Führt mit Ton- und Farbsignalen " +
      "durch Aufwärmen, Übungen und Pausen und speichert den Verlauf lokal in " +
      "einer SQLite-Datenbank.",
    stack: ["Python", "CustomTkinter", "SQLite", "PyInstaller"],
    link: "https://github.com/FinnRu007/Ru-Fitness",
    download: "downloads/FitnessTrainer.exe",
  },
  {
    name: "YouTube Shorts deaktivieren",
    status: "Aktiv",
    kategorie: "Chrome-Erweiterungen",
    beschreibung:
      "Chrome-Erweiterung, die YouTube aufräumt: blendet Shorts aus (inklusive " +
      "Umleitung von Shorts-Links auf den normalen Player), auf Wunsch auch " +
      "Playables und Umfragen. Zeigt die Dislike-Zahl wieder an, macht die " +
      "automatische Titel- und Audio-Übersetzung rückgängig, unterdrückt " +
      "automatische Untertitel und setzt eine feste Startlautstärke. Dazu ein " +
      "Website-Blocker für ablenkende Seiten mit 10-Minuten-Freischaltung und " +
      "automatisches Ablehnen von Cookie-Bannern. Alle Optionen einzeln " +
      "schaltbar.",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "declarativeNetRequest"],
    link: "https://github.com/FinnRu007/Ru-Focus",
    download: "downloads/Ru-Focus.zip",
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
