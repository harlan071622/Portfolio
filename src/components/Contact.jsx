import { useState } from "react"

const EMAIL = "lanceacuna9@gmail.com"
const WEB3FORMS_ACCESS_KEY = "c9d6f9d9-566b-4c03-9b0d-88380489106d"
const INITIAL_FORM = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
}

export default function Contact({ compact = false }) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ type: "idle", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: "sending", message: "Sending your message..." })

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Portfolio Contact Form Submission",
          ...formData,
        }),
      })

      const result = await response.json()

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Something went wrong while sending your message.")
      }

      setFormData(INITIAL_FORM)
      setStatus({ type: "success", message: "Your message has been sent successfully!" })
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send your message. Please try again.",
      })
    }
  }

  if (compact) {
    return (
      <section id="contact" className="mt-6">
        <div className="flex justify-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
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
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <section
        id="contact"
        className="rounded-2xl border border-neutral-200 bg-white px-6 py-12 text-center shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80 md:px-10 md:py-20"
      >
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

        <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
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

      <section className="rounded-2xl border border-neutral-200 bg-white px-6 py-12 shadow-sm dark:border-[#7f8c8d] dark:bg-[#000008]/80 md:px-10 md:py-20">
        <div className="grid">
          <h3 className="text-xl text-left font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
            Contact Form
          </h3>
          <p className="mt-4 max-w-md text-justify text-neutral-600 dark:text-neutral-400">
            Please fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="text-left">
              <label className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
                First Name:
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className="mt-4 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500"
              />
            </div>
            <div className="text-left">
              <label className="text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
                Last Name:
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className="mt-4 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-left text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-4 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-left text-sm font-semibold tracking-wide text-accent uppercase dark:text-accent-dark">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="mt-4 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent dark:border-[#7f8c8d] dark:bg-[#000008]/80 dark:text-neutral-300 dark:placeholder:text-neutral-500"
            />
          </div>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success"
                  ? "text-green-600 dark:text-green-400"
                  : status.type === "error"
                    ? "text-red-600 dark:text-red-400"
                    : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {status.message}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={status.type === "sending"}
              className="mt-4 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
