import { useState, useEffect } from "react"

const PROJECTS = [
  {
    title: "Student Information System",
    description:
      "A desktop application for managing student records, built with Python and CustomTkinter. Supports adding, updating, and archiving students, professor management, and data visualization through charts.",
    details:"",
    tags: ["Python", "CustomTkinter", "SQL", "Flet"],
    images:["/TST1 (1).png", "/TST1 (2).png", "/TST1 (3).png", "/TST1 (4).png", "/TST1 (5).png", "/TST1 (6).png", "/TST1 (7).png", "/TST1 (8).png", "/TST1 (9).png"],
    condition: "Completed",
  },
  {
    title: "OCR Expense Tracker",
    description:
      "A full-stack app that extracts expense data from receipt images using OCR and tracks spending over time, with an Express + MongoDB backend and a Next.js frontend.",
    details:"",
    tags: ["Next.js", "Express", "MongoDB", "OCR"],
    images: ["/OCRET1.png", "/OCRET2.png"],
    condition: "Completed",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This site — a fast, responsive portfolio built with React, Vite, and Tailwind CSS to showcase my work and skills.",
    details:"",
    tags: ["React", "Vite", "Tailwind CSS"],
    images: ["/Portfolio1.png", "/Portfolio2.png", "/Portfolio3.png", "/Portfolio4.png", "/Portfolio5.png", "/Portfolio6.png", "/Portfolio7.png", "/Portfolio8.png" ],
    condition: "Completed",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built with React, Node.js, MongoDB, and Express.js. Features include product listings, shopping cart, user authentication, and have an admin panel for managing products and orders, can also pull real time record for sales revenue.",
    details:"",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    images: ["/pdp1.png", "/pdp2.png", "/pdp3.png", "/pdp4.png", "/pdp5.png", "/pdp6.png", "/pdp7.png", "/pdp8.png", "/pdp9.png", "/pdp10.png", "/pdp11.png"],
    condition: "Working in Progress",
  },
  {
    title: "Payroll System for a Construction Business with Materials and Equipment Rentals",
    description: 
      "This is an application for a small construction business for them to monitor their payroll system, to also track their material cost and equipment rentals if ever they have used one.",
    details:"",
    tags:["Flet", "Python", "MongoDB"],
    images:["/PS1.png", "/PS2.png", "/PS3.png"],
    condition: "Completed",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeModalTab, setActiveModalTab] = useState("images")

  const activeImage = selectedProject?.images?.[currentImageIndex] || ""

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setSelectedProject(null)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length)
  }

  function prevImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  return (
    <div className="py-16">
    <section id="projects" className=" rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:col-span-2 dark:border-[#7f8c8d] dark:bg-[#00020a]/80">
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">Projects</h2>
        <span className="text-xs text-neutral-400">03 / 03</span>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article onClick ={() => {
            setSelectedProject(project)
            setCurrentImageIndex(0)
            setActiveModalTab("images")
          }}
            key={project.title}
            className="group flex cursor-pointer flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md dark:border-[#7f8c8d] dark:bg-[#00020a]"
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
                  ? "bg-green-600 text-white dark:bg-green-700 dark:text-green-50"
                  : "bg-yellow-700 text-yellow-50 dark:bg-yellow-800 dark:text-yellow-50"
              }`}>
                {project.condition}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent 
                  dark:bg-accent-dark/10 dark:text-accent-dark">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-[#7f8c8d] dark:bg-[#000008]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">Project detail</p>
                <h3 className="mt-2 text-xl font-bold text-neutral-900 dark:text-neutral-100">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-[#7f8c8d] dark:text-neutral-200 dark:hover:bg-[#111827]">
                Close
              </button>
            </div>

            <div className="border-b border-neutral-200 px-5 dark:border-neutral-800">
              <div className="flex gap-6" role="tablist" aria-label="Project details">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeModalTab === "images"}
                  onClick={() => setActiveModalTab("images")}
                  className={`border-b-2 py-3 text-sm font-semibold transition-colors ${
                    activeModalTab === "images"
                      ? "border-accent text-accent dark:border-accent-dark dark:text-accent-dark"
                      : "border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
                >
                  Images
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeModalTab === "details"}
                  onClick={() => setActiveModalTab("details")}
                  className={`border-b-2 py-3 text-sm font-semibold transition-colors ${
                    activeModalTab === "details"
                      ? "border-accent text-accent dark:border-accent-dark dark:text-accent-dark"
                      : "border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
                >
                  Stack &amp; Description
                </button>
              </div>
            </div>

            <div className="p-5 md:p-6">
              {activeModalTab === "images" ? (
                <div className="project-gallery">
                <div className="project-thumbnail-list">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={`${selectedProject.title}-${image}`}
                      type="button"
                      onClick={() => {
                        setCurrentImageIndex(index)
                      }}
                      className={`project-thumbnail ${currentImageIndex === index ? "is-active" : ""}`}
                      aria-label={`View image ${index + 1} of ${selectedProject.title}`}
                    >
                      <img src={image} alt={`${selectedProject.title} preview ${index + 1}`} />
                    </button>
                  ))}
                </div>

                <div className="project-viewer-wrap">
                  <div className="project-viewer">
                    <img src={activeImage} alt={`${selectedProject.title} current`} />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={prevImage}
                      className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-[#7f8c8d] dark:text-neutral-200 dark:hover:bg-[#111827]"
                    >
                      Previous
                    </button>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </p>

                    <button
                      type="button"
                      onClick={nextImage}
                      className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-[#7f8c8d] dark:text-neutral-200 dark:hover:bg-[#111827]"
                    >
                      Next
                    </button>
                  </div>
                </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">Status</p>
                    <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      selectedProject.condition === "Completed"
                        ? "bg-green-600 text-white dark:bg-green-700 dark:text-green-50"
                        : "bg-yellow-700 text-yellow-50 dark:bg-yellow-800 dark:text-yellow-50"
                    }`}>
                      {selectedProject.condition}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">Technology stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-dark">Description</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
    </div>
  )
}
