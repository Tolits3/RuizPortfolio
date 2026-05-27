const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)', surface:'rgba(255,255,255,0.025)',
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: C.bg,
        padding: 'clamp(60px,10vw,120px) clamp(24px,6vw,96px)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 96px); align-items: start; margin-top: 2rem; }
        .contact-info { display: flex; flex-direction: column; gap: 2rem; }
        .contact-item { display: flex; flex-direction: column; gap: 0.6rem; }
        .contact-label { color: ${C.gold}; font-size: 11px; letter-spacing: 0.22em; font-weight: 600; font-family: 'Inter', sans-serif; text-transform: uppercase; opacity: 0.8; }
        .contact-value { color: ${C.cream}; font-size: 18px; letter-spacing: 0.04em; font-weight: 500; font-family: 'Inter', sans-serif; text-decoration: none; transition: color 0.2s; }
        .contact-value:hover { color: ${C.gold}; }
        @media(max-width:768px){ .contact-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.2rem' }}>
        <span style={{ width: 48, height: 2, background: C.gold, flexShrink: 0, display: 'block' }} />
        <span style={{ color: C.gold, fontSize: 11, letterSpacing: '0.22em', fontWeight: 600, fontFamily: 'Inter,sans-serif', textTransform: 'uppercase' }}>
          Get In Touch
        </span>
      </div>

      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,10vw,120px)', color: C.cream, lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-0.01em', margin: 0 }}>
          Contact
        </h2>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,10vw,120px)', color: 'rgba(201,168,76,0.1)', lineHeight: 0.88, userSelect: 'none' }}>CT</span>
      </div>

      {/* Contact Grid */}
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-label">Email</div>
            <a href="mailto:lolitoruiz65@gmail.com" className="contact-value">
              lolitoruiz65@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <div className="contact-label">Phone</div>
            <a href="tel:+639271560925" className="contact-value">
              +63 927 156 0925
            </a>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-label">LinkedIn</div>
            <a href="https://linkedin.com/in/lolito" className="contact-value" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/lolito
            </a>
          </div>
          <div className="contact-item">
            <div className="contact-label">GitHub</div>
            <a href="https://github.com/lolitoruiz" className="contact-value" target="_blank" rel="noopener noreferrer">
              github.com/lolitoruiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
