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
    name: "Sudoku",
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
    name: "Klimaquiz",
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
    name: "Rechnungen",
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
    name: "Pomodoro",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Pomodoro-Timer mit dunklem Design: Fokuszeit, Pausenzeit und Tagesziel " +
      "frei einstellbar, Fortschritt als Kreis- und Balkenanzeige.",
    stack: ["Python"],
    link: "https://github.com/FinnRu007/Ru-Pomodoro",
    download: "downloads/Pomodoro.exe",
  },
  {
    name: "Naehrwert",
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
    name: "Fitness",
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
    name: "Online",
    status: "In Entwicklung",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Windows-Programm, das den Rechner als aktiv hält, damit Microsoft Teams " +
      "nicht von selbst auf „Abwesend“ springt. Sendet in einstellbarem Takt " +
      "(Standard alle 4 Minuten) ein unsichtbares Tastensignal (F15) und sperrt " +
      "auf Wunsch Energiesparmodus und Bildschirmschoner. Start und Stopp per Klick.",
    stack: ["Python", "CustomTkinter", "PyInstaller"],
    hinweis:
      "Download derzeit nicht verfügbar – Windows Defender meldet für die EXE " +
      "einen Fehlalarm (Wacatac.B!ml, typisch für mit PyInstaller gebaute " +
      "Programme). Wird überarbeitet.",
  },
  {
    name: "Focus",
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
  {
    name: "Curve",
    status: "Aktiv",
    kategorie: "Desktop-Programme",
    beschreibung:
      "Partyspiel-Turnier für viele Leute an einem PC, über LAN oder übers " +
      "Internet: dreizehn kurze Minispiele. Sechs davon sind reine " +
      "Gegeneinander-Spiele in einer Arena – Ru-Sumo (die anderen aus dem " +
      "schrumpfenden Ring schubsen), Ru-Jagd (Fangen, wer vorn liegt wird " +
      "gejagt), Ru-Ernte (Kristalle sammeln und anderen abnehmen), Ru-Klecks " +
      "(wie agar.io: wachsen und Kleinere verschlucken, aber groß macht " +
      "langsam), das Ru-Rennen und „Achtung die Kurve“. Dazu Reaktion, " +
      "Tastenfolge merken, " +
      "Kopfrechnen, Flächeninhalt, Schätzen, Ausreißer finden und Hämmern. " +
      "Alle spielen gleichzeitig gegeneinander, und Tempo entscheidet: bei den " +
      "Quizspielen bringt eine schnelle Antwort deutlich mehr Punkte als eine " +
      "späte. Die Aufgaben passen sich dabei an: lief die letzte Runde gut, " +
      "wird die nächste schwerer – und alle bekommen immer dieselbe Aufgabe. " +
      "Eine Rangliste zeigt jederzeit, wer gerade vorn liegt. Jedes " +
      "Minispiel lässt sich auch einzeln starten. Der Clou: jeder Spieler hat " +
      "nur drei Tasten (links, Aktion, rechts) – so passen beliebig viele an " +
      "eine Tastatur, und dasselbe funktioniert übers Netzwerk. Beim Hosten " +
      "öffnet das Spiel den Port per UPnP selbst und zeigt die Adresse an, " +
      "unter der Freunde von außerhalb beitreten können. „Achtung die Kurve“ " +
      "gibt es weiterhin einzeln, mit 14 Powerups, KI-Bots und frei " +
      "justierbaren Spielparametern.",
    stack: ["Python", "pygame", "NumPy", "Sockets (LAN)", "PyInstaller"],
    link: "https://github.com/FinnRu007/Ru-Curve",
    download: "downloads/Ru-Curve.zip",
    hinweis:
      "ZIP herunterladen und entpacken, dann im Ordner Ru-Curve die Datei " +
      "Ru-Curve.exe starten. Meldet Windows Defender einen Fehlalarm: das ist " +
      "bei mit PyInstaller gepackten Programmen bekannt, die Dateien sind " +
      "ungefährlich (Quellcode offen auf GitHub) – ggf. in Windows-Sicherheit " +
      "unter „Schutzverlauf“ wiederherstellen und für den Ordner eine Ausnahme " +
      "hinzufügen. Für LAN beim ersten „Hosten“ die Windows-Firewall zulassen – " +
      "notfalls tools/firewall_freigeben.bat als Administrator ausführen. Zum " +
      "Spielen übers Internet zeigt die Lobby die öffentliche Adresse an; " +
      "klappt die automatische Portfreigabe nicht, im Router den Port 51738 " +
      "(TCP) auf den Host-PC weiterleiten.",
  },

  {
    name: "Pokemon",
    status: "In Entwicklung",
    beschreibung:
      "PC-Remake von Pokémon Perl (Gen 4) in Godot 4: 2.5D-Welt mit " +
      "Echtzeit-Multiplayer auf der Overworld, rundenbasiertes Kampfsystem " +
      "nach Gen-4-Formeln und waschechte Dex-/Item-/Attackendaten.",
    stack: ["Godot 4", "GDScript", "ENet", "Python (Datenpipeline)"],
    link: "https://github.com/FinnRu007/Ru-Pokemon",
    hinweis:
      "Privates Repo (Nintendo-IP, nur für den privaten Gebrauch) – kein " +
      "öffentlicher Download.",
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
