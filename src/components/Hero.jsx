// ← DELETE the import line, nothing replaces it

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-forest to-forest-dark animate-gradient-flow bg-[length:200%_200%]">

      <div className="absolute inset-0 opacity-20 bg-[url('./gold-lines.png')] bg-cover bg-fixed"></div>

      <div className="relative flex items-center px-10 pt-24 gap-16">
        
        <div>
          <h1 className="text-gold text-7xl font-extrabold animate-slide-right animate-glow">
            Lolito  S. Ruiz JR.
          </h1>

          <h2 className="text-gold-light text-3xl font-semibold mt-4 animate-fade-in">
            FULL-STACK & AI Developer
          </h2>

          <p className="text-white/90 text-lg max-w-xl mt-6 animate-slide-up">
            Crafting next-generation digital experiences powered by innovation, 
            precision, and relentless imagination.
          </p>

          <a 
            href="#projects"
            className="inline-block mt-8 bg-gold text-forest px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gold-light transition-all hover:scale-105 animate-fade-in"
          >
            View Projects
          </a>
        </div>

        <img 
          src="/profile.jpg"
          alt="Profile"
          className="w-72 h-72 rounded-full object-cover shadow-[0_0_20px_var(--color-gold)] border-4 border-gold animate-fade-in flex-shrink-0"
        />
      </div>
    </section>
  );
}