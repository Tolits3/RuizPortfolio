import Navbar from "./components/Navbar";
import ShaderBg from "./components/ShaderBg";
import CursorTrail from "./components/CursorTrail";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import SparklesLayer from "./components/SparklesLayer";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ShaderBg />
      <CursorTrail />
      <SparklesLayer />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      <Footer />
    </div>
  );
}
