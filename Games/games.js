/* ============================================================
   SPIELE
   ------------------------------------------------------------
   Jeder Block zwischen { und } ist ein Spiel. Neues Spiel:
   1. Ordner unter Games/ anlegen, z. B. Games/mein-spiel/
      mit index.html (und optional cover.jpg).
   2. Hier einen Block kopieren und anpassen.

   Felder:
   - name         : Name des Spiels
   - ordner       : Ordnername unter Games/ (ohne Schrägstriche)
   - status       : "Neu" | "Aktiv" | "In Entwicklung"
   - genre        : kurze Einordnung, z. B. "Flug & Upgrades"
   - beschreibung : Freitext
   - steuerung    : kurze Info zur Steuerung
   - cover        : Bild im Spielordner, z. B. "cover.jpg" (optional)
   ============================================================ */

const GAMES = [
  {
    name: "Rexi will fliegen",
    ordner: "rexi-will-fliegen",
    status: "Neu",
    genre: "Flug & Upgrades",
    beschreibung:
      "Rexi ist ein kleiner T-Rex mit kurzen Ärmchen, der unbedingt fliegen will. " +
      "Von der Rampe rutschen, durch acht Gebiete segeln, Bernstein sammeln und in " +
      "Omas Werkstatt aufrüsten: Rampen, Schlitten, Flügel, Raketen und Extras. " +
      "Über 100 Ziele, 24 Fossilien und ein großes Ziel: den Meteor im Weltall erwischen.",
    steuerung: "Tastatur · Leertaste und Pfeiltasten",
    cover: "cover.jpg",
  },
];
