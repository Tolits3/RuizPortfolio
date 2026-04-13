const PROJECTS = [
  {
    num:   "01",
    title: "AI Comic Generator",
    tag:   "Full-Stack · AI · SaaS",
    desc:  "Manga & manhwa page generator powered by Hugging Face AI. A full SaaS product with auth, real-time feedback, and 99.9% uptime engineered on low-resource hardware.",
    link:  "https://panelsx.netlify.app/",
    highlights: [
      { label: "Architecture",  text: "Engineered full-stack integration with Hugging Face Inference APIs, offloading heavy AI computation server-side." },
      { label: "UI / HCI",      text: "Built a responsive, real-time interface in ReactJS + TailwindCSS with seamless state management during image processing." },
      { label: "Performance",   text: "Async backend strategy delivering 99.9% uptime while running on an Acer Aspire ES 14 low-resource environment." },
      { label: "Auth & Data",   text: "Firebase & Supabase for secure user authentication and scalable cloud data storage." },
    ],
    stack: ["ReactJS", "TailwindCSS", "Hugging Face API", "Firebase", "Supabase", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        .proj-card{border:1px solid rgba(212,175,55,0.15);background:rgba(255,255,255,0.02);position:relative;overflow:hidden;transition:border-color 0.3s,background 0.3s;}
        .proj-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:#D4AF37;transition:height 0.4s ease;}
        .proj-card:hover{border-color:rgba(212,175,55,0.4);background:rgba(212,175,55,0.03);}
        .proj-card:hover::before{height:100%;}
        .highlight-row{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid rgba(212,175,55,0.07);}
        .highlight-row:last-child{border-bottom:none;}
        .stack-pill{border:1px solid rgba(212,175,55,0.22);color:rgba(255,255,255,0.6);font-size:10px;letter-spacing:0.08em;padding:4px 10px;font-family:'Inter',sans-serif;transition:all 0.2s;display:inline-block;}
        .stack-pill:hover{border-color:#D4AF37;color:#D4AF37;}
        .proj-link{display:inline-flex;align-items:center;gap:8px;background:#D4AF37;color:#071a07;padding:12px 30px;font-weight:700;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;font-family:'Inter',sans-serif;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));transition:background 0.2s,transform 0.15s;}
        .proj-link:hover{background:#f0cc58;transform:scale(1.03);}
        .more-card{border:1px dashed rgba(212,175,55,0.12);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:12px;}
      `}</style>

      {/* Label */}
      <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:"1.2rem" }}>
        <span style={{ width:48,height:2,background:"#D4AF37",flexShrink:0,display:"block" }} />
        <span style={{ color:"#D4AF37",fontSize:11,letterSpacing:"0.22em",fontWeight:600,fontFamily:"Inter,sans-serif",textTransform:"uppercase" }}>Selected Work</span>
      </div>

      {/* Heading */}
      <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"3.5rem",flexWrap:"wrap",gap:"1rem" }}>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(56px,10vw,120px)",color:"#fff",lineHeight:0.88,textTransform:"uppercase",letterSpacing:"-0.01em",margin:0 }}>
          Projects
        </h2>
        <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(56px,10vw,120px)",color:"rgba(212,175,55,0.12)",lineHeight:0.88,userSelect:"none" }}>
          {String(PROJECTS.length).padStart(2,"0")}
        </span>
      </div>

      {/* Grid */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:1,border:"1px solid rgba(212,175,55,0.15)" }}>
        {PROJECTS.map((p,i)=>(
          <div key={i} className="proj-card" style={{ padding:"clamp(24px,4vw,44px)",display:"flex",flexDirection:"column",gap:"1.2rem" }}>

            {/* Number */}
            <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:72,color:"rgba(212,175,55,0.07)",lineHeight:1,userSelect:"none" }}>{p.num}</div>

            {/* Tag */}
            <span style={{ color:"#D4AF37",fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600 }}>◆ {p.tag}</span>

            {/* Title */}
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,3.5vw,44px)",color:"#fff",lineHeight:1.05,textTransform:"uppercase",margin:0 }}>{p.title}</h3>

            {/* Divider */}
            <div style={{ width:40,height:1,background:"rgba(212,175,55,0.3)" }} />

            {/* Short desc */}
            <p style={{ color:"rgba(255,255,255,0.55)",fontSize:14,lineHeight:1.75,fontFamily:"Inter,sans-serif",margin:0 }}>{p.desc}</p>

            {/* Highlights */}
            <div style={{ border:"1px solid rgba(212,175,55,0.1)",padding:"4px 16px" }}>
              {p.highlights.map((h,j)=>(
                <div key={j} className="highlight-row">
                  <span style={{ color:"#D4AF37",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:700,flexShrink:0,width:80,paddingTop:1 }}>{h.label}</span>
                  <span style={{ color:"rgba(255,255,255,0.5)",fontSize:12,lineHeight:1.7,fontFamily:"Inter,sans-serif" }}>{h.text}</span>
                </div>
              ))}
            </div>

            {/* Stack pills */}
            <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
              {p.stack.map((s,j)=><span key={j} className="stack-pill">{s}</span>)}
            </div>

            {/* Link */}
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link" style={{ alignSelf:"flex-start",marginTop:"auto" }}>
              View Live
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#071a07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        ))}

        {/* Coming soon */}
        <div className="more-card" style={{ padding:"clamp(24px,4vw,44px)" }}>
          <div style={{ width:48,height:48,border:"1px solid rgba(212,175,55,0.25)",display:"flex",alignItems:"center",justifyContent:"center",clipPath:"polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3V15M3 9H15" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ color:"rgba(212,175,55,0.4)",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"Inter,sans-serif",fontWeight:600 }}>More Coming Soon</span>
        </div>
      </div>
    </section>
  );
}