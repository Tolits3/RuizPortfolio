import FloatingCard from "./FloatingCard";

export default function Projects() {
  const proj = [
    {
      title: "AI Comic Generator",
      desc: "Manga/manhwa page generator — placeholder demo.",
      link: "https://panelsx.netlify.app/"
    },
    {
      title: "GOAT Era Shorts",
      desc: "Daily legend shorts stacker (placeholder).",
      link: "https://example.com/goat-era"
    },
    {
      title: "Restaurant (Kainana's)",
      desc: "Mock ordering site for Kainana's (placeholder).",
      link: "https://example.com/kainana"
    }
  ];

  return (
    <section id="projects" className="bg-forest/95 py-20 px-10">
      <h2 className="text-4xl font-bold text-gold mb-10">Projects</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {proj.map((p,i)=>(
          <div key={i} className="project-trigger">
            <FloatingCard title={p.title} desc={p.desc} link={p.link} />
          </div>
        ))}
      </div>
    </section>
  );
}
