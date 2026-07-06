const SKILLS_CATEGORIES = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Next.js"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PHP", "MySQL", "SQL", "PostgreSQL"]
  },
  {
    name: "Programming",
    skills: ["Python"]
  },
  {
    name: "Tools",
    skills: ["Git & GitHub"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        Skills
      </h2>
      <ul>
        {SKILLS_CATEGORIES.map((category) => 
            <div key={category.name}>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100 indent-5">
                {category.name}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 ml-10">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent/10 px-5 py-2 text-sm font-medium text-accent 
                    dark:bg-accent-dark/10 dark:text-accent-dark "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </ul>
    </section>
  )
}
