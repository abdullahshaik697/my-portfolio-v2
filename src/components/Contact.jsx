import { siteMeta } from "../data"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
         Let’s connect and shape the future of web together.
        </p>

        {/* Email */}
        <a
          href={`mailto:${siteMeta.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition mb-8"
        >
          <MdEmail size={20} /> {siteMeta.email}
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href={siteMeta.github}
            target="_blank"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={siteMeta.linkedin}
            target="_blank"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href={siteMeta.facebook}
            target="_blank"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href={siteMeta.instagram}
            target="_blank"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaInstagram size={28} />
          </a>
        </div>

      </div>
    </section>
  )
}
