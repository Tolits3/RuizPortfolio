const C = {
  bg:'#0C0B08', gold:'#C9956D', goldLt:'#DEB896',
  cream:'#F5F2ED', muted:'rgba(245,242,237,0.55)',
  border:'rgba(201,149,109,0.14)', dim:'rgba(201,149,109,0.05)',
};

const EXPERIENCES = [
  {
    title: 'Founder & Lead Developer & AI/ML Researcher',
    company: 'PanelX',
    location: 'Dasmarinas, Cavite',
    period: 'Mar 2023 - Present',
    highlights: [
      'Developed and maintained company\'s vision, mission statement and strategic plan.',
      'Pursued networking events, trade shows and industry-related meetings to increase brand awareness.',
      'Researched LLMs and Trained LoRAs through Cloud Infrastructure for better Image Consistency.',
      'Successfully conducted extensive research and data analysis to identify trends and patterns.',
      'Analyzed problems to develop solutions involving computer hardware and software.',
      'Applied theoretical expertise and innovation to create or apply new technology and adapted principles for applying computers to new uses.',
      'Constructed database systems to store, organize, and retrieve data efficiently.',
      'Utilized programming languages for developing software solutions and applications according to customer requirements or specifications.',
      'Directed or conducted studies or researched on issues affecting areas of responsibility.',
      'Directed, planned, or implemented policies, objectives, or activities of organizations or businesses for continuing operations, to maximize returns on investments, or to increase productivity.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: C.bg,
        padding: 'clamp(60px,10vw,120px) clamp(24px,6vw,96px)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        .exp-timeline { position: relative; }
        .exp-item { position: relative; padding-left: 3rem; margin-bottom: 2.5rem; }
        .exp-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 12px;
          height: 12px;
          background: ${C.gold};
          border-radius: 50%;
          border: 2px solid ${C.bg};
          z-index: 2;
        }
        .exp-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 24px;
          width: 2px;
          height: calc(100% + 2rem);
          background: ${C.border};
          z-index: 1;
        }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; gap: 1rem; flex-wrap: wrap; }
        .exp-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(20px, 3vw, 28px); color: ${C.cream}; text-transform: uppercase; margin: 0; line-height: 1.1; }
        .exp-role { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: ${C.gold}; font-weight: 700; font-family: 'Inter', sans-serif; opacity: 0.85; }
        .exp-meta { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
        .exp-company { color: ${C.gold}; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; font-family: 'Inter', sans-serif; }
        .exp-divider { width: 1px; height: 18px; background: ${C.border}; }
        .exp-location { color: rgba(245,240,232,0.6); font-size: 13px; letter-spacing: 0.08em; font-family: 'Inter', sans-serif; }
        .exp-period { color: rgba(245,240,232,0.5); font-size: 12px; letter-spacing: 0.1em; font-family: 'Inter', sans-serif; }
        .exp-highlights { display: flex; flex-direction: column; gap: 0.7rem; margin-top: 1.2rem; }
        .exp-highlight { display: flex; gap: 12px; color: rgba(245,240,232,0.65); font-size: 14px; line-height: 1.7; font-family: 'Inter', sans-serif; font-weight: 300; }
        .exp-highlight::before { content: '▸'; color: ${C.gold}; flex-shrink: 0; opacity: 0.7; }
        @media(max-width:768px){
          .exp-item { padding-left: 2rem; }
          .exp-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.2rem' }}>
        <span style={{ width: 48, height: 2, background: C.gold, flexShrink: 0, display: 'block' }} />
        <span style={{ color: C.gold, fontSize: 11, letterSpacing: '0.22em', fontWeight: 600, fontFamily: 'Inter,sans-serif', textTransform: 'uppercase' }}>
          Professional Journey
        </span>
      </div>

      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,10vw,120px)', color: C.cream, lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-0.01em', margin: 0 }}>
          Experience
        </h2>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px,10vw,120px)', color: 'rgba(201,168,76,0.1)', lineHeight: 0.88, userSelect: 'none' }}>EXP</span>
      </div>

      {/* Timeline */}
      <div className="exp-timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="exp-item">
            <div className="exp-role">◆ {exp.title}</div>
            
            <h3 className="exp-title">{exp.company}</h3>
            
            <div className="exp-meta">
              <span className="exp-company">{exp.company}</span>
              <div className="exp-divider" />
              <span className="exp-location">{exp.location}</span>
              <div className="exp-divider" />
              <span className="exp-period">{exp.period}</span>
            </div>

            <div className="exp-highlights">
              {exp.highlights.map((highlight, j) => (
                <div key={j} className="exp-highlight">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
