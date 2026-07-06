const EMAIL = "lanceacuna9@gmail.com"

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        Contact
      </h2>
      <h3 className="mt-4 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        Let's work together
      </h3>
      <p className="mx-auto mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        {EMAIL}
      </a>
      <div className="mt-6 flex justify-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        <a href="#" className="hover:text-accent dark:hover:text-accent-dark border:1px solid white borderradius: 50%">
          <img src="/github.png" alt="GitHub" className="w-12 h-12 dark:invert" />
        </a>
        <a href="https://www.linkedin.com/in/lance-acuna-7a05182a7" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-dark">
          <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
        </a>
        <a href={`mailto:${EMAIL}`} className="hover:text-accent dark:hover:text-accent-dark">
          <img src="/gmail.png" alt="Gmail" className="w-12 h-12" />
        </a>
        <a href="viber://chat?number=+639615753621" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-dark">
          <img src="/viber.png" alt="Viber" className="w-12 h-12" />
        </a>
        <a href="https://wa.me/639615753621" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-dark">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
        </a>
      </div>
    </section>
  )
}
