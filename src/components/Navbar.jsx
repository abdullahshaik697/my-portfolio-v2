
import { siteMeta } from '../data'

export default function Navbar({ toggleDark }) {
  return (
    <header className="fixed w-full bg-opacity-60 backdrop-blur z-40">
      <nav className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <a href="#home" className="text-xl font-semibold">{siteMeta.name}</a>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#writing" className="hover:underline">Writing</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={toggleDark} aria-label="toggle theme" className="px-3 py-1 border rounded">Theme</button>
        </div>
        <div className="md:hidden">
          {/* simple anchor links on mobile — you can replace with hamburger menu */}
          <a href="#contact" className="text-sm">Contact</a>
        </div>
      </nav>
    </header>
  )
}