export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-32 px-10 bg-fixed bg-[url('/forest-dark.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-forest/80"></div>

      <div className="relative max-w-3xl text-white animate-fade-in">
        <h2 className="text-gold text-4xl font-bold mb-8 animate-glow">
          About Me
        </h2>

        <p className="text-white/90 text-lg leading-relaxed">
          I’m Lolito Ruiz JR. 21 Years Old — a Full-Stack Ai developer building the future, one 
          innovative system at a time.
        </p>
      </div>
    </section>
  );
}
