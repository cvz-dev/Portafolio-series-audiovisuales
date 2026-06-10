/* ===== Catálogo del portafolio — EPISODIA ===== */
/* El portafolio se organiza en ACTIVIDADES. Cada actividad agrupa varias SERIES (evidencias). */
/* hue = matiz base del thumbnail; era = año aprox para el orden cronológico. */

/* ---- Actividades (cada una es una entrega de la materia) ---- */
window.ACTIVIDADES = [
  {
    id: "a1", num: "1", title: "Inicios de Series",
    desc: "Cómo crees que impacta el inicio de serie, sobre todo de las que vimos? Narrativamente como maneja el ritmo y como arma un mood. Utiliza las series vistas en clase para poner ejemplos, y suma una serie que ha ti te haya gustado su inicio y que te atrapo para seguirla viendo.\nLas series vistas, por orden, fueron:\n1.-The west wing (youtube)\n2.-House of Cards (Netflix)\n3.- All her fault (HBO, prime)\n4.- Newsroom (Prime)",
    hue: 205
  },
  {
    id: "a2", num: "2", title: "Análisis de Friends y Modern Family",
    desc:"Análisis comparativo de las series que vimos; Friends y Modern family.  Recuerda que la intensión es que se haga una comparación entre ambos tipos de comedia.\nModern family: “Connection Lost” (T6E16)\nFriends; The one when Ross got High (T6E9)",
    hue: 280
  },
  {
    id: "a3", num: "3", title: "This is us: “Super Bowl Sunday” (T2E14)",
    desc: "Análisis sobre la serie",
    hue: 10
  },
  {
    id: "a4", num: "4", title: "Familia",
    desc: "Análisis de las series de:\nMalcom, (T2E20) Boliche.\nArrested develpment (T1E10) Pier Pressure.\nBluey (8T2-E9) Hora de dormir.\nMarried with children (T1 E1).",
    hue: 35
  }
];

window.EVIDENCIAS = [
  {
    id: "e01", ch: "01", title: "The West Wing",
    hue: 215, cover: "images/westWing.jpg", backdrop: "images/westWing-backdrop.jpg", coverPosition: "center 10%", era: 1999, actividad: "a1", year: "1999–2006",
    tags: ["Drama político", "NBC", "Warner Bros. TV"],
    tagline: "El ala oeste como escenario del poder y la narrativa serial de autor.",
    syn: "Serie dramática creada por Aaron Sorkin que sigue el día a día del personal del ala oeste de la Casa Blanca durante la presidencia ficticia del demócrata Josiah Bartlet. A través de sus siete temporadas, explora los dilemas políticos, morales y personales de quienes ejercen el poder en el gobierno de Estados Unidos.",
    progress: 0, featured: false
  },
  {
    id: "e02", ch: "02", title: "House of Cards",
    hue: 210, baseColor: "#6B0F1A", cover: "images/houseOfCards.png", backdrop: "images/houseOfCards-backdrop.png", backdropPosition: "center 40%", era: 2013, actividad: "a1", year: "2013–2018",
    tags: ["Thriller político", "Netflix", "Media Rights Capital"],
    tagline: "La primera apuesta de Netflix que cambió las reglas del juego.",
    syn: "Drama político que sigue a Frank Underwood, un ambicioso congresista demócrata, y a su esposa Claire en su despiadada escalada hacia el poder en Washington D.C. Adaptación de la miniserie británica homónima, retrata las maniobras de manipulación, traición y corrupción que caracterizan la política de alto nivel.",
    progress: 0, featured: false
  },
  {
    id: "e03", ch: "03", title: "All Her Fault",
    hue: 285, cover: "images/allHerFault.png", backdrop: "images/allHerFault-backdrop.png", backdropSize: "95%", era: 2025, actividad: "a1", year: "2025",
    tags: ["Thriller doméstico", "Prime Video", "Amazon MGM Studios"],
    tagline: "Un thriller psicológico que expone la vulnerabilidad en la era contemporánea.",
    syn: "Miniserie de suspense basada en la novela de Andrea Mara que narra la angustiante búsqueda de Marissa Irvine tras descubrir que su hijo ha desaparecido después de dejarlo en su primer día de clases. A medida que la investigación avanza, los secretos y mentiras que rodean a la familia comienzan a salir a la luz.",
    progress: 0, featured: false
  },
  {
    id: "e04", ch: "04", title: "The Newsroom",
    hue: 220, cover: "images/theNewsroom.jpg", backdrop: "images/theNewsroom-backdrop.jpg", backdropPosition: "center 25%" , era: 2012, actividad: "a1", year: "2012–2014",
    tags: ["Drama periodístico", "HBO", "Aaron Sorkin"],
    tagline: "La sala de redacción como arena del ideal democrático.",
    syn: "Creada por Aaron Sorkin, sigue el trabajo cotidiano del equipo de una cadena de noticias por cable estadounidense mientras intentan cubrir los grandes eventos de actualidad con rigor e integridad. Explora las tensiones entre el periodismo de calidad, los intereses corporativos y las presiones del mundo mediático moderno.",
    progress: 0, featured: false
  },
  {
    id: "e05", ch: "05", title: "Dark",
    hue: 265, cover: "images/dark.jpg", backdrop: "images/dark-backdrop.jpg", era: 2017, actividad: "a1", year: "2017–2020",
    tags: ["Ciencia ficción", "Netflix", "Wiedemann & Berg"],
    tagline: "La primera serie alemana de Netflix que redefinió el thriller de ciencia ficción europeo.",
    syn: "Primera serie original en alemán de Netflix, que comienza con la desaparición de un niño en el pueblo ficticio de Winden y desencadena una compleja trama que conecta a cuatro familias a través de distintas épocas mediante viajes en el tiempo. Explora las consecuencias existenciales del tiempo, el destino y los lazos intergeneracionales a lo largo de tres temporadas.",
    progress: 0, featured: true
  },
  {
    id: "e06", ch: "06", title: "Friends",
    hue: 42, cover: "images/friends.jpg", backdrop: "images/friends-backdrop.jpg", backdropPosition: "center 15%", era: 1994, actividad: "a2", year: "1994–2004",
    tags: ["Sitcom", "NBC", "HBO Max"],
    tagline: "El modelo canónico de la comedia de situación en televisión de red.",
    syn: "Comedia de situación que narra la vida cotidiana de seis amigos —Rachel, Monica, Phoebe, Ross, Chandler y Joey— en el barrio de Manhattan, Nueva York. A lo largo de diez temporadas retrata sus relaciones sentimentales, aspiraciones profesionales y los desafíos de la vida adulta con un tono humorístico.",
    progress: 0, featured: false
  },
  {
    id: "e07", ch: "07", title: "Modern Family",
    hue: 162, cover: "images/modernFamily.jpeg", backdrop: "images/modernFamily-backdrop.jpg", backdropPosition: "center 15%", era: 2009, actividad: "a2", year: "2009–2020",
    tags: ["Mockumentary", "ABC", "Disney Plus"],
    tagline: "La evolución del sitcom clásico hacia el falso documental.",
    syn: "Comedia en formato de falso documental que sigue la vida de tres ramas de una misma familia en Los Ángeles: la familia tradicional de Claire, la familia reconstituida de su padre Jay, y la familia homoparental de su hermano Mitchell y su pareja Cameron. Retrata con humor las dinámicas y contradicciones de la familia contemporánea a lo largo de once temporadas.",
    progress: 0, featured: false
  },
  {
    id: "e08", ch: "08", title: "This Is Us",
    hue: 20, cover: "images/thisIsUs.jpg", coverPosition: "center top", backdrop: "images/thisIsUs-backdrop.jpg", backdropPosition: "center 30%", era: 2016, actividad: "a3", year: "2016–2022",
    tags: ["Drama familiar", "NBC", "Disney Plus"],
    tagline: "Una crónica emocional de la familia americana contada a través del tiempo.",
    syn: "Drama creado por Dan Fogelman que sigue las vidas de los trillizos Pearson y sus padres a través de distintas épocas. Con una narrativa no lineal que salta entre el pasado y el presente, explora los lazos familiares, el duelo, la identidad y el amor incondicional a lo largo de seis temporadas.",
    progress: 0, featured: false
  },
  {
    id: "e09", ch: "09", title: "Malcolm in the Middle",
    hue: 28, cover: "images/malcolmInTheMiddle.jpg", coverPosition: "center top", backdrop: "images/malcolmInTheMiddle-backdrop.jpg", backdropPosition: "center 25%", era: 2000, actividad: "a4", year: "2000–2006",
    tags: ["Sitcom", "Fox", "20th Television"],
    tagline: "El sitcom sin risas enlatadas que rompió las reglas de la comedia familiar.",
    syn: "Creada por Linwood Boomer, sigue la vida caótica de Malcolm, un niño con un coeficiente intelectual extraordinario atrapado en una familia disfuncional de clase media. Con cámara única y sin risas enlatadas, fue pionera en la comedia familiar contemporánea y lanzó la carrera de Bryan Cranston.",
    progress: 0, featured: false
  },
  {
    id: "e10", ch: "10", title: "Bluey",
    hue: 205, cover: "images/bluey.jpg", coverPosition: "center 30%", backdrop: "images/bluey-backdrop.jpg", backdropPosition: "center 50%", era: 2018, actividad: "a4", year: "2018–presente",
    tags: ["Animación", "ABC Kids AU", "Disney Plus"],
    tagline: "La serie animada australiana que redefinió el entretenimiento familiar global.",
    syn: "Serie animada australiana creada por Ludo Studio que sigue las aventuras cotidianas de Bluey, una cachorra de Blue Heeler de seis años, junto a su familia. Reconocida por su representación honesta de la crianza y la infancia, se convirtió en un fenómeno global aclamado por niños y adultos por igual.",
    progress: 0, featured: false
  },
  {
    id: "e11", ch: "11", title: "Arrested Development",
    hue: 45, cover: "images/arrestedDevelopment.jpg", coverPosition: "center 50%", backdrop: "images/arrestedDevelopment-backdrop.jpg", backdropPosition: "center 30%", era: 2003, actividad: "a4", year: "2003–2019",
    tags: ["Mockumentary", "Fox / Netflix", "Imagine Entertainment"],
    tagline: "La comedia de culto que llevó el humor absurdo y autorreferencial a otro nivel.",
    syn: "Creada por Mitchell Hurwitz, narra el colapso de los Bluth, una familia adinerada cuyo patriarca es arrestado por fraude corporativo, dejando al hijo responsable Michael a cargo del caos familiar. Conocida por su humor en capas, referencias internas y narrativa intrincada, es considerada una de las mejores comedias de la televisión.",
    progress: 0, featured: false
  },
  {
    id: "e12", ch: "12", title: "Married with Children",
    hue: 340, cover: "images/marriedWithChildren.jpg", coverPosition: "center top", backdrop: "images/marriedWithChildren-backdrop.jpg", backdropPosition: "center top", era: 1987, actividad: "a4", year: "1987–1997",
    tags: ["Sitcom", "Fox", "ELP Communications"],
    tagline: "La sitcom que desafió la televisión familiar con humor irreverente y clase trabajadora.",
    syn: "Creada por Ron Leavitt y Michael G. Moye, sigue la vida de los Bundy: Al, un vendedor de zapatos amargado, su esposa Peg y sus dos hijos en Chicago. Primera gran apuesta de la cadena Fox, revolucionó el género al retratar una familia disfuncional con un humor crudo y anticorrecto que rompía con los sitcoms idealizados de la época.",
    progress: 0, featured: false
  }
];

/* ---- Helpers de actividad ---- */
window.ACT_BY_ID = Object.fromEntries(window.ACTIVIDADES.map((a) => [a.id, a]));
window.getAct = (ev) => window.ACT_BY_ID[ev.actividad] || null;
window.actLabel = (ev) => {
  const a = window.getAct(ev);
  return a ? `ACTIVIDAD ${a.num} · ${a.title}` : "";
};
window.seriesDeActividad = (id) => window.EVIDENCIAS.filter((e) => e.actividad === id);
