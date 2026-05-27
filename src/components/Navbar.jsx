import { useEffect, useRef, useState } from "react";

const LINKS = ["home", "projects", "about", "contact"];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Scroll-aware background + active section
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      // Highlight whichever section is most visible
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(LINKS[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(LINKS[i]);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  const navRef = useRef(null);
  useEffect(() => {
    function onClick(e) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  const navLink = (id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      style={{
        color:         active === id ? "#C9956D" : "rgba(255,255,255,0.55)",
        fontSize:      12,
        fontFamily:    "Inter, sans-serif",
        fontWeight:    600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        position:      "relative",
        paddingBottom: 2,
        transition:    "color 0.2s",
      }}
      onMouseEnter={e => { if (active !== id) e.currentTarget.style.color = "rgba(255,255,255,0.9)"; }}
      onMouseLeave={e => { if (active !== id) e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
      {/* Active underline */}
      <span style={{
        position:   "absolute",
        bottom:     -2,
        left:       0,
        width:      active === id ? "100%" : "0%",
        height:     1,
        background: "#C9956D",
        transition: "width 0.3s ease",
        display:    "block",
      }} />
    </a>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

        .nav-logo { font-family: 'Bebas Neue', sans-serif; }

        .hamburger { display: none; }
        @media (max-width: 640px) {
          .nav-links-desktop { display: none !important; }
          .hamburger         { display: flex; }
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position:         "fixed",
          top:              0,
          left:             0,
          width:            "100%",
          zIndex:           9000,
          transition:       "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
          background:       scrolled ? "rgba(12,11,8,0.88)" : "transparent",
          backdropFilter:   scrolled ? "blur(12px)"        : "none",
          borderBottom:     scrolled
            ? "1px solid rgba(201,149,109,0.15)"
            : "1px solid transparent",
        }}
      >
        <div style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "0 clamp(24px, 6vw, 96px)",
          height:         68,
        }}>

          {/* Logo */}
          <a
            href="#home"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}
          >
            <span
              className="nav-logo"
              style={{
                fontSize:      32,
                color:         "#C9956D",
                letterSpacing: "0.05em",
                lineHeight:    1,
              }}
            >
              L
            </span>
            {/* diamond separator */}
            <span style={{
              width:        5,
              height:       5,
              background:   "#C9956D",
              transform:    "rotate(45deg)",
              margin:       "0 4px",
              opacity:      0.7,
              flexShrink:   0,
            }} />
            <span
              className="nav-logo"
              style={{
                fontSize:      32,
                color:         "#C9956D",
                letterSpacing: "0.05em",
                lineHeight:    1,
              }}
            >
              R
            </span>
          </a>

          {/* Desktop links */}
          <div
            className="nav-links-desktop"
            style={{ display: "flex", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}
          >
            {LINKS.map(navLink)}

            {/* CTA button */}
            <a
              href="mailto:your@email.com"
              style={{
                background:    "transparent",
                border:        "1px solid rgba(201,149,109,0.45)",
                color:         "#C9956D",
                padding:       "8px 20px",
                fontSize:      11,
                fontFamily:    "Inter, sans-serif",
                fontWeight:    700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                clipPath:      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                transition:    "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background    = "rgba(201,149,109,0.1)";
                e.currentTarget.style.borderColor   = "#C9956D";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background    = "transparent";
                e.currentTarget.style.borderColor   = "rgba(201,149,109,0.45)";
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: "none",
              border:     "none",
              cursor:     "pointer",
              padding:    8,
              display:    "flex",
              flexDirection: "column",
              gap:        5,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display:    "block",
                width:      menuOpen ? (i === 1 ? 0 : 22) : 22,
                height:     1.5,
                background: "#C9956D",
                transition: "all 0.25s ease",
                transformOrigin: "center",
                transform:  menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                  : "scaleX(0)"
                  : "none",
              }} />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div style={{
          maxHeight:      menuOpen ? 300 : 0,
          overflow:       "hidden",
          transition:     "max-height 0.35s ease",
          background:     "rgba(12,11,8,0.97)",
          borderTop:      menuOpen ? "1px solid rgba(201,149,109,0.12)" : "none",
        }}>
          <div style={{
            display:       "flex",
            flexDirection: "column",
            padding:       menuOpen ? "1.5rem clamp(24px, 6vw, 96px)" : 0,
            gap:           "1.5rem",
          }}>
            {LINKS.map(navLink)}
            <a
              href="mailto:lolitoruiz65@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                color:         "#C9956D",
                fontSize:      12,
                fontFamily:    "Inter, sans-serif",
                fontWeight:    700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                paddingBottom: "0.75rem",
              }}
            >
              Hire Me →
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}