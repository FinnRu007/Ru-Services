/* ============================================================
   ÜBER DEN ENTWICKLER
   ------------------------------------------------------------
   Trage hier deine Infos ein. "bio" ist eine Liste von
   Absätzen — jeder Eintrag in der Liste wird ein eigener
   Absatz auf der Seite.
   ============================================================ */

const ABOUT = {
  name: "Finn Ru",
  rolle: "Entwickler · Maschinenbau-Student",
  standort: "Deutschland",

  // Eigenes Foto einfügen:
  // 1. Bilddatei in den Ordner "img/" DIESES Projekts legen
  //    (also neben index.html, NICHT irgendwo auf C:\... )
  // 2. Hier NUR den relativen Pfad eintragen, z.B. "img/profil.jpg"
  //    RICHTIG:  foto: "img/profil.jpg",
  //    FALSCH:   foto: "C:\\Users\\...\\img\\profil.jpg",
  // Leer lassen ("") = es wird weiterhin das Kürzel-Icon angezeigt.
  foto: "img/Bild.jpg",

  bio: [
    "Ich studiere Maschinenbau im Bachelor und beschäftige mich neben dem " +
      "Studium mit Softwareentwicklung — vor allem mit praktischen Tools, " +
      "die echte Probleme lösen, statt nur Demos zu sein.",
    "Technik interessiert mich in die Tiefe: von Werkstoffkunde und " +
      "numerischer Mathematik im Studium bis zu eigenen Programmen, die " +
      "ich von der ersten Idee bis zur fertigen Anwendung baue.",
    "Ru-Services ist der Rahmen für diese Projekte — ein Ort, an dem " +
      "Ingenieurs-Denken und Softwareentwicklung zusammenkommen.",
  ],

  ausbildung: [
    { titel: "B.Sc. Maschinenbau", info: "laufend" },
  ],

  interessen: [
    "Werkstofftechnik & Materialwissenschaft",
    "Numerische Methoden",
    "KI & Automatisierung",
    "Softwareentwicklung",
  ],

  kontakt: {
    email: "",
    github: "https://github.com/FinnRu007",
  },
};
