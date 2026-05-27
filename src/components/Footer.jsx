const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)', surface:'rgba(255,255,255,0.025)',
};

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: '3rem clamp(24px,6vw,96px)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .footer-text { color: ${C.muted}; font-size: 13px; letter-spacing: 0.08em; font-family: 'Inter', sans-serif; margin: 0; }
        .footer-accent { color: ${C.gold}; }
      `}</style>

      <p className="footer-text">
        © 2025 <span className="footer-accent">Lolito Ruiz</span>. All rights reserved.
      </p>
    </footer>
  );
}
