import { useRef, useState } from 'react';

const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)', dim:'rgba(201,149,109,0.05)',
};

const PROJECTS = [
  {
    num:    '01',
    title:  'AI Comic Generator',
    tag:    'Full-Stack · AI · SaaS',
    status: 'live',
    link:   'https://panel-x-frontend.vercel.app',
    desc:   'Full-stack manga & manhwa page generator powered by Hugging Face AI — a complete SaaS product with user auth, real-time generation feedback, and LoRA-trained models for image consistency.',
    highlights: [
      { label:'Architecture', text:'Engineered a full-stack app integrating Hugging Face Inference APIs, offloading heavy AI computation server-side for reliability.' },
      { label:'LoRA Training', text:'Trained custom LoRA models on Google Colab for image style consistency across generated manga panels.' },
      { label:'Performance',  text:'Async cloud-based backend strategy achieving 99% uptime despite running on limited local hardware.' },
      { label:'Auth & Data',  text:'Firebase & Supabase for secure user authentication and scalable production-grade data storage.' },
    ],
    stack:['ReactJS','TailwindCSS','Hugging Face API','Firebase','Supabase','Google Colab','Python'],
  },
  {
    num:    '02',
    title:  'Oil Data Automation',
    tag:    'Full-Stack · Data Intelligence · AI',
    status: 'dev',
    link:   null,
    desc:   'Full-stack oil sales intelligence platform built for oil distributors — combining real-time profit tracking, AI-driven market insights from live news, and multi-scenario revenue forecasting.',
    highlights: [
      { label:'Platform',     text:'React + FastAPI with 15+ REST endpoints, real-time profit tracking, and interactive data visualizations.' },
      { label:'AI Insights',  text:'AI-powered market analysis from live news feeds providing data-driven pricing and stock decisions.' },
      { label:'Multi-Currency',text:'Live currency conversion across PHP, USD, AED, and EUR with inventory depletion forecasting.' },
      { label:'Forecasting',  text:'Multi-scenario revenue projections enabling smarter business planning for oil distributors.' },
    ],
    stack:['React','FastAPI','Python','REST APIs','AI/ML','Data Visualization','PostgreSQL'],
  },
];

const CARD_GAP = 24;

