import { useEffect, useState } from 'react';

const TECH_STACK = [
  'ReactJS','Python','JavaScript','TailwindCSS','Node.js','PostgreSQL',
  'Firebase','Supabase','Hugging Face API','RESTful API','Git','Claude AI',
  'ReactJS','Python','JavaScript','TailwindCSS','Node.js','PostgreSQL',
  'Firebase','Supabase','Hugging Face API','RESTful API','Git','Claude AI',
];

const STATS = [
  { value: '3+',  label: 'Years Coding'      },
  { value: '01',  label: 'Live AI SaaS App'  },
  { value: '01',  label: 'Research Award'     },
  { value: 'CS',  label: 'Degree in Progress' },
];

export default function Hero() {
  const [mouse,  setMouse]  = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const onMove = (e) => setMouse({
      x: (e.clientX / window.innerWidth  - 0.5) * 30,
      y: (e.clientY / window.innerHeight - 0.5) * 30,
    });
    window.addEventListener('mousemove', onMove);
    return () => { clearTimeout(t); window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <section
      id="home"
      style={{ minHeight:'100vh', background:'#071a07', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', zIndex:2 }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

        .hero-name span{display:block;font-family:'Bebas Neue',sans-serif;font-size:clamp(72px,13vw,170px);line-height:0.88;letter-spacing:-0.01em;text-transform:uppercase;opacity:0;transform:translateY(50px);transition:opacity 0.7s ease,transform 0.7s ease;}
        .hero-name.loaded span{opacity:1;transform:translateY(0);}
        .hero-name span:nth-child(1){color:#ffffff;transition-delay:0.05s;}
        .hero-name span:nth-child(2){color:#D4AF37;transition-delay:0.15s;}
        .hero-name span:nth-child(3){color:#ffffff;transition-delay:0.25s;}
        .hero-sub{opacity:0;transform:translateY(20px);transition:opacity 0.7s 0.5s ease,transform 0.7s 0.5s ease;}
        .hero-sub.loaded{opacity:1;transform:translateY(0);}
        .cta-p{background:#D4AF37;color:#071a07;padding:15px 44px;font-weight:700;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;display:inline-block;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));transition:background 0.2s,transform 0.15s;font-family:'Inter',sans-serif;}
        .cta-p:hover{background:#f0cc58;transform:scale(1.03);}
        .cta-s{border:1px solid rgba(212,175,55,0.45);color:#D4AF37;padding:15px 44px;font-weight:600;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;display:inline-block;transition:border-color 0.2s,background 0.2s;font-family:'Inter',sans-serif;}
        .cta-s:hover{border-color:#D4AF37;background:rgba(212,175,55,0.07);}
        @keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        .marquee-track{animation:marquee 24s linear infinite;}
        .marquee-track:hover{animation-play-state:paused;}
        .stat-card{border-right:1px solid rgba(212,175,55,0.12);}
        .stat-card:last-child{border-right:none;}
        .speed-lines{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
        .speed-lines::before{content:'';position:absolute;top:-30%;right:-5%;width:55%;height:130%;background:linear-gradient(165deg,rgba(212,175,55,0.04) 0%,transparent 60%);transform:skewX(-8deg);}
        .speed-lines::after{content:'';position:absolute;top:0;right:0;width:38%;height:100%;border-left:1px solid rgba(212,175,55,0.08);transform:skewX(-8deg) translateX(60px);}
        @media(max-width:768px){.hero-img-col{display:none!important;}.hero-stats{grid-template-columns:repeat(2,1fr)!important;}}
      `}</style>

      <div className="speed-lines" />

      <div style={{ paddingTop:'110px', paddingLeft:'clamp(24px,6vw,96px)', paddingRight:'clamp(24px,6vw,96px)', flex:1 }}>

        {/* Label */}
        <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:'1.4rem' }}>
          <span style={{ width:48, height:2, background:'#D4AF37', flexShrink:0 }} />
          <span style={{ color:'#D4AF37', fontSize:12, letterSpacing:'0.22em', fontWeight:600, fontFamily:'Inter,sans-serif', textTransform:'uppercase' }}>
            Full-Stack Developer · Philippines
          </span>
        </div>

        {/* Name + Image */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:32 }}>

          <div style={{ flex:1 }}>
            <h1 className={`hero-name${loaded?' loaded':''}`}>
              <span>Lolito</span>
              <span>S. Ruiz</span>
              <span>JR.</span>
            </h1>

            <div className={`hero-sub${loaded?' loaded':''}`} style={{ marginTop:'2rem' }}>
              <p style={{ color:'rgba(255,255,255,0.6)', fontSize:17, maxWidth:460, lineHeight:1.75, fontFamily:'Inter,sans-serif', marginBottom:'2rem' }}>
                Crafting next-generation digital experiences powered by innovation,
                precision, and relentless imagination.
              </p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                <a href="#projects" className="cta-p">View Projects</a>
                <a href="#about"    className="cta-s">About Me →</a>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div
            className="hero-img-col"
            style={{ flexShrink:0, position:'relative', marginTop:'1rem' }}
          >
            <div style={{ transform:`translate(${mouse.x*0.4}px,${mouse.y*0.4}px)`, position:'relative', transition:'transform 0.25s ease' }}>
              <div style={{ position:'absolute', bottom:-18, right:-18, width:'75%', height:'75%', border:'2px solid #D4AF37', clipPath:'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)', opacity:0.6 }} />
              <img
                src="/profile.jpg"
                alt="Lolito S. Ruiz JR."
                style={{ width:'clamp(200px,22vw,360px)', height:'clamp(200px,22vw,360px)', objectFit:'cover', objectPosition:'top', clipPath:'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)', display:'block', filter:'brightness(0.95) contrast(1.05)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ marginTop:'3.5rem', borderTop:'1px solid rgba(212,175,55,0.15)', borderBottom:'1px solid rgba(212,175,55,0.15)', background:'rgba(212,175,55,0.04)', padding:'13px 0', overflow:'hidden' }}>
        <div className="marquee-track" style={{ display:'flex', gap:'3rem', width:'max-content' }}>
          {TECH_STACK.map((tech,i)=>(
            <span key={i} style={{ color:'#D4AF37', fontSize:12, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, fontFamily:'Inter,sans-serif', whiteSpace:'nowrap' }}>◆ {tech}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid rgba(212,175,55,0.10)' }}>
        {STATS.map((s,i)=>(
          <div key={i} className="stat-card" style={{ padding:'clamp(20px,3vw,36px) clamp(20px,4vw,48px)' }}>
            <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(42px,5vw,64px)', color:'#D4AF37', lineHeight:1 }}>{s.value}</div>
            <div style={{ color:'rgba(255,255,255,0.4)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', marginTop:8 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}