export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between"
    >
      <div className="text-center md:text-left">
        <p className="text-sm font-medium tracking-wide text-accent uppercase dark:text-accent-dark">
          Hi, my name is
        </p>
        <h1 className="mt-2 text-4xl font-bold text-neutral-900 sm:text-5xl dark:text-neutral-100">
          Lance J. Acuña
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-neutral-500 dark:text-neutral-400">
          Website Developer
        </h2>
        <p className="mx-auto mt-4 max-w-md text-neutral-600 md:mx-0 dark:text-neutral-400">
          I build clean, user-friendly web experiences from front to back.
        </p>
        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <a
            href="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700 transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-accent-dark dark:hover:text-accent-dark"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
