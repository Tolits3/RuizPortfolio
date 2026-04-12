import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = innerWidth);
    let height = (canvas.height = innerHeight);
    const particles = [];

    function onResize() {
      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;
    }
    window.addEventListener("resize", onResize);

    const colors = ["#D4AF37", "#FFDB58", "#FFC300"];

    function spawn(x, y) {
      for (let i = 0; i < 6; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random()-0.5)*3,
          vy: (Math.random()-0.5)*3 - 1,
          size: 2 + Math.random()*3,
          life: 60 + Math.random()*40,
          color: colors[Math.floor(Math.random()*colors.length)]
        });
      }
    }

    function onMove(e) {
      spawn(e.clientX, e.clientY);
      // hide native cursor
      document.documentElement.style.cursor = "none";
    }
    window.addEventListener("mousemove", onMove);

    function tick() {
      ctx.clearRect(0,0,width,height);
      for (let i = particles.length-1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life--;
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life/100);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();
        if (p.life <= 0) particles.splice(i,1);
      }
      requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
