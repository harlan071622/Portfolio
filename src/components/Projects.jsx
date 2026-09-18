import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    <section id="projects" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:col-span-2 dark:border-[#7f8c8d] dark:bg-[#00020a]/80">
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">Projects</h2>
        <span className="text-xs text-neutral-400">03 / 03</span>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article onClick ={() => {
            setSelectedProject(project)
            setCurrentImageIndex(0)
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedProject(null)}>
        <div className="w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg dark:bg-[#000008]" onClick={(e) => e.stopPropagation()}>
          <div>
            <div className="p-5 text-xl font-bold">{selectedProject.title}</div>
            <p className="p-2 mb-4">{selectedProject.details}</p>
            <div className="flex items-center gap-4">
              <button onClick={prevImage} className="w-10 shrink-0 bg-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-400">
                <FaArrowLeft />
              </button>
              <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="min-w-0 flex-1 rounded-lg" />
              <button onClick={nextImage} className="w-10 shrink-0 bg-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-400">
                <FaArrowRight />
              </button>
            </div> 
          </div>
          <button onClick={() => setSelectedProject(null)} className="rounded-lg bg-[#1b2631] px-4 py-2 text-white mt-5 dark:bg-[#bdc3c7] dark:text-[#1b2631]">
            Close
          </button>
        </div>
      </div>
    )}
    </section>
  )
}
