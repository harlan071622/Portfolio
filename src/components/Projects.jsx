const PROJECTS = [
  {
    title: "Student Information System",
    description:
      "A desktop application for managing student records, built with Python and CustomTkinter. Supports adding, updating, and archiving students, professor management, and data visualization through charts.",
    tags: ["Python", "CustomTkinter", "SQL"],
    condition: "Completed",
  },
  {
    title: "OCR Expense Tracker",
    description:
      "A full-stack app that extracts expense data from receipt images using OCR and tracks spending over time, with an Express + MongoDB backend and a Next.js frontend.",
    tags: ["Next.js", "Express", "MongoDB", "OCR"],
    condition: "Completed",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This site — a fast, responsive portfolio built with React, Vite, and Tailwind CSS to showcase my work and skills.",
    tags: ["React", "Vite", "Tailwind CSS"],
    condition: "Completed",
  },
  {
    title: "E-commerce Website (Work in Progress)",
    description:
      "A full-stack e-commerce website built with React, Node.js, MongoDB, and Express.js. Features include product listings, shopping cart, user authentication, and have an admin panel for managing products and orders, can also pull real time record for sales revenue.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    condition:"Working in Progress"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        Projects
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-neutral-200 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                project.condition === "Completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
              }`}>
                {project.condition}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
