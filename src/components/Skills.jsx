import { skills } from "../data"

export default function Skills() {
  return (
    <section id="skills" className="py-8 px-6 ">
      <div className="max-w-3xl mx-auto text-center ">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 
                         dark:bg-indigo-800 dark:text-indigo-200 
                         rounded-lg text-sm font-medium shadow-sm 
                         transition transform hover:scale-105 
                         hover:bg-indigo-200 hover:text-indigo-900 
                         dark:hover:bg-indigo-700 dark:hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
