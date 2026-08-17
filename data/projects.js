/* ============================================================
   PROJEKTE / BESTEHENDE PROGRAMME
   ------------------------------------------------------------
   Hier trägst du deine Programme ein. Jeder Block zwischen
   { und } ist ein Programm. Du kannst Einträge kopieren,
   einfügen, löschen oder anpassen.

   Felder:
   - name         : Name des Programms
   - status       : z.B. "Aktiv", "In Entwicklung", "Archiviert"
   - beschreibung : Freitext, beliebig lang
   - stack        : Liste der verwendeten Technologien
   - link         : Link zu GitHub o.ä. (optional, sonst "")
   ============================================================ */

const PROJECTS = [
  {
    name: "Ru-Rechnungen",
    status: "Aktiv",
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
    beschreibung:
      "Vorgänger-Version des Rechnungsprogramms. Erzeugt Rechnungen als sauber " +
      "gesetzte LaTeX-PDFs über Jinja2-Vorlagen — für ein technisches, präzises " +
      "Layout statt einer klassischen Office-Vorlage.",
    stack: ["Python", "Tkinter", "Jinja2", "LaTeX"],
    link: "",
  },
  {
    name: "Sudoku-Würfel-Solver",
    status: "In Entwicklung",
    beschreibung:
      "Löst Sudoku-Varianten mit Backtracking-Suche und einer klaren, " +
      "nachvollziehbaren Logik — entstanden aus Interesse an Algorithmen " +
      "und effizienter Problemlösung.",
    stack: ["Python", "Backtracking"],
    link: "",
  },
  {
    name: "Ru-Services Pomodoro Timer",
    status: "Aktiv",
    beschreibung:
      "Moderner Pomodoro-Timer mit dunklem Design: Fokuszeit, Pausenzeit " +
      "und ein individuelles Lernzeitziel lassen sich frei einstellen, " +
      "der Fortschritt wird live als Kreis- und Balkenanzeige dargestellt.",
    stack: ["Python"],
    link: "https://github.com/FinnRu007/Ru-Pomodoro",
  },

  // Neues Programm hinzufügen? Einfach diesen Block kopieren
  // und mit deinen Daten füllen:
  //
  // {
  //   name: "Programmname",
  //   status: "Aktiv",
  //   beschreibung: "Beschreibung hier einfügen.",
  //   stack: ["Technologie 1", "Technologie 2"],
  //   link: "https://…",
  // },
];
