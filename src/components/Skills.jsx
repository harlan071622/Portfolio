import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si"

const SKILLS_CATEGORIES = [
  {
    name: "Frontend",
    skills: [
      {name: "HTML5", icon: SiHtml5, color: "#e34f26"},
      {name: "CSS", icon: SiCss, color: "#1572b6"},
      {name: "JavaScript", icon: SiJavascript, color: "#f7df1e", iconBacking: true},
      {name: "TypeScript", icon: SiTypescript, color: "#3178c6"},
      {name: "React", icon: SiReact, color: "#61dafb"},
      {name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4"},
      {name: "Next.js", icon: SiNextdotjs, color: "#111827", invertOnDark: true},
    ],
  },
  {
    name: "Backend",
    skills: [
      {name: "Node.js", icon: SiNodedotjs, color: "#339933"},
      {name: "Express.js", icon: SiExpress, color: "#111827", invertOnDark: true},
      {name: "PHP", icon: SiPhp, color: "#777bb4"},
    ],
  },
  {
    name: "DataBase",
    skills: [
      {name: "MongoDB", icon: SiMongodb, color: "#47a248"},
      {name: "MySQL", icon: SiMysql, color: "#4479a1"},
      {name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1"},
    ],
  },
  {
    name: "Programming",
    skills: [
      {name: "Python", icon: SiPython, color: "#3776ab"}
    ],
  },
  {
    name: "Tools",
    skills: [
      {name: "Git", icon: SiGit, color: "#f05032"},
      {name: "GitHub", icon: SiGithub, color: "#111827", invertOnDark: true}
    ],
  },
]

export default function Skills({ compact = false }) {
  const skills = SKILLS_CATEGORIES.flatMap((category) => category.skills)

  return (
    <section id="skills" className={compact ? "px-4" : "mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80"}>
      {!compact && <div className="flex items-start justify-between gap-6">
        <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">Skills</h2>
        <span className="text-xs text-neutral-400">02 / 03</span>
      </div>}
      {compact ? (
        <div className="skills-marquee mt-6">
          <ul className="skills-track flex w-max gap-3" aria-label="Skills">
            {[...skills, ...skills].map((skill, index) => (
              <li key={`${skill.name}-${index}`} className="flex items-center gap-2 whitespace-nowrap rounded-full bg-accent/10 px-4 py-2 text-xs font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                <skill.icon className={`h-4 w-4 ${skill.iconBacking ? "rounded-sm bg-[#111827] p-0.5" : ""} ${skill.invertOnDark ? "dark:brightness-0 dark:invert" : ""}`} style={{ color: skill.color }} />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Skills">
          {SKILLS_CATEGORIES.map((category) => (
            <li key={category.name} className="rounded-xl bg-neutral-50 p-4 dark:bg-[#00020a]">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{category.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.skills.map(({name, icon: Icon, color, invertOnDark, iconBacking}) => (
                  <li key={name} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                    <Icon className={`mr-2 inline-block h-4 w-4 ${iconBacking ? "rounded-sm bg-[#111827] p-0.5" : ""} ${invertOnDark ? "dark:brightness-0 dark:invert" : ""}`} style={{ color }} />
                    {name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
