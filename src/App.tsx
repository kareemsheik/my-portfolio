import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Timeline />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;