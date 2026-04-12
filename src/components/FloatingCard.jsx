import { useEffect, useRef } from "react";

export default function FloatingCard({ title, desc, link, img }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 10; // rotate X
      const ry = (x - 0.5) * -10; // rotate Y
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    }
    function onLeave(){ el.style.transform='perspective(900px) rotateX(0deg) rotateY(0deg)'; }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a href={link} target="_blank" rel="noreferrer"
       className="block"
    >
      <div ref={ref} className="bg-forest text-gold p-6 rounded-2xl shadow-xl transition-transform duration-300 transform-gpu">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/80">{desc}</p>
      </div>
    </a>
  );
}
