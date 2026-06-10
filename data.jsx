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
    tags: ["Drama", "NBC", "Warner Bros. TV"],
    tagline: "El ala oeste como escenario del poder y la narrativa serial de autor.",
    syn: "The West Wing (El ala oeste de la Casa Blanca) es un aclamado drama político que narra el día a día de la administración del presidente ficticio de EE. UU., el demócrata Josiah 'Jed' Bartlet.",
    progress: 0, featured: false
  },
  {
    id: "e02", ch: "02", title: "House of Cards",
    hue: 210, baseColor: "#6B0F1A", cover: "images/houseOfCards.png", backdrop: "images/houseOfCards-backdrop.png", backdropPosition: "center 40%", era: 2013, actividad: "a1", year: "2013–2018",
    tags: ["Drama", "Suspenso", "Netflix"],
    tagline: "La primera apuesta de Netflix que cambió las reglas del juego.",
    syn: "Traicionado por la Casa Blanca, Frank Underwood inicia una fiera lucha por el poder. Sus armas: chantaje y secucción",
    progress: 0, featured: false
  },
  {
    id: "e03", ch: "03", title: "All Her Fault",
    hue: 285, cover: "images/allHerFault.png", backdrop: "images/allHerFault-backdrop.png", backdropSize: "95%", era: 2025, actividad: "a1", year: "2025",
    tags: ["Drama", "Suspenso", "Prime Video"],
    tagline: "Un thriller psicológico que expone la vulnerabilidad en la era contemporánea.",
    syn: "Marissa y Peter Irvine entran en una pesadilla cuando su pequeño hijo es secuestrado.",
    progress: 0, featured: false
  },
  {
    id: "e04", ch: "04", title: "The Newsroom",
    hue: 220, cover: "images/theNewsroom.jpg", backdrop: "images/theNewsroom-backdrop.jpg", backdropPosition: "center 25%" , era: 2012, actividad: "a1", year: "2012–2014",
    tags: ["Drama", "HBO Max"],
    tagline: "La sala de redacción como arena del ideal democrático.",
    syn: "Sigue la actualidad de un canal de noticias, centrándose en el presentador Will McAvoy y su nueva forma de hacer periodismo televisivo.",
    progress: 0, featured: false
  },
  {
    id: "e05", ch: "05", title: "Dark",
    hue: 265, cover: "images/dark.jpg", backdrop: "images/dark-backdrop.jpg", era: 2017, actividad: "a1", year: "2017–2020",
    tags: ["Drama", "Ciencia ficción", "Familia", "Netflix",],
    tagline: "La primera serie alemana de Netflix que redefinió el thriller de ciencia ficción europeo.",
    syn: "Ambientada en la Alemania contemporánea, la serie gira alrededor de la desaparición de dos niños en Widen. El pueblo se vuelca en buscarles hasta que la situación cada vez se convierte más en una experiencia sobrenatural. Parece ser que todo se relaciona con los inexplicables sucesos que ocurrieron en 1986. Toda esta misteriosa desaparición, además, sacará a la luz el pasado y los secretos de cuatro familias que descubren que están conectadas.",
    progress: 0, featured: true
  },
  {
    id: "e06", ch: "06", title: "Friends",
    hue: 42, cover: "images/friends.jpg", backdrop: "images/friends-backdrop.jpg", backdropPosition: "center 15%", era: 1994, actividad: "a2", year: "1994–2004",
    tags: ["Comedia", "Romance", "Amigos", "HBO Max"],
    tagline: "El modelo canónico de la comedia de situación en televisión de red.",
    syn: "La exitosa comedia 'Friends' sigue la vida de un grupo de amigos que, explorando sus relaciones y aventuras cómicas, navegan por la vida adulta.",
    progress: 0, featured: false
  },
  {
    id: "e07", ch: "07", title: "Modern Family",
    hue: 162, cover: "images/modernFamily.jpeg", backdrop: "images/modernFamily-backdrop.jpg", backdropPosition: "center 15%", era: 2009, actividad: "a2", year: "2009–2020",
    tags: ["Comedia", "Drama", "Familia", "Disney Plus"],
    tagline: "La evolución del sitcom clásico hacia el falso documental.",
    syn: "Modern Family muestra a tres familias a través de la lente estilo documental",
    progress: 0, featured: false
  },
  {
    id: "e08", ch: "08", title: "This Is Us",
    hue: 20, cover: "images/thisIsUs.jpg", coverPosition: "center top", backdrop: "images/thisIsUs-backdrop.jpg", backdropPosition: "center 30%", era: 2016, actividad: "a3", year: "2016–2022",
    tags: ["Drama", "Comedia", "Familia", "Disney Plus"],
    tagline: "Una crónica emocional de la familia americana contada a través del tiempo.",
    syn: "Una comedia dramática con un grupo de personajes únicos nacidos todos el mismo día",
    progress: 0, featured: false
  },
  {
    id: "e09", ch: "09", title: "Malcolm in the Middle",
    hue: 28, cover: "images/malcolmInTheMiddle.jpg", coverPosition: "center top", backdrop: "images/malcolmInTheMiddle-backdrop.jpg", backdropPosition: "center 25%", era: 2000, actividad: "a4", year: "2000–2006",
    tags: ["Comedia", "Drama", "Familia", "Fox", "Disney plus"],
    tagline: "El sitcom sin risas enlatadas que rompió las reglas de la comedia familiar.",
    syn: "Un niño genio que se enfrenta a sus otros dos hermanos y a sus padres excéntricos en la vida familiar cotidiana.",
    progress: 0, featured: false
  },
  {
    id: "e10", ch: "10", title: "Bluey",
    hue: 205, cover: "images/bluey.jpg", coverPosition: "center 30%", backdrop: "images/bluey-backdrop.jpg", backdropPosition: "center 50%", era: 2018, actividad: "a4", year: "2018–presente",
    tags: ["Animación", "Familia", "Disney Plus"],
    tagline: "La serie animada australiana que redefinió el entretenimiento familiar global.",
    syn: "Bluey es una perrita de seis años que llena de aventuras la vida familiar",
    progress: 0, featured: false
  },
  {
    id: "e11", ch: "11", title: "Arrested Development",
    hue: 45, cover: "images/arrestedDevelopment.jpg", coverPosition: "center 50%", backdrop: "images/arrestedDevelopment-backdrop.jpg", backdropPosition: "center 30%", era: 2003, actividad: "a4", year: "2003–2019",
    tags: ["Comedia", "Familia", "Fox", "Netflix"],
    tagline: "La comedia de culto que llevó el humor absurdo y autorreferencial a otro nivel.",
    syn: "A Michael Bluth le tocó tomar las riendas del negocio familiar después de que su padre fue encarcelado, pero el resto de su disfuncional familia hacen que el trabajo sea insoportable.",
    progress: 0, featured: false
  },
  {
    id: "e12", ch: "12", title: "Married with Children",
    hue: 340, cover: "images/marriedWithChildren.jpg", coverPosition: "center top", backdrop: "images/marriedWithChildren-backdrop.jpg", backdropPosition: "center top", era: 1987, actividad: "a4", year: "1987–1997",
    tags: ["Comedia", "Familia", "Fox", "HBO Max"],
    tagline: "La sitcom que desafió la televisión familiar con humor irreverente y clase trabajadora.",
    syn: "Tras 16 años de casados, Peggy y Al Bundy saben que el secreto de un matrimonio feliz es la igualdad, es decir, ¡todos sufren por igual!.",
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
