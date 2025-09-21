import { education } from "../data"

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-5 h-5 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white"></span>

              {/* Content */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.degree}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  {edu.school}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {edu.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
