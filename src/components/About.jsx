const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)', dim:'rgba(201,149,109,0.06)',
};

const EXPERIENCE = [
  {
    role:     'Founder & Lead Developer',
    company:  'PanelX / PanelsX',
    location: 'Dasmarinas, Cavite',
    period:   'Mar 2023 – Present',
    bullets: [
      'Developed and maintained company vision, mission statement, and strategic plan.',
      'Researched LLMs and trained LoRA models through cloud infrastructure for image consistency.',
      'Conducted extensive data analysis to identify trends and patterns.',
      'Engineered full-stack AI applications and maintained scalable cloud-based systems.',
      'Applied theoretical expertise to create new technology and adapt computer science principles to new use cases.',
    ],
  },
];

const SKILLS = [
  { label:'Languages',  items:['JavaScript','Python','PyTorch','Java','HTML/CSS'] },
  { label:'Frameworks', items:['ReactJS','TailwindCSS','FastAPI','RESTful API']   },
  { label:'Databases',  items:['PostgreSQL','MySQL','Firebase','Supabase']         },
  { label:'Tools',      items:['Git','GitHub','Google Colab','VSCode','Cursor']    },
];

const CONTACT = [
  { label:'Email',    value:'lolitoruiz65@gmail.com', href:'mailto:lolitoruiz65@gmail.com' },
  { label:'Phone',    value:'+63 927 156 0925',        href:'tel:+639271560925'              },
  { label:'LinkedIn', value:'linkedin.com/in/lolito',  href:'https://linkedin.com'           },
  { label:'GitHub',   value:'github.com/lolitoruiz',   href:'https://github.com'             },
];

export default function About() {
  return (
    <section id="about" style={{ background:C.bg, padding:'clamp(60px,10vw,120px) clamp(24px,6vw,96px)', position:'relative', overflow:'hidden', zIndex:2 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .ag{display:grid;grid-template-columns:1fr 1.45fr;gap:clamp(40px,6vw,96px);align-items:start;margin-top:3.5rem;}
        .ai{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:top;display:block;clip-path:polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%);filter:brightness(.88) contrast(1.06);}
        .aw{position:relative;}
        .ab{position:absolute;top:18px;left:18px;width:100%;height:100%;border:1.5px solid rgba(201,168,76,.3);clip-path:polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%);z-index:-1;}
        .at{position:absolute;bottom:0;left:0;right:0;padding:22px;background:linear-gradient(to top,rgba(12,11,8,.97) 0%,transparent 100%);}
        .sg{background:${C.bg};border:1px solid ${C.border};padding:16px 18px;position:relative;overflow:hidden;transition:border-color .3s;}
        .sg::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:${C.gold};transition:height .35s ease;}
        .sg:hover{border-color:rgba(201,168,76,.38);}.sg:hover::before{height:100%;}
        .sp{display:inline-block;border:1px solid rgba(201,168,76,.18);color:rgba(245,240,232,.55);font-size:11px;letter-spacing:.06em;padding:4px 10px;font-family:'Inter',sans-serif;transition:border-color .2s,color .2s;cursor:default;}
        .sp:hover{border-color:${C.gold};color:${C.gold};}
        .cl{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(201,168,76,.07);text-decoration:none;transition:padding-left .2s;}
        .cl:last-child{border-bottom:none;}.cl:hover{padding-left:6px;}
        .cb{display:inline-flex;align-items:center;gap:10px;background:${C.gold};color:${C.bg};padding:14px 36px;font-weight:700;font-size:12px;letter-spacing:.13em;text-transform:uppercase;text-decoration:none;font-family:'Inter',sans-serif;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px));transition:background .2s,transform .15s;}
        .cb:hover{background:${C.goldLt};transform:scale(1.03);}
        .exp-bullet{display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;}
        .exp-bullet:last-child{margin-bottom:0;}
        @media(max-width:768px){.ag{grid-template-columns:1fr;}.ai{aspect-ratio:1/1;}}
      `}</style>

      {/* Label */}
      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:'1.2rem' }}>
        <span style={{ width:44, height:1.5, background:C.gold, flexShrink:0, opacity:.8 }} />
        <span style={{ color:C.gold, fontSize:11, letterSpacing:'.22em', fontWeight:600, fontFamily:'Inter,sans-serif', textTransform:'uppercase', opacity:.85 }}>
          The Person Behind the Code
        </span>
      </div>

      {/* Heading */}
      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
        <h2 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(56px,10vw,118px)', color:C.cream, lineHeight:.88, textTransform:'uppercase', letterSpacing:'-.01em', margin:0 }}>About Me</h2>
        <span style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(56px,10vw,118px)', color:'rgba(201,168,76,.09)', lineHeight:.88, userSelect:'none' }}>LR</span>
      </div>

      <div className="ag">

        {/* Image col */}
        <div className="aw">
          <div className="ab" />
          <img src="/profile.jpg" alt="Lolito S. Ruiz JR." className="ai" />
          <div className="at">
            <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:24, color:C.gold, lineHeight:1 }}>Lolito S. Ruiz JR.</div>
            <div style={{ color:'rgba(245,240,232,.45)', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', marginTop:4 }}>Full-Stack Web Developer · Philippines</div>
          </div>
        </div>

        {/* Content col */}
        <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>

          {/* Badges */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['21 Years Old','Philippines','CS Student','Open to Work'].map((b,i)=>(
              <span key={i} style={{ border:`1px solid rgba(201,168,76,.28)`, color:C.gold, fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', padding:'5px 12px', fontFamily:'Inter,sans-serif', fontWeight:600, opacity:.9 }}>{b}</span>
            ))}
          </div>

          {/* Bio */}
          <div style={{ borderLeft:`3px solid ${C.gold}`, paddingLeft:'1.4rem' }}>
            <p style={{ color:C.muted, fontSize:16, lineHeight:1.88, fontFamily:'Inter,sans-serif', fontWeight:300 }}>
              I'm <strong style={{ color:C.cream, fontWeight:600 }}>Lolito Ruiz JR.</strong> — a Full-Stack Web Developer and founder of PanelX. I build AI-powered web applications, train machine learning models, and engineer end-to-end systems that turn complex problems into clean, scalable solutions.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div style={{ color:'rgba(201,168,76,.6)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, marginBottom:'1rem' }}>◆ Experience</div>
            {EXPERIENCE.map((exp,i)=>(
              <div key={i} style={{ border:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
                {/* Gold left bar */}
                <div style={{ position:'absolute', top:0, left:0, width:3, height:'100%', background:C.gold, opacity:.7 }} />
                {/* Header */}
                <div style={{ padding:'18px 20px 14px', borderBottom:`1px solid rgba(201,168,76,.08)` }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
                    <div>
                      <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:20, color:C.cream, textTransform:'uppercase', lineHeight:1.1 }}>{exp.role}</div>
                      <div style={{ color:C.gold, fontSize:13, fontFamily:'Inter,sans-serif', fontWeight:600, marginTop:3, opacity:.9 }}>{exp.company}</div>
                      <div style={{ color:'rgba(245,240,232,.35)', fontSize:11, fontFamily:'Inter,sans-serif', marginTop:2, letterSpacing:'.06em' }}>{exp.location}</div>
                    </div>
                    <span style={{ border:`1px solid rgba(201,168,76,.28)`, color:C.gold, fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', padding:'4px 10px', fontFamily:'Inter,sans-serif', fontWeight:700, flexShrink:0, opacity:.85 }}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                {/* Bullets */}
                <div style={{ padding:'14px 20px' }}>
                  {exp.bullets.map((b,j)=>(
                    <div key={j} className="exp-bullet">
                      <span style={{ width:4, height:4, background:C.gold, borderRadius:'50%', flexShrink:0, marginTop:7, opacity:.7 }} />
                      <span style={{ color:'rgba(245,240,232,.5)', fontSize:13, lineHeight:1.78, fontFamily:'Inter,sans-serif', fontWeight:300 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <div style={{ color:'rgba(201,168,76,.6)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, marginBottom:'1rem' }}>◆ Tech Stack</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(201,168,76,.05)' }}>
              {SKILLS.map((g,i)=>(
                <div key={i} className="sg">
                  <div style={{ color:C.gold, fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:700, marginBottom:10, opacity:.85 }}>{g.label}</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {g.items.map((item,j)=><span key={j} className="sp">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ color:'rgba(201,168,76,.6)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, marginBottom:'1rem' }}>◆ Education</div>
            <div style={{ border:`1px solid ${C.border}`, padding:'18px 20px', position:'relative' }}>
              <div style={{ position:'absolute', top:0, left:0, width:3, height:'100%', background:C.gold, opacity:.6 }} />
              <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:20, color:C.cream, textTransform:'uppercase' }}>BS Computer Science</div>
              <div style={{ color:C.gold, fontSize:13, fontFamily:'Inter,sans-serif', fontWeight:600, marginTop:4, opacity:.9 }}>AISAT College</div>
              <div style={{ color:'rgba(245,240,232,.35)', fontSize:11, letterSpacing:'.06em', fontFamily:'Inter,sans-serif', marginTop:4 }}>Expected Graduation: July 2027</div>
            </div>
          </div>

          {/* Achievement */}
          <div>
            <div style={{ color:'rgba(201,168,76,.6)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, marginBottom:'1rem' }}>◆ Achievement</div>
            <div style={{ display:'flex', alignItems:'center', gap:14, border:`1px solid ${C.border}`, padding:'16px 20px' }}>
              <div style={{ width:36, height:36, background:'rgba(201,168,76,.08)', border:`1px solid rgba(201,168,76,.28)`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1L2 5.6l4.2-.9L8 1z" stroke={C.gold} strokeWidth="1.3" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ color:C.cream, fontSize:14, fontFamily:'Inter,sans-serif', fontWeight:500 }}>Best in Research</div>
                <div style={{ color:'rgba(245,240,232,.38)', fontSize:11, letterSpacing:'.08em', fontFamily:'Inter,sans-serif', marginTop:2 }}>Paliparan III Senior High School · August 2022</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color:'rgba(201,168,76,.6)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:600, marginBottom:'.5rem' }}>◆ Contact</div>
            <div>
              {CONTACT.map((c,i)=>(
                <a key={i} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="cl">
                  <span style={{ color:'rgba(245,240,232,.32)', fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', width:58, flexShrink:0 }}>{c.label}</span>
                  <span style={{ width:1, height:12, background:'rgba(201,168,76,.18)', flexShrink:0 }} />
                  <span style={{ color:'rgba(245,240,232,.65)', fontSize:13, fontFamily:'Inter,sans-serif', fontWeight:300 }}>{c.value}</span>
                </a>
              ))}
            </div>
          </div>

          <a href="mailto:lolitoruiz65@gmail.com" className="cb" style={{ alignSelf:'flex-start' }}>
            Hire Me
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke={C.bg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}