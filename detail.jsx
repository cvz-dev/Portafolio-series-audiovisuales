/* ===== Ficha de título + Modo lectura — EPISODIA ===== */

/* ---------- Ficha de título (estilo página de serie) ---------- */
function DetailSheet({ ev, all, onClose, onRead, onOpen, inList, toggleList }) {
  if (!ev) return null;
  const related = all.filter((x) => x.id !== ev.id && x.actividad === ev.actividad).slice(0, 8);
  const fallback = all.filter((x) => x.id !== ev.id).slice(0, 8);
  const rel = related.length ? related : fallback;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <button className="sheet-close" onClick={onClose} aria-label="Cerrar"><Icon.close /></button>
        <div className="sheet-back">
          <Thumb ev={ev} big />
        </div>
        <div className="sheet-body">
          <div className="hero-eyebrow" style={{ marginBottom: 12 }}>
            <span className="bar" /> {window.actLabel(ev)}
          </div>
          <h1 className="sheet-title">{ev.title}</h1>
          <div className="sheet-metarow">
            <span className="pill">CH {ev.ch}</span>
            <span>{ev.year}</span>
            <span className="dot-sep" style={{ opacity: .4 }}>•</span>
            <span className="pct mono">{ev.progress ? ev.progress + "% LEÍDO" : "NUEVO"}</span>
          </div>
          <p className="sheet-label mono">Sinopsis</p>
          <p className="sheet-syn">{ev.syn}</p>
          <div className="sheet-actions">
            <button className="btn btn-primary" onClick={() => onRead(ev)}><Icon.play /> Leer evidencia</button>
            <button className="btn btn-ghost" onClick={() => toggleList(ev.id)}>
              {inList ? <><Icon.check /> En mi lista</> : <><Icon.plus /> Mi lista</>}
            </button>
          </div>
          <div className="sheet-tags">
            {ev.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        {rel.length > 0 && (
          <div className="sheet-related">
            <h3>Más de esta actividad</h3>
            <div className="rail no-scrollbar">
              {rel.map((x) => <Card key={x.id} ev={x} onOpen={onOpen} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Modo lectura ---------- */
function Reader({ ev, onClose, onProgress }) {
  const [prog, setProg] = useState(ev?.progress || 0);
  const [content, setContent] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!ev) return;
    setContent(null);
    fetch(`content/${ev.id}.md`)
      .then(r => r.text())
      .then(text => setContent(marked.parse(text)))
      .catch(() => setContent('<p>No se encontró el contenido de esta evidencia.</p>'));
  }, [ev?.id]);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    const val = max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 0;
    setProg(val);
    if (val >= 100) onProgress?.(ev.id, 0);
    else if (val > 0) onProgress?.(ev.id, val);
  }, [ev?.id, onProgress]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!ev) return null;

  return (
    <div className="overlay" ref={ref} onScroll={onScroll} onClick={onClose}>
      <div className="reader-progress" style={{ width: prog + "%" }} />
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <button className="sheet-close" onClick={onClose} aria-label="Cerrar"><Icon.close /></button>
        <div className="sheet-back">
          <Thumb ev={ev} big />
          <div className="thumb-ch">CH {ev.ch}</div>
        </div>
        <div className="sheet-body">
          <div className="hero-eyebrow" style={{ marginBottom: 12 }}>
            <span className="bar" /> {window.actLabel(ev)}
          </div>
          <h1 className="sheet-title">{ev.title}</h1>
          <div className="sheet-metarow">
            <span className="pill">CH {ev.ch}</span>
            <span>{ev.year}</span>
          </div>

          <article className="reader-doc">
            <p className="lead">{ev.tagline}</p>
            {content
              ? <div dangerouslySetInnerHTML={{ __html: content }} />
              : <div style={{ color: "var(--muted)", padding: "48px 0", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: ".08em" }}>CARGANDO…</div>
            }
          </article>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DetailSheet, Reader });
