const EMAIL = "lanceacuna9@gmail.com"

export default function Contact({ compact = false }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <section id="contact" className={compact ? "mt-6" : "rounded-2xl border border-neutral-200 bg-white px-6 py-12 text-center shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80 md:px-10 md:py-20"}>
      <h2 className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
        Contact
      </h2>
      {!compact && <h3 className="mt-4 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        Let's work together
      </h3>}
      {!compact && <p className="mx-auto mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>}
      {!compact && <a
        href={`mailto:${EMAIL}`}
        className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        {EMAIL}
      </a>}
      <div className={`flex justify-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400 ${compact ? "mt-4" : "mt-8"}`}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform hover:scale-110">
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
      <section id="contact" className={compact ? "mt-6" : "rounded-2xl border border-neutral-200 bg-white px-6 py-12 text-center shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80 md:px-10 md:py-20"}>
        <div className="grid">
          <h1 className="text-xl text-left font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
            Contact Form
          </h1>
          <p className="mx-auto text-justify mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
            Please fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST" 
          className="mt-6 grid gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <article className="text-left">
            <label className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              First Name:
            </label>
            <input type="text" placeholder="Enter your first name" className="mt-4 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500" />
            </article>
            <article className="text-left">
            <label className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              Last Name:
            </label>
            <input type="text" placeholder="Enter your last name" className="mt-4 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500" />  
            </article>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-left font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              Email:
            </label>
            <input type="email" placeholder="Enter your email" className="mt-4 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-left font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              Message:
            </label>
            <textarea placeholder="Enter your message" className="mt-4 rounded-lg border row border-neutral-300 w-100% bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500" />
          </div>
          <div>
            <button className="mt-4 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
