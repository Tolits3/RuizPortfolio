export default function Navbar() {
  return (
    <nav className="w-full bg-forest text-gold py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold">L•R</h1>

      <div className="flex gap-8 text-lg">
        <a href="#home" className="hover:text-gold-light transition">Home</a>
        <a href="#projects" className="hover:text-gold-light transition">Projects</a>
        <a href="#about" className="hover:text-gold-light transition">About</a>
        <a href="#contact" className="hover:text-gold-light transition">Contact</a>
      </div>
    </nav>
  );
}
