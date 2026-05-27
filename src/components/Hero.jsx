import { useEffect, useState } from 'react';

const ROW1 = [
  'ReactJS','Python','PyTorch','JavaScript','TailwindCSS','FastAPI','Node.js',
  'PostgreSQL','Firebase','Supabase','Hugging Face','Google Colab','Git','REST APIs',
  'ReactJS','Python','PyTorch','JavaScript','TailwindCSS','FastAPI','Node.js',
  'PostgreSQL','Firebase','Supabase','Hugging Face','Google Colab','Git','REST APIs',
];
const ROW2 = [
  'Full-Stack Development','AI Integration','LoRA Training','SaaS Architecture',
  'UI / UX Design','Database Engineering','API Design','Cloud Deployment',
  'Data Automation','Research & Innovation','LLM Research','Systems Design',
  'Full-Stack Development','AI Integration','LoRA Training','SaaS Architecture',
  'UI / UX Design','Database Engineering','API Design','Cloud Deployment',
  'Data Automation','Research & Innovation','LLM Research','Systems Design',
];

const STATS = [
  { value:'3+', label:'Years of Experience'   },
  { value:'02', label:'Shipped Projects'       },
  { value:'01', label:'Research Award'         },
  { value:'CS', label:'Degree in Progress'     },
];

const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)',
};

export default function Hero() {
  const [mouse,  setMouse]  = useState({ x:0, y:0 });
  const [loaded, setLoaded] = useState(false);

  const nameChars = "Lolito S. Ruiz JR.".split('');
  const charCount = nameChars.length;

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const onMove = (e) => setMouse({
      x:(e.clientX/window.innerWidth  -0.5)*24,
      y:(e.clientY/window.innerHeight -0.5)*24,
    });
    window.addEventListener('mousemove', onMove);
    return () => { clearTimeout(t); window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <section id="home" style={{ minHeight:'100vh', background:C.bg, position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', zIndex:2 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        .hn span{display:block;font-family:'Bebas Neue',sans-serif;font-size:clamp(68px,12vw,160px);line-height:.86;letter-spacing:-.01em;text-transform:uppercase;opacity:0;transform:translateY(60px);transition:opacity .8s ease,transform .8s ease;}
        .hn.go span{opacity:1;transform:translateY(0);}
        .hn span:nth-child(1){color:${C.cream};transition-delay:.06s;}
        .hn span:nth-child(2){color:${C.gold}; transition-delay:.16s;}
        .hn span:nth-child(3){color:${C.cream};transition-delay:.26s;}
        
        .name-char{display:inline-block;font-family:'Bebas Neue',sans-serif;font-size:clamp(68px,12vw,160px);line-height:.86;letter-spacing:-.01em;text-transform:uppercase;opacity:0;transform:translateY(60px) scale(0.8);animation:charReveal .6s cubic-bezier(0.34,1.56,0.64,1) forwards;}
        @keyframes charReveal{0%{opacity:0;transform:translateY(60px) scale(0.8)}100%{opacity:1;transform:translateY(0) scale(1)}}
        
        .hs{opacity:0;transform:translateY(24px);transition:opacity .8s .52s ease,transform .8s .52s ease;}
        .hs.go{opacity:1;transform:translateY(0);}

        .btn-p{background:${C.gold};color:${C.bg};padding:14px 44px;font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;display:inline-block;font-family:'Inter',sans-serif;clip-path:polygon(0 0,calc(100% - 13px) 0,100% 13px,100% 100%,13px 100%,0 calc(100% - 13px));transition:background .2s,transform .15s;}
        .btn-p:hover{background:${C.goldLt};transform:scale(1.03);}
        .btn-s{border:1px solid rgba(201,168,76,.4);color:${C.gold};padding:14px 44px;font-weight:500;font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;display:inline-block;font-family:'Inter',sans-serif;transition:border-color .2s,background .2s;}
        .btn-s:hover{border-color:${C.gold};background:rgba(201,168,76,.07);}

        @keyframes imgFloat {0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)}}
        @keyframes haloSpin {from{transform:rotate(0deg)} to{transform:rotate(360deg)}}
        @keyframes lightPass{0%,100%{filter:brightness(.9) contrast(1.06)} 50%{filter:brightness(1.02) contrast(1.02)}}

        .pfloat{animation:imgFloat 6s ease-in-out infinite;position:relative;}
        .pglow{position:absolute;inset:-40px;background:conic-gradient(from 0deg,rgba(201,168,76,.35),transparent 38%,rgba(201,168,76,.18) 62%,transparent 80%,rgba(201,168,76,.35));animation:haloSpin 10s linear infinite;filter:blur(22px);border-radius:50%;z-index:0;pointer-events:none;}
        .pframe{position:absolute;bottom:-18px;right:-18px;width:78%;height:78%;border:1.5px solid rgba(201,168,76,.45);clip-path:polygon(0 0,calc(100% - 13px) 0,100% 13px,100% 100%,0 100%);z-index:0;}
        .pimg{animation:lightPass 7s ease-in-out infinite;position:relative;z-index:1;display:block;width:clamp(200px,21vw,340px);height:clamp(200px,21vw,340px);object-fit:cover;object-position:top;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);}

        @keyframes mL{from{transform:translateX(0)} to{transform:translateX(-50%)}}
        @keyframes mR{from{transform:translateX(-50%)} to{transform:translateX(0)}}
        .tl{animation:mL 26s linear infinite;display:flex;gap:3rem;width:max-content;}
        .tr{animation:mR 30s linear infinite;display:flex;gap:3rem;width:max-content;}
        .tl:hover,.tr:hover{animation-play-state:paused;}
        .mq{position:relative;overflow:hidden;}
        .mq::before{content:'';position:absolute;top:0;bottom:0;left:0;width:100px;background:linear-gradient(to right,${C.bg},transparent);z-index:2;pointer-events:none;}
        .mq::after{content:'';position:absolute;top:0;bottom:0;right:0;width:100px;background:linear-gradient(to left,${C.bg},transparent);z-index:2;pointer-events:none;}

        .stat{border-right:1px solid ${C.border};transition:background .3s;}
        .stat:last-child{border-right:none;}
        .stat:hover{background:rgba(201,168,76,.04);}
        .spd{position:absolute;inset:0;pointer-events:none;}
        .spd::before{content:'';position:absolute;top:-30%;right:-5%;width:52%;height:130%;background:linear-gradient(165deg,rgba(201,168,76,.035) 0%,transparent 58%);transform:skewX(-8deg);}
        .spd::after{content:'';position:absolute;top:0;right:0;width:36%;height:100%;border-left:1px solid rgba(201,168,76,.06);transform:skewX(-8deg) translateX(55px);}

        @media(max-width:768px){.photo-col{display:none!important;}.srow{grid-template-columns:repeat(2,1fr)!important;}}
      `}</style>

      <div className="spd" />

      <div style={{ paddingTop:'110px', paddingLeft:'clamp(24px,6vw,96px)', paddingRight:'clamp(24px,6vw,96px)', flex:1 }}>

        {/* Label */}
        <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:'1.5rem' }}>
          <span style={{ width:44, height:1.5, background:C.gold, flexShrink:0, opacity:.8 }} />
          <span style={{ color:C.gold, fontSize:11, letterSpacing:'.22em', fontWeight:600, fontFamily:'Inter,sans-serif', textTransform:'uppercase', opacity:.85 }}>
            Full-Stack Web Developer · Philippines
          </span>
        </div>

        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40 }}>

          {/* Name */}
          <div style={{ flex:1 }}>
            <h1 style={{ margin:0, fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(68px,12vw,160px)", lineHeight:.86, letterSpacing:"-.01em", textTransform:"uppercase", display:'flex', flexWrap:'wrap', gap:'0.05em' }}>
              {loaded && nameChars.map((char, idx) => {
                const colors = ['#F5F2ED', '#C9956D', '#F5F2ED'];
                const colorIdx = idx % 3;
                return (
                  <span key={idx} className="name-char" style={{ color: colors[colorIdx], animationDelay: `${idx * 0.06}s` }}>
                    {char}
                  </span>
                );
              })}
            </h1>

            <div className={`hs${loaded?' go':''}`} style={{ marginTop:'2.2rem' }}>
              <p style={{ color:C.muted, fontSize:16, maxWidth:480, lineHeight:1.82, fontFamily:'Inter,sans-serif', fontWeight:300, marginBottom:'2.2rem' }}>
                Building full-stack web applications and AI-powered systems that solve real problems — from scalable SaaS platforms to intelligent data automation tools.
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href="#projects" className="btn-p">View Projects</a>
                <a href="#about"    className="btn-s">About Me →</a>
              </div>
            </div>
          </div>

          {/* Animated photo */}
          <div
            className="photo-col"
            style={{ flexShrink:0, marginTop:'0.5rem', transform:`translate(${mouse.x*.35}px,${mouse.y*.35}px)`, transition:'transform .3s ease' }}
          >
            <div className="pfloat">
              <div className="pglow" />
              <div className="pframe" />
              <img src="/profile.jpg" alt="Lolito S. Ruiz JR." className="pimg" />
            </div>
          </div>
        </div>
      </div>

      {/* Dual marquee */}
      <div style={{ marginTop:'3rem', borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div className="mq" style={{ background:'rgba(201,168,76,.03)', padding:'11px 0', borderBottom:`1px solid ${C.border}` }}>
          <div className="tl">
            {ROW1.map((t,i)=>(
              <span key={i} style={{ color:C.gold, fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', fontWeight:600, fontFamily:'Inter,sans-serif', whiteSpace:'nowrap', opacity:.85 }}>◆ {t}</span>
            ))}
          </div>
        </div>
        <div className="mq" style={{ background:'rgba(201,168,76,.015)', padding:'10px 0' }}>
          <div className="tr">
            {ROW2.map((t,i)=>(
              <span key={i} style={{ color:`rgba(245,240,232,.32)`, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontWeight:400, fontFamily:'Inter,sans-serif', whiteSpace:'nowrap' }}>— {t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="srow" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:`1px solid ${C.border}` }}>
        {STATS.map((s,i)=>(
          <div key={i} className="stat" style={{ padding:'clamp(18px,2.8vw,34px) clamp(18px,3.5vw,44px)' }}>
            <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(40px,5vw,60px)', color:C.gold, lineHeight:1 }}>{s.value}</div>
            <div style={{ color:'rgba(245,240,232,.38)', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', marginTop:7, fontWeight:500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}