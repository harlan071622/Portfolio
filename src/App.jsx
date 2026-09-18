import { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx"

function getPath() {
  const path = window.location.pathname.replace(/\/$/, "")
  return path || "/"
}

export default function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    function handlePopState() {
      setPath(getPath())
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  function navigate(nextPath) {
    window.history.pushState({}, "", nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function renderPage() {
    switch (path) {
      case "/about":
        return (
          <>
            <About />
            <Skills />
          </>
        )
      case "/projects":
        return <Projects />
      case "/contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#000008] lg:flex">
      <Navbar currentPath={path} onNavigate={navigate} />
      <main className="min-w-0 flex-1 pb-20 lg:ml-10">
        <div className="mx-auto w-full min-w-0 max-w-6xl overflow-x-hidden px-6 py-10 md:px-10 lg:py-16">
          {renderPage()}
        </div>
        <Footer />
      </main>
    </div>
  )
}
