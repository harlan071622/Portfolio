import { useEffect, useState } from "react"
import Contact from "./Contact.jsx"
import Skills from "./Skills.jsx"

const PROJECT_NAMES = [
  "Student Information System",
  "OCR Expense Tracker",
  "Personal Portfolio Website",
  "E-commerce Website",
  "Payroll System",
]

function navigateTo(path) {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (activeProject === null) return undefined

    return () => setActiveProject(null)
  }, [activeProject])

  return (
    <section className="min-w-0 space-y-8">
      <div className="border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
          Portfolio overview
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-6xl">
          Building useful digital experiences from front to back.
        </h1>
      </div> 
      <div className="grid min-w-0 gap-6 md:grid-cols-2">
        <article className="min-w-0 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md max-w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80 md:row-span-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">01</p>
              <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">About </h2>
            </div>
            <span className="text-neutral-400">↗</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            Front-end and full-stack developer focused on clear, human-friendly web products.
          </p>
        </article>
        <article className="min-w-0 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md max-w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">02</p>
                    <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">Skills</h2>
                </div>
                <span className="text-neutral-400">↗</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A selection of the technologies I use to build web applications.</p>
            <div className="mt-8 overflow-hidden rounded-xl bg-neutral-50 py-4 dark:bg-[#00020a]">
                <Skills compact />
            </div>
        </article>
        <article className="min-w-0 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md max-w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">03</p>
              <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">Projects</h2>
            </div>
            <button type="button" onClick={() => navigateTo("/projects")} className="text-neutral-400 hover:text-accent" aria-label="View all projects">↗</button>
          </div>
          <ul className="mt-6 divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
            {PROJECT_NAMES.map((project, index) => (
              <li key={project}>
                <button type="button" onClick={() => setActiveProject(index)} className="flex w-full items-center justify-between gap-4 py-3 text-left text-neutral-600 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent-dark">
                  <span>{project}</span>
                  <span className="text-xs text-neutral-400">0{index + 1}</span>
                </button>
              </li>
            ))}
          </ul>
          {activeProject !== null && <p className="mt-4 text-xs text-accent dark:text-accent-dark">Selected project {activeProject + 1}. Open Projects for the full details.</p>}
        </article>
        <article className="min-w-0 transition-all hover:-translate-y-1 max-w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">04</p>
              <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">Contact</h2>
            </div>
            <button type="button" onClick={() => navigateTo("/contact")} className="text-neutral-400 hover:text-accent" aria-label="Open contact page">↗</button>
          </div>
          <p className="mt-6 text-neutral-600 dark:text-neutral-300">Find me across the platforms where I share work and stay connected.</p>
          <Contact compact />
        </article>
      </div>
    </section>
  )
}
