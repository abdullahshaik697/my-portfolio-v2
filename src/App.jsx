import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Rightside from "./components/Rightside";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Rightside/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Education/>
      <Contact/>
      
      
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abdullah Shaikh. Built with React & Tailwind.
      </footer>
    </>
  );
}

export default App;
