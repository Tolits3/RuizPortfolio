import Navbar from "./components/Navbar";
import ShaderBg from "./components/ShaderBg";
import CursorTrail from "./components/CursorTrail";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import SparklesLayer from "./components/SparklesLayer";
import Footer from "./components/Footer";
import AmbientBlob from "./components/AmbientBlob";

export default function App(){
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ShaderBg />
      <CursorTrail />
      <SparklesLayer />
      <AmbientBlob />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>

      <Footer />
    </div>
  );
}
