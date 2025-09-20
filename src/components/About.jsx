import React from 'react'
import { skills } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-wide">
        <h3 className="text-2xl font-semibold mb-4">About</h3>
        <p className="mb-6 text-slate-600 dark:text-slate-300">I am a full-stack developer with a focus on backend systems, authentication, and building scalable web apps. I enjoy making things that just work and are easy to maintain.</p>
        <div>
          <h4 className="font-medium mb-2">Key skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 border rounded text-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}