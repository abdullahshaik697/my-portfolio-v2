import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-wide">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="p-4 border rounded">
              <h4 className="font-semibold mb-1">{p.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{p.desc}</p>
              <div className="flex items-center gap-3 mb-3">
                {p.tech.map((t) => <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
              </div>
              <div className="flex gap-3">
                <a href={p.github} className="text-sm underline">Source</a>
                <a href={p.demo} className="text-sm underline">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}