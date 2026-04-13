import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const dotRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dot    = dotRef.current;
    const ctx    = canvas.getContext("2d");

    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = -999;
    let mouseY = -999;
    let dotX   = -999;
    let dotY   = -999;

    const particles = [];
    const COLORS    = ["#D4AF37", "#FFDB58", "#FFC300", "#E8C547"];

    function onResize() {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function spawn(x, y) {
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
          size: 1.5 + Math.random() * 2.5,
          life: 50 + Math.random() * 40,
          maxLife: 90,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    }

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      spawn(mouseX, mouseY);
      document.documentElement.style.cursor = "none";
    }

    let rafId;
    function tick() {
      ctx.clearRect(0, 0, width, height);

      // smooth dot lerp
      dotX += (mouseX - dotX) * 0.18;
      dotY += (mouseY - dotY) * 0.18;
      dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.06; // gravity
        p.vx *= 0.98; // drag
        p.life--;

        const alpha = Math.max(0, p.life / p.maxLife);
        ctx.beginPath();
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle   = p.color;
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("resize",    onResize, { passive: true });
    window.addEventListener("mousemove", onMove,   { passive: true });
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Particle canvas — sits on top of everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      {/* Custom cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#D4AF37",
          zIndex: 9999,
          pointerEvents: "none",
          boxShadow: "0 0 8px rgba(212,175,55,0.8), 0 0 20px rgba(212,175,55,0.3)",
          transition: "width 0.15s, height 0.15s, background 0.15s",
          willChange: "transform",
        }}
      />
    </>
  );
}