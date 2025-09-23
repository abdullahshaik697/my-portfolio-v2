import { siteMeta } from "../data";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";

export default function Rightside() {
  return (
    <section className="mt-20 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 py-16">

        {/* Left Side */}
        <div className="text-center md:text-right space-y-4" >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500">
            {siteMeta.name}
          </h1>
          <h4 className="text-lg md:text-xl font-semibold text-yellow-300">
            {siteMeta.title}
          </h4>
          <h3 className="flex justify-center md:justify-end gap-6 mt-6">
            <LiaNode className="text-3xl sm:text-4xl md:text-5xl text-[#339933]" />   {/* Node.js green */}
            <SiMongodb className="text-3xl sm:text-4xl md:text-5xl text-[#47A248]" /> {/* MongoDB green */}
            <FaNpm className="text-3xl sm:text-4xl md:text-5xl text-[#CB3837]" />     {/* NPM red */}
          </h3>



        </div>

        {/* Right Side */}
        <div className="text-center md:text-left">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate backend developer who loves building scalable, secure,
            and efficient web applications. My expertise includes working with
            <span className="text-yellow-300 font-medium"> Node.js</span>,
            <span className="text-yellow-300 font-medium"> Express.js</span>, and
            <span className="text-yellow-300 font-medium"> MongoDB</span>.
            I enjoy solving complex problems, designing APIs, and ensuring smooth
            data flow between the client and server. Always eager to learn new
            technologies and improve performance.
          </p>
        </div>

      </div>
    </section>
  )
}
