import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(true); // start in dark mode

  // Add/remove "dark" class on <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Navbar toggleDark={() => setDark((s) => !s)} />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Abdullah Shaikh. Built with React & Tailwind.
      </footer>
    </>
  );
}

export default App;
