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
   - download     : Pfad zu einer Datei im Repo, die direkt herunter-
                    geladen werden kann, z.B. "downloads/mein-programm.html"
                    (optional, sonst weglassen oder "")
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
  name: "Sudoku-Löser",
  status: "Aktiv",
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
    beschreibung:
      "Moderner Pomodoro-Timer mit dunklem Design: Fokuszeit, Pausenzeit " +
      "und ein individuelles Lernzeitziel lassen sich frei einstellen, " +
      "der Fortschritt wird live als Kreis- und Balkenanzeige dargestellt.",
    stack: ["Python"],
    link: "https://github.com/FinnRu007/Ru-Pomodoro",
  },
  {
    name: "Ernährungsplaner (Nährwert-Log)",
    status: "Aktiv",
    beschreibung:
      "Persönlicher Ernährungs-Tracker als eigenständige Web-App: erfasst " +
      "Mahlzeiten und Kalorien pro Tag, verfolgt das Körpergewicht über " +
      "die Zeit und stellt beides übersichtlich in Tages- und Verlaufs-" +
      "Ansichten dar — läuft komplett offline im Browser, ohne Installation.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "",
    download: "https://drive.google.com/file/d/10MJo5rbMsnzXOlfSber2KUUd-1RL6rCy/view?usp=drive_link",
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
  //   download: "downloads/dateiname.html",
  // },
];
