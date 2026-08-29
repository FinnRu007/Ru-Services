/* ============================================================
   ÜBER DEN ENTWICKLER
   ------------------------------------------------------------
   Trage hier deine Infos ein. "bio" ist eine Liste von
   Absätzen. Jeder Eintrag in der Liste wird ein eigener
   Absatz auf der Seite.
   ============================================================ */

const ABOUT = {
  name: "Finn Rummel",
  rolle: "Softwareentwickler · Maschinenbau-Student (M.Sc.)",
  standort: "Braunschweig, Deutschland",

  // Eigenes Foto einfügen:
  // 1. Bilddatei in den Ordner "img/" DIESES Projekts legen
  //    (also neben index.html, NICHT irgendwo auf C:\... )
  // 2. Hier NUR den relativen Pfad eintragen, z.B. "img/profil.jpg"
  //    RICHTIG:  foto: "img/profil.jpg",
  //    FALSCH:   foto: "C:\\Users\\...\\img\\profil.jpg",
  // Leer lassen ("") = es wird weiterhin das Kürzel-Icon angezeigt.
  foto: "img/Bild.jpg",

  bio: [
    "Ich habe meinen Bachelor in Maschinenbau an der Hochschule Minden " +
      "abgeschlossen, mit einem großen Anteil an Informatik im Studium. " +
      "Aktuell studiere ich im Master Maschinenbau an der TU Braunschweig.",
    "Mein Studium habe ich dual absolviert und dadurch bereits während des " +
      "Studiums praktische Berufserfahrung in einem großen Unternehmen " +
      "gesammelt.",
    "Neben dem technischen Studium interessiere ich mich besonders für " +
      "Mathematik und Informatik sowie für wirtschaftliche Zusammenhänge. " +
      "Einen Ausgleich dazu finde ich im Sport, vor allem beim Laufen.",
    "Diese Seite sammelt meine privaten Softwareprojekte an einem Ort: " +
      "ein paar Desktop-Programme, kleine Web-Tools und eine Chrome-Erweiterung.",
  ],

  ausbildung: [
    { titel: "B.Sc. Maschinenbau, Hochschule Minden", info: "abgeschlossen" },
    { titel: "M.Sc. Maschinenbau, TU Braunschweig", info: "laufend" },
  ],

  interessen: [
    "Mathematik",
    "Informatik",
    "Sport, insbesondere Laufen",
    "Wirtschaft",
  ],

  kontakt: {
    email: "finn.rummel@gmail.com",
    telefon: "+49 1516 3472487",
    github: "https://github.com/FinnRu007",
  },
};
