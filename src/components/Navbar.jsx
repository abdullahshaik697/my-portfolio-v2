import { siteMeta } from '../data'
import { FaCode } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <nav className="max-w-6xl m-auto flex justify-between items-center px-6 py-4 border-b border-indigo-900">
       
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
           <FaCode className='text-yellow-300 text-2xl'/>
          <a href="#home" className="text-xl font-bold tracking-wide hover:text-slate-300">
            {siteMeta.name}
          </a>
        </div>

        {/* Links */}
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
      </nav>
    </header>
  )
}
