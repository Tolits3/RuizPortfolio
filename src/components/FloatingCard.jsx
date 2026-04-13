import { useEffect, useRef } from "react";

/**
 * FloatingCard — reusable 3D tilt card matching the site aesthetic.
 * Not used by Projects.jsx (which has its own cards), but kept here
 * for any future section that needs a tilt interaction.
 *
 * Props:
 *   title   — card heading
 *   desc    — body text
 *   link    — href (optional, wraps card in <a> if provided)
 *   tag     — small label above the title (optional)
 *   num     — large decorative number (optional)
 */
export default function FloatingCard({ title, desc, link, tag, num }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x  = (e.clientX - rect.left) / rect.width;
      const y  = (e.clientY - rect.top)  / rect.height;
      const rx =  (y - 0.5) * 12;
      const ry = -(x - 0.5) * 12;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
      el.style.borderColor = "rgba(212,175,55,0.45)";
    }

    function onLeave() {
      el.style.transform   = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
      el.style.borderColor = "rgba(212,175,55,0.15)";
    }

    el.addEventListener("mousemove",  onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove",  onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const inner = (
    <div
      ref={cardRef}
      style={{
        background:    "rgba(255,255,255,0.02)",
        border:        "1px solid rgba(212,175,55,0.15)",
        padding:       "clamp(22px, 3.5vw, 40px)",
        position:      "relative",
        overflow:      "hidden",
        display:       "flex",
        flexDirection: "column",
        gap:           "12px",
        transition:    "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        transformStyle: "preserve-3d",
        willChange:    "transform",
        cursor:        link ? "pointer" : "default",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position:   "absolute",
        top: 0, left: 0,
        width:      3,
        height:     "100%",
        background: "#D4AF37",
        opacity:    0.6,
      }} />

      {/* Decorative number */}
      {num && (
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize:   64,
          color:      "rgba(212,175,55,0.07)",
          lineHeight: 1,
          userSelect: "none",
        }}>
          {num}
        </div>
      )}

      {/* Tag */}
      {tag && (
        <span style={{
          color:         "#D4AF37",
          fontSize:      11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontFamily:    "Inter, sans-serif",
          fontWeight:    600,
        }}>
          ◆ {tag}
        </span>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily:    "'Bebas Neue', sans-serif",
        fontSize:      "clamp(26px, 3vw, 36px)",
        color:         "#ffffff",
        lineHeight:    1.05,
        textTransform: "uppercase",
      }}>
        {title}
      </h3>

      {/* Divider */}
      <div style={{ width: 36, height: 1, background: "rgba(212,175,55,0.3)" }} />

      {/* Description */}
      <p style={{
        color:      "rgba(255,255,255,0.55)",
        fontSize:   15,
        lineHeight: 1.75,
        fontFamily: "Inter, sans-serif",
        flex:       1,
      }}>
        {desc}
      </p>

      {/* Arrow indicator if it's a link */}
      {link && (
        <div style={{
          display:       "flex",
          alignItems:    "center",
          gap:           6,
          color:         "#D4AF37",
          fontSize:      11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily:    "Inter, sans-serif",
          fontWeight:    600,
          marginTop:     4,
        }}>
          View Project
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
        {inner}
      </a>
    );
  }

  return inner;
}