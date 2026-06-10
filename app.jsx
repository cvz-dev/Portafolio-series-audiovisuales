/* ===== App principal — EPISODIA ===== */

function Nav({ tab, setTab, query, setQuery, listCount, profile, onProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const initial = profile.trim() ? profile.trim()[0].toUpperCase() : null;
  const tabs = [
    { id: "inicio", label: "Inicio" },
    { id: "actividades", label: "Actividades" },
    { id: "linea", label: "Orden Cronológico" },
    { id: "lista", label: `Mi lista${listCount ? ` (${listCount})` : ""}` },
  ];
  const pick = (id) => { setTab(id); setMenuOpen(false); };
  return (
    <nav className="nav">
      <button className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" aria-expanded={menuOpen}>
        {menuOpen ? <Icon.close /> : <Icon.menu />}
      </button>
      <div className="brand" onClick={() => pick("inicio")}>
        <span className="brand-mark">EPISOD<b>IA</b></span>
        <span className="brand-plus"><Icon.plus width="13" height="13" /></span>
      </div>
      <div className="nav-links">
        {tabs.map((t) => (
          <button key={t.id} className={"nav-link" + (tab === t.id ? " active" : "")} onClick={() => pick(t.id)}>{t.label}</button>
        ))}
      </div>
      <div className="nav-right">
        <div className="search">
          <Icon.search />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar título…" />
        </div>
        <button className={"avatar" + (initial ? "" : " avatar-empty")} title={profile.trim() ? `Perfil: ${profile}` : "Crear perfil"} onClick={onProfile}>
          {initial || <Icon.user />}
        </button>
      </div>
      {menuOpen && (
        <div className="nav-drawer">
          {tabs.map((t) => (
            <button key={t.id} className={"nav-drawer-link" + (tab === t.id ? " active" : "")} onClick={() => pick(t.id)}>{t.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ ev, onRead, onOpen }) {
  if (!ev) return null;
  return (
    <header className="hero">
      <div className="hero-bg"><Thumb ev={ev} big /></div>
      <div className="hero-inner">
        <div className="hero-eyebrow"><span className="bar" /> DESTACADO DE LA SEMANA · CH {ev.ch}</div>
        <h1>{ev.title}</h1>
        <div className="hero-meta">
          <span className="pill mono">CH {ev.ch}</span>
          <span>{window.actLabel(ev)}</span>
        </div>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onRead(ev)}><Icon.play /> Leer evidencia</button>
          <button className="btn btn-ghost" onClick={() => onOpen(ev)}><Icon.info /> Más información</button>
        </div>
      </div>
    </header>
  );
}

/* Recuadro de actividad: información + series que la componen */
function ActividadPanel({ act, series, onOpen }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section className="act-panel">
      <div className="act-info">
        <div className="act-head">
          <span className="act-num mono">ACTIVIDAD {act.num}</span>
          <span className="act-count mono">{String(series.length).padStart(2, "0")} SERIES</span>
        </div>
        <h2 className="act-title">{act.title}</h2>
        <p className="act-desc">{act.desc}</p>
      </div>
      <div className="act-series">
        <div className="act-series-head">
          <h3>Series de esta actividad</h3>
          <div className="chrev">
            <button className="chev" onClick={() => scroll(-1)} aria-label="Anterior"><Icon.chevL /></button>
            <button className="chev" onClick={() => scroll(1)} aria-label="Siguiente"><Icon.chevR /></button>
          </div>
        </div>
        <div className="rail no-scrollbar" ref={ref}>
          {series.map((ev) => <Card key={ev.id} ev={ev} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div>
          <small>Portafolio de evidencias · Sebastian Rodríguez Arellano</small>
        </div>
      </div>
      <small>ANTECEDENTES Y DESARROLLO DE LAS SERIES AUDIOVISUALES · UNIVERSIDAD ANÁHUAC · CICLO 2026</small>
    </footer>
  );
}

/* Modal de perfil: editar nombre (la foto es la inicial) */
function ProfileModal({ open, name, onSave, onClose }) {
  const [value, setValue] = useState(name);
  useEffect(() => { if (open) setValue(name); }, [open, name]);
  if (!open) return null;
  const initial = value.trim() ? value.trim()[0].toUpperCase() : null;
  const save = () => { const v = value.trim(); if (v) { onSave(v); onClose(); } };
  return (
    <div className="overlay" onClick={onClose}>
      <div className="profile-card" onClick={(e) => e.stopPropagation()}>
        <button className="sheet-close" onClick={onClose} aria-label="Cerrar"><Icon.close /></button>
        <h2 className="profile-title">Tu perfil</h2>
        <div className={"profile-avatar-lg" + (initial ? "" : " profile-avatar-empty")}>{initial || <Icon.user width="40" height="40" />}</div>
        <label className="profile-label" htmlFor="profile-name">Nombre del perfil</label>
        <input
          id="profile-name" className="profile-input" value={value} autoFocus maxLength={24}
          placeholder="Escribe tu nombre"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") save(); }}
        />
        <div className="profile-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn btn-primary" onClick={save} disabled={!value.trim()}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const ACTS = window.ACTIVIDADES;
  const [tab, setTab] = useState("inicio");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState(null);
  const [reading, setReading] = useState(null);
  const [list, setList] = useState(() => {
    try { return JSON.parse(localStorage.getItem("episodia-list") || "[]"); } catch { return []; }
  });
  const [progMap, setProgMap] = useState(() => {
    try { return JSON.parse(localStorage.getItem("episodia-progress") || "{}"); } catch { return {}; }
  });
  const [profile, setProfile] = useState(() => {
    try {
      const v = localStorage.getItem("episodia-profile") || "";
      return v === "Invitado" ? "" : v;
    } catch { return ""; }
  });
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => { localStorage.setItem("episodia-list", JSON.stringify(list)); }, [list]);
  useEffect(() => { localStorage.setItem("episodia-progress", JSON.stringify(progMap)); }, [progMap]);
  useEffect(() => { localStorage.setItem("episodia-profile", profile); }, [profile]);

  const toggleList = (id) => setList((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);
  const saveProgress = useCallback((id, val) => setProgMap(p => ({ ...p, [id]: val })), []);

  const ALL = window.EVIDENCIAS.map(ev => ({ ...ev, progress: progMap[ev.id] ?? ev.progress ?? 0 }));

  const openDetail = useCallback((ev) => { setDetail(ev); }, []);
  const openRead = useCallback((ev) => { setReading(ev); setDetail(null); }, []);

  const featured = ALL.find((e) => e.featured) || ALL[0];
  const linea = [...ALL].sort((a, b) => a.era - b.era);
  const recientes = [...ALL].slice(-5).reverse();
  const enProgreso = ALL.filter((e) => e.progress > 0);
  const miLista = ALL.filter((e) => list.includes(e.id));

  // búsqueda global
  const q = query.trim().toLowerCase();
  const results = q
    ? ALL.filter((e) =>
        (e.title + " " + e.tags.join(" ")).toLowerCase().includes(q))
    : null;

  const lock = detail || reading || profileOpen;
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lock]);

  const Grid = ({ items, title, sub }) => (
    <div>
      <div className="page-title">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>
      <div className="gridview">
        {items.length ? (
          <div className="grid">
            {items.map((ev) => <Card key={ev.id} ev={ev} onOpen={openDetail} showProgress={tab === "lista"} />)}
          </div>
        ) : (
          <div className="grid-empty">No hay títulos en guardados en la lista</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="app">
      <Nav tab={tab} setTab={(t) => { setTab(t); setQuery(""); window.scrollTo({ top: 0 }); }} query={query} setQuery={setQuery} listCount={list.length} profile={profile} onProfile={() => setProfileOpen(true)} />

      {results ? (
        <Grid items={results} title={`Resultados para “${query}”`} sub={`${results.length} título(s) en el catálogo`} />
      ) : tab === "inicio" ? (
        <>
          <Hero ev={featured} onRead={openRead} onOpen={openDetail} />
          {enProgreso.length > 0 && <Rail title="Continuar viendo" items={enProgreso} onOpen={openDetail} showProgress />}
          {miLista.length > 0 && <Rail title="Mi lista" items={miLista} onOpen={openDetail} />}
          <Rail title="Estrenos del portafolio" items={recientes} onOpen={openDetail} />
          {ACTS.map((a) => (
            <Rail key={a.id} title={`Actividad ${a.num} · ${a.title}`} items={window.seriesDeActividad(a.id)} onOpen={openDetail} />
          ))}
        </>
      ) : tab === "actividades" ? (
        <div>
          <div className="page-title">
            <h2>Actividades</h2>
          </div>
          <div className="act-list">
            {ACTS.map((a) => (
              <ActividadPanel key={a.id} act={a} series={window.seriesDeActividad(a.id)} onOpen={openDetail} />
            ))}
          </div>
        </div>
      ) : tab === "linea" ? (
        <Grid items={linea} title="Orden Cronológico" sub="Ordenado cronológicamente · de los años 30 a la prospectiva" />
      ) : (
        <Grid items={miLista} title="Mi lista" sub="Evidencias que guardaste para leer" />
      )}

      <Footer />

      <DetailSheet
        ev={detail} all={ALL} onClose={() => setDetail(null)} onRead={openRead} onOpen={openDetail}
        inList={detail && list.includes(detail.id)} toggleList={toggleList}
      />
      <Reader ev={reading} onClose={() => setReading(null)} onProgress={saveProgress} />
      <ProfileModal open={profileOpen} name={profile} onSave={setProfile} onClose={() => setProfileOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
