import { useEffect, useRef } from "react";

export default function SparklesLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const sparkles = [];

    function spawn(x,y, life=80) {
      sparkles.push({x,y, r:1+Math.random()*2, life, color:"#FFD700"});
    }

    // IntersectionObserver: spawn sparkles when .project-card enters viewport
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          const rect = en.target.getBoundingClientRect();
          // spawn a bunch of sparkles around card
          for(let i=0;i<20;i++) spawn(rect.left + Math.random()*rect.width, rect.top + Math.random()*rect.height);
        }
      });
    }, {threshold:0.4});

    document.querySelectorAll(".project-trigger").forEach(el => observer.observe(el));

    function tick(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i=sparkles.length-1;i>=0;i--){
        const s = sparkles[i];
        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.life/100);
        ctx.arc(s.x, s.y, s.r * (1 + (100-s.life)/50), 0, Math.PI*2);
        ctx.fill();
        s.y -= 0.3;
        s.life -= 1;
        if(s.life <= 0) sparkles.splice(i,1);
      }
      requestAnimationFrame(tick);
    }
    tick();

    return () => {
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-0" />;
}
