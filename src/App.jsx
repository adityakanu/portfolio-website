import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="text-gray-900 bg-white body-font">
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