function ArrowBtn({ dir, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width:48, height:48,
      border:`1px solid ${disabled?'rgba(201,168,76,.12)':'rgba(201,168,76,.4)'}`,
      background:'transparent',
      color:disabled?'rgba(201,168,76,.25)':C.gold,
      display:'flex', alignItems:'center', justifyContent:'center',
      cursor:disabled?'not-allowed':'pointer',
      clipPath:'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
      transition:'border-color .2s,background .2s', flexShrink:0,
    }}
    onMouseEnter={e=>{ if(!disabled){e.currentTarget.style.background='rgba(201,168,76,.09)';e.currentTarget.style.borderColor=C.gold;}}}
    onMouseLeave={e=>{ e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor=disabled?'rgba(201,168,76,.12)':'rgba(201,168,76,.4)'; }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {dir==='left'
          ?<path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          :<path d="M6 3l5 5-5 5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
      </svg>
    </button>
  );
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  const live = p.status === 'live';

  return (
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        minWidth:'clamp(300px,42vw,540px)',
        background: hov?'rgba(201,168,76,.045)':C.dim,
        border:`1px solid ${hov?'rgba(201,168,76,.38)':C.border}`,
        padding:'clamp(28px,4vw,48px)',
        display:'flex', flexDirection:'column', gap:'1.1rem',
        position:'relative', overflow:'hidden',
        transition:'border-color .3s,background .3s',
        scrollSnapAlign:'start', flexShrink:0,
      }}
    >
      {/* Left accent bar */}
      <div style={{ position:'absolute', top:0, left:0, width:3, height:hov?'100%':'0%', background:C.gold, transition:'height .4s ease' }} />

      {/* Status badge */}
      <div style={{ display:'flex', justifyContent:'flex-end', marginTop:-8, marginRight:-8 }}>
        <span style={{
          fontSize:9, letterSpacing:'.18em', textTransform:'uppercase',
          fontFamily:'Inter,sans-serif', fontWeight:700,
          padding:'5px 12px',
          background: live?'rgba(201,168,76,.12)':'rgba(255,165,0,.08)',
          border:`1px solid ${live?'rgba(201,168,76,.35)':'rgba(255,165,0,.3)'}`,
          color: live?C.gold:'#FFA500',
        }}>
          {live ? '● Live' : '◎ In Development'}
        </span>
      </div>

      <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:60, color:'rgba(201,168,76,.07)', lineHeight:1, userSelect:'none', marginTop:-8 }}>{p.num}</div>

      <span style={{ color:C.gold, fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, opacity:.85 }}>◆ {p.tag}</span>

      <h3 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(28px,3.5vw,44px)', color:C.cream, lineHeight:1.05, textTransform:'uppercase', margin:0 }}>{p.title}</h3>

      <div style={{ width:36, height:1, background:'rgba(201,168,76,.35)' }} />

      <p style={{ color:C.muted, fontSize:14, lineHeight:1.82, fontFamily:'Inter,sans-serif', fontWeight:300, margin:0 }}>{p.desc}</p>

      {/* Highlights */}
      <div style={{ border:`1px solid rgba(201,168,76,.09)`, padding:'4px 16px' }}>
        {p.highlights.map((h,j)=>(
          <div key={j} style={{ display:'flex', gap:12, padding:'11px 0', borderBottom:j<p.highlights.length-1?`1px solid rgba(201,168,76,.07)`:'none' }}>
            <span style={{ color:C.gold, fontSize:9, letterSpacing:'.13em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:700, flexShrink:0, width:76, paddingTop:2, opacity:.85 }}>{h.label}</span>
            <span style={{ color:'rgba(245,240,232,.45)', fontSize:12, lineHeight:1.78, fontFamily:'Inter,sans-serif', fontWeight:300 }}>{h.text}</span>
          </div>
        ))}
      </div>

      {/* Stack pills */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {p.stack.map((s,j)=>(
          <span key={j} style={{ border:`1px solid rgba(201,168,76,.18)`, color:'rgba(245,240,232,.5)', fontSize:10, letterSpacing:'.07em', padding:'4px 10px', fontFamily:'Inter,sans-serif', transition:'all .2s', cursor:'default' }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.gold; e.currentTarget.style.color=C.gold; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(201,168,76,.18)'; e.currentTarget.style.color='rgba(245,240,232,.5)'; }}>
            {s}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop:'auto' }}>
        {live ? (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:8, background:C.gold, color:C.bg, padding:'12px 28px', fontWeight:700, fontSize:11, letterSpacing:'.13em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Inter,sans-serif', clipPath:'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))', transition:'background .2s,transform .15s' }}
            onMouseEnter={e=>{ e.currentTarget.style.background=C.goldLt; e.currentTarget.style.transform='scale(1.03)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.background=C.gold; e.currentTarget.style.transform='scale(1)'; }}>
            View Live
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke={C.bg} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        ) : (
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, border:`1px solid rgba(255,165,0,.25)`, color:'rgba(255,165,0,.6)', padding:'12px 28px', fontWeight:600, fontSize:11, letterSpacing:'.13em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', clipPath:'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'rgba(255,165,0,.5)', animation:'pulse 2s ease-in-out infinite', flexShrink:0 }} />
            In Development
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const total = PROJECTS.length;

  const scrollTo = (n) => {
    setIdx(n);
    const card = trackRef.current?.children[n];
    if (card) card.scrollIntoView({ behavior:'smooth', inline:'start', block:'nearest' });
  };

  return (
    <section id="projects" style={{ background:C.bg, padding:'clamp(60px,10vw,120px) 0', position:'relative', overflow:'hidden', zIndex:2 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .pt::-webkit-scrollbar{display:none;}
        .pt{-ms-overflow-style:none;scrollbar-width:none;}
        @keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}
      `}</style>

      {/* Header */}
      <div style={{ paddingLeft:'clamp(24px,6vw,96px)', paddingRight:'clamp(24px,6vw,96px)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:'1.2rem' }}>
          <span style={{ width:44, height:1.5, background:C.gold, flexShrink:0, opacity:.8 }} />
          <span style={{ color:C.gold, fontSize:11, letterSpacing:'.22em', fontWeight:600, fontFamily:'Inter,sans-serif', textTransform:'uppercase', opacity:.85 }}>Selected Work</span>
        </div>

        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'3rem', flexWrap:'wrap', gap:'1rem' }}>
          <div>
            <h2 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(56px,10vw,118px)', color:C.cream, lineHeight:.88, textTransform:'uppercase', letterSpacing:'-.01em', margin:0 }}>Projects</h2>
            <p style={{ color:C.muted, fontSize:14, fontFamily:'Inter,sans-serif', fontWeight:300, marginTop:'1rem', maxWidth:420, lineHeight:1.78 }}>
              Hand-crafted applications — AI generators, SaaS platforms, and intelligent data systems built from the ground up.
            </p>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
            <ArrowBtn dir="left"  onClick={()=>scrollTo(Math.max(0,idx-1))}     disabled={idx===0} />
            <span style={{ color:'rgba(201,168,76,.4)', fontSize:12, fontFamily:'Inter,sans-serif', letterSpacing:'.1em', minWidth:42, textAlign:'center' }}>
              {String(idx+1).padStart(2,'0')} / {String(total).padStart(2,'0')}
            </span>
            <ArrowBtn dir="right" onClick={()=>scrollTo(Math.min(total-1,idx+1))} disabled={idx===total-1} />
          </div>
        </div>
      </div>

      {/* Track */}
      <div ref={trackRef} className="pt" style={{ display:'flex', gap:CARD_GAP, overflowX:'auto', scrollSnapType:'x mandatory', paddingLeft:'clamp(24px,6vw,96px)', paddingRight:'clamp(24px,6vw,96px)', paddingBottom:4, alignItems:'stretch' }}>
        {PROJECTS.map((p,i)=><ProjectCard key={i} p={p} />)}
      </div>

      {/* Dots */}
      <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:'2.5rem' }}>
        {PROJECTS.map((_,i)=>(
          <button key={i} onClick={()=>scrollTo(i)} style={{
            width:idx===i?28:8, height:8,
            background:idx===i?C.gold:'rgba(201,168,76,.22)',
            border:'none', cursor:'pointer', padding:0,
            transition:'width .3s ease,background .3s ease',
            clipPath:idx===i?'none':'circle(50%)',
          }} />
        ))}
      </div>
    </section>
  );
}