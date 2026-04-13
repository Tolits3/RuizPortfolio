const SKILLS = [
  { label: "Languages",  items: ["JavaScript", "Python", "Java", "HTML/CSS", "VB.NET"] },
  { label: "Frameworks", items: ["ReactJS", "TailwindCSS", "Node.js", "RESTful API"]   },
  { label: "Databases",  items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"]         },
  { label: "Tools",      items: ["Git", "GitHub", "VSCode", "Cursor", "Claude AI"]      },
];

const CONTACT = [
  { label: "Email",    value: "lolitoruiz65@gmail.com", href: "mailto:lolitoruiz65@gmail.com" },
  { label: "Phone",    value: "+63 927 156 0925",        href: "tel:+639271560925"              },
  { label: "LinkedIn", value: "linkedin.com/in/lolito",  href: "https://linkedin.com"           },
  { label: "GitHub",   value: "github.com/lolitoruiz",   href: "https://github.com"             },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#071a07",
        padding: "clamp(60px,10vw,120px) clamp(24px,6vw,96px)",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
        .about-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:clamp(40px,6vw,96px);align-items:start;margin-top:3.5rem;}
        .about-img{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:top;display:block;clip-path:polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%);filter:brightness(0.9) contrast(1.05);}
        .img-wrap{position:relative;}
        .img-border{position:absolute;top:18px;left:18px;width:100%;height:100%;border:2px solid rgba(212,175,55,0.32);clip-path:polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%);z-index:-1;}
        .img-tag{position:absolute;bottom:0;left:0;right:0;padding:22px;background:linear-gradient(to top,rgba(7,26,7,0.97) 0%,transparent 100%);}
        .skill-group{background:#071a07;border:1px solid rgba(212,175,55,0.12);padding:18px 20px;position:relative;overflow:hidden;transition:border-color 0.3s;}
        .skill-group::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:#D4AF37;transition:height 0.35s ease;}
        .skill-group:hover{border-color:rgba(212,175,55,0.38);}
        .skill-group:hover::before{height:100%;}
        .pill{display:inline-block;border:1px solid rgba(212,175,55,0.22);color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:0.06em;padding:4px 11px;font-family:'Inter',sans-serif;transition:border-color 0.2s,color 0.2s;}
        .pill:hover{border-color:#D4AF37;color:#D4AF37;}
        .contact-link{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(212,175,55,0.08);text-decoration:none;transition:padding-left 0.2s;}
        .contact-link:last-child{border-bottom:none;}
        .contact-link:hover{padding-left:6px;}
        .cta-btn{display:inline-flex;align-items:center;gap:10px;background:#D4AF37;color:#071a07;padding:14px 36px;font-weight:700;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;font-family:'Inter',sans-serif;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px));transition:background 0.2s,transform 0.15s;}
        .cta-btn:hover{background:#f0cc58;transform:scale(1.03);}
        @media(max-width:768px){.about-grid{grid-template-columns:1fr;}.about-img{aspect-ratio:1/1;}}
      `}</style>

      {/* Label */}
      <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:"1.2rem" }}>
        <span style={{ width:48,height:2,background:"#D4AF37",flexShrink:0,display:"block" }} />
        <span style={{ color:"#D4AF37",fontSize:11,letterSpacing:"0.22em",fontWeight:600,fontFamily:"Inter,sans-serif",textTransform:"uppercase" }}>
          The Person Behind the Code
        </span>
      </div>

      {/* Heading */}
      <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(56px,10vw,120px)",color:"#fff",lineHeight:0.88,textTransform:"uppercase",letterSpacing:"-0.01em",margin:0 }}>
          About Me
        </h2>
        <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(56px,10vw,120px)",color:"rgba(212,175,55,0.1)",lineHeight:0.88,userSelect:"none" }}>LR</span>
      </div>

      <div className="about-grid">

        {/* Image */}
        <div className="img-wrap">
          <div className="img-border" />
          <img src="/profile.jpg" alt="Lolito S. Ruiz JR." className="about-img" />
          <div className="img-tag">
            <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:26,color:"#D4AF37",lineHeight:1 }}>Lolito S. Ruiz JR.</div>
            <div style={{ color:"rgba(255,255,255,0.5)",fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",marginTop:4 }}>
              Full-Stack Developer · Philippines
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display:"flex",flexDirection:"column",gap:"2rem" }}>

          {/* Badges */}
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            {["21 Years Old","Philippines","CS Student","Open to Work"].map((b,i)=>(
              <span key={i} style={{ border:"1px solid rgba(212,175,55,0.3)",color:"#D4AF37",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",padding:"5px 12px",fontFamily:"Inter,sans-serif",fontWeight:600 }}>{b}</span>
            ))}
          </div>

          {/* Bio */}
          <div style={{ borderLeft:"3px solid #D4AF37",paddingLeft:"1.4rem" }}>
            <p style={{ color:"rgba(255,255,255,0.75)",fontSize:16,lineHeight:1.85,fontFamily:"Inter,sans-serif" }}>
              I'm <strong style={{ color:"#fff",fontWeight:700 }}>Lolito Ruiz JR.</strong> — a Full-Stack Developer building the future one innovative system at a time. I engineer full-stack web applications, integrate AI APIs, and obsess over clean architecture and seamless user experiences.
            </p>
          </div>

          {/* Skills */}
          <div>
            <div style={{ color:"rgba(212,175,55,0.6)",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600,marginBottom:"1rem" }}>◆ Tech Stack</div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:"rgba(212,175,55,0.06)" }}>
              {SKILLS.map((g,i)=>(
                <div key={i} className="skill-group">
                  <div style={{ color:"#D4AF37",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:700,marginBottom:10 }}>{g.label}</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                    {g.items.map((item,j)=><span key={j} className="pill">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ color:"rgba(212,175,55,0.6)",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600,marginBottom:"1rem" }}>◆ Education</div>
            <div style={{ border:"1px solid rgba(212,175,55,0.15)",padding:"18px 20px",position:"relative" }}>
              <div style={{ position:"absolute",top:0,left:0,width:3,height:"100%",background:"#D4AF37",opacity:0.6 }} />
              <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"#fff",textTransform:"uppercase" }}>BS Computer Science</div>
              <div style={{ color:"#D4AF37",fontSize:13,fontFamily:"Inter,sans-serif",fontWeight:600,marginTop:4 }}>AISAT College</div>
              <div style={{ color:"rgba(255,255,255,0.4)",fontSize:11,letterSpacing:"0.1em",fontFamily:"Inter,sans-serif",marginTop:4 }}>June 2023 – Present</div>
            </div>
          </div>

          {/* Achievement */}
          <div>
            <div style={{ color:"rgba(212,175,55,0.6)",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600,marginBottom:"1rem" }}>◆ Achievement</div>
            <div style={{ display:"flex",alignItems:"center",gap:14,border:"1px solid rgba(212,175,55,0.15)",padding:"16px 20px" }}>
              <div style={{ width:36,height:36,background:"rgba(212,175,55,0.1)",border:"1px solid rgba(212,175,55,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1L2 5.6l4.2-.9L8 1z" stroke="#D4AF37" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ color:"#fff",fontSize:14,fontFamily:"Inter,sans-serif",fontWeight:600 }}>Best in Research</div>
                <div style={{ color:"rgba(255,255,255,0.4)",fontSize:11,letterSpacing:"0.08em",fontFamily:"Inter,sans-serif",marginTop:2 }}>
                  Paliparan III Senior High School · August 2022
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color:"rgba(212,175,55,0.6)",fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600,marginBottom:"0.5rem" }}>◆ Contact</div>
            <div>
              {CONTACT.map((c,i)=>(
                <a key={i} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="contact-link">
                  <span style={{ color:"rgba(255,255,255,0.35)",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",width:60,flexShrink:0 }}>{c.label}</span>
                  <span style={{ width:1,height:12,background:"rgba(212,175,55,0.2)",flexShrink:0 }} />
                  <span style={{ color:"rgba(255,255,255,0.7)",fontSize:13,fontFamily:"Inter,sans-serif" }}>{c.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="mailto:lolitoruiz65@gmail.com" className="cta-btn" style={{ alignSelf:"flex-start" }}>
            Hire Me
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 11L11 2M11 2H4M11 2V9" stroke="#071a07" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}