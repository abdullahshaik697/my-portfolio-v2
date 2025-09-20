import React from 'react'
import { siteMeta } from '../data'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container-wide">
        <p className="text-sm mb-4 text-slate-500">Hello, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{siteMeta.name}</h1>
        <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">{siteMeta.title} — {siteMeta.tagline}</h2>
        <div className="flex gap-4">
          <a href="#contact" className="inline-block px-5 py-2 rounded-md border">Get in Touch</a>
          <a href={siteMeta.resume} className="inline-block px-5 py-2 rounded-md bg-primary text-black">View Resume</a>
        </div>
      </div>
    </section>
  )
}