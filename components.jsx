/* ===== Componentes compartidos — EPISODIA ===== */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Iconos (trazo simple, sin SVG ilustrativo) ---------- */
const Icon = {
  search: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  play: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7 5v14l12-7z"/></svg>,
  plus: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  check: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" {...p}><path d="M5 12l5 5L19 7"/></svg>,
  close: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>,
  chevL: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M15 6l-6 6 6 6"/></svg>,
  chevR: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M9 6l6 6-6 6"/></svg>,
  info: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.01"/></svg>,
  arrowL: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>,
  menu: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  user: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>,
};

/* SMPTE color bars (7 franjas estándar) */
const SMPTE = ["#c0c0c0", "#c0c000", "#00c0c0", "#00c000", "#c000c0", "#c00000", "#0000c0"];

/* ---------- Thumbnail generativo (placeholder estilizado) ---------- */
function Thumb({ ev, big }) {
  const h = ev.hue;
  const src = big && ev.backdrop ? ev.backdrop : ev.cover;
  const grad = src
    ? { backgroundImage: `url(${src})`, backgroundSize: big ? (ev.backdropSize || "cover") : (ev.coverSize || "cover"), backgroundPosition: big ? (ev.backdropPosition || "center top") : (ev.coverPosition || "center top") }
    : {
        background: ev.baseColor
          ? `radial-gradient(120% 140% at 85% 12%, ${ev.baseColor} 0%, color-mix(in oklab, ${ev.baseColor} 62%, #0b0d14) 44%, color-mix(in oklab, ${ev.baseColor} 26%, #0b0d14) 72%, #0b0d14 100%)`
          : `radial-gradient(120% 140% at 85% 12%, oklch(0.55 0.16 ${h}) 0%, oklch(0.34 0.13 ${h}) 38%, oklch(0.20 0.07 ${h}) 70%, oklch(0.13 0.04 ${h+10}) 100%)`,
      };
  return (
    <div className="card-thumb" style={big ? { aspectRatio: "auto", height: "100%", borderRadius: 0, border: "none" } : null}>
      <div className="thumb-grid" style={grad} />
      {!ev.cover && <div className="thumb-num">{ev.ch}</div>}
      {!ev.cover && <div className="thumb-ch">CH {ev.ch}</div>}
      {!ev.cover && !big && <div className="thumb-title">{ev.title}</div>}
    </div>
  );
}

/* ---------- Card ---------- */
function Card({ ev, onOpen, showProgress }) {
  return (
    <div className="card" onClick={() => onOpen(ev)}>
      <Thumb ev={ev} />
      <div className="card-meta">
        <span>CH {ev.ch}</span>
        <span className="dot-sep">•</span>
        <span style={{ color: "var(--text-2)" }}>{ev.year}</span>
      </div>
      {ev.progress > 0 && (
        <div className="progress"><i style={{ width: ev.progress + "%" }} /></div>
      )}
    </div>
  );
}

/* ---------- Rail horizontal con flechas ---------- */
function Rail({ title, items, onOpen, showProgress }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  if (!items.length) return null;
  return (
    <section className="section">
      <div className="rail-head">
        <h2>{title}</h2>
        <span className="count mono">{String(items.length).padStart(2, "0")} TÍTULOS</span>
        <div className="chrev">
          <button className="chev" onClick={() => scroll(-1)} aria-label="Anterior"><Icon.chevL /></button>
          <button className="chev" onClick={() => scroll(1)} aria-label="Siguiente"><Icon.chevR /></button>
        </div>
      </div>
      <div className="rail no-scrollbar" ref={ref}>
        {items.map((ev) => <Card key={ev.id} ev={ev} onOpen={onOpen} showProgress={showProgress} />)}
      </div>
    </section>
  );
}

Object.assign(window, { Icon, SMPTE, Thumb, Card, Rail });
