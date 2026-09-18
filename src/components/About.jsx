import Skills from "./Skills.jsx"

export default function About() {
  return (
    <section id="about" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8 dark:border-[#7f8c8d] dark:bg-[#000008]/80">
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        About Me
        </h2>
        <span className="text-xs text-neutral-400">01 / 03</span>
      </div>
      <p className="mt-6 max-w-4xl text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-2xl">
        I am a full-stack website developer who turns thoughtful ideas into clear, user-friendly digital experiences.
      </p>
      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        With a passion for creating visually appealing. I have experience in front-end development, including HTML, CSS, and JavaScript, 
        as well as back-end development using various frameworks and technologies. 
        I am constantly learning and staying up-to-date with the latest trends and best practices in web 
        development to ensure that my work is of the highest quality.
      </p>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Full-stack website developer</p>
    </section>
  )
}
