import React from 'react'
import { siteMeta } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container-wide">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="mb-4">Email me at <a href={`mailto:${siteMeta.email}`} className="underline">{siteMeta.email}</a></p>
        <div className="flex gap-4">
          <a href={siteMeta.github} className="underline">GitHub</a>
          <a href={siteMeta.linkedin} className="underline">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}