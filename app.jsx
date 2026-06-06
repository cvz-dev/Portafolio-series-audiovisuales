/* ===== App principal — EPISODIA ===== */

function Nav({ tab, setTab, query, setQuery, listCount }) {
  const tabs = [
    { id: "inicio", label: "Inicio" },
    { id: "actividades", label: "Actividades" },
    { id: "linea", label: "Orden Cronológico" },
    { id: "lista", label: `Mi lista${listCount ? ` (${listCount})` : ""}` },
  ];
  return (
    <nav className="nav">
      <div className="brand" onClick={() => setTab("inicio")}>
        <span className="brand-mark">EPISOD<b>IA</b></span>
        <span className="brand-plus">+</span>
      </div>
      <div className="nav-links">
        {tabs.map((t) => (
          <button key={t.id} className={"nav-link" + (tab === t.id ? " active" : "")} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>
      <div className="nav-right">
        <div className="search">
          <Icon.search />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar título…" />
        </div>
        <div className="avatar" title="Sebastian Rodríguez Arellano">SR</div>
      </div>
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
        <p className="syn">{ev.tagline} {ev.syn}</p>
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
        <p className="act-objetivo">{act.objetivo}</p>
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

  useEffect(() => { localStorage.setItem("episodia-list", JSON.stringify(list)); }, [list]);
  useEffect(() => { localStorage.setItem("episodia-progress", JSON.stringify(progMap)); }, [progMap]);

  const toggleList = (id) => setList((l) => l.includes(id) ? l.filter((x) => x !== id) : [...l, id]);
  const saveProgress = useCallback((id, val) => setProgMap(p => ({ ...p, [id]: val })), []);

  const ALL = window.EVIDENCIAS.map(ev => ({ ...ev, progress: progMap[ev.id] ?? ev.progress ?? 0 }));

  const openDetail = useCallback((ev) => { setDetail(ev); window.scrollTo({ top: 0 }); }, []);
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
        (e.title + e.syn + e.tagline + window.actLabel(e) + e.tags.join(" ")).toLowerCase().includes(q))
    : null;

  const lock = detail || reading;
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
          <div className="grid-empty">// SIN SEÑAL — no hay títulos en esta sección</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="app">
      <Nav tab={tab} setTab={(t) => { setTab(t); setQuery(""); window.scrollTo({ top: 0 }); }} query={query} setQuery={setQuery} listCount={list.length} />

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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
