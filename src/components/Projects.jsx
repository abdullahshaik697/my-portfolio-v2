import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10">
          Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 hover:shadow-xl transition"
            >
              {/* Left Side - Details */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="md:w-2/5 flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-48 md:h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
