import { useState } from "react";
import { siteMeta } from "../data";
import { FaCode } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger + close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <nav className="max-w-6xl m-auto flex justify-between items-center px-6 py-4 border-b border-indigo-900">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <FaCode className="text-yellow-300 text-2xl" />
          <a href="#home" className="text-xl font-bold tracking-wide hover:text-slate-300">
            {siteMeta.name}
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-slate-300">About</a>
          <a href="#experience" className="hover:text-slate-300">Experience</a>
          <a href="#projects" className="hover:text-slate-300">Projects</a>
          <a href="#contact" className="hover:text-slate-300">Contact</a>
          <a
            href={siteMeta.resume}
            target="_blank"
            className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:scale-105 transition transform shadow-md"
          >
            My Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-lg font-bold">{siteMeta.name}</h2>
          <button onClick={() => setIsOpen(false)} className="focus:outline-none">
            <HiX className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-6 text-sm font-medium">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">About</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Contact</a>
          <a
            href={siteMeta.resume}
            target="_blank"
            className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md text-center"
          >
            My Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
