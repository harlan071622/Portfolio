import ThemeToggle from "./ThemeToggle.jsx"
import { GoHomeFill } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const LINKS = [
  { icon: <GoHomeFill size={30} />, label: "Home", href: "/" },
  { icon: <MdPerson size={30} />, label: "About", href: "/about" },
  { icon: <GoFileDirectory size={30} />, label: "Projects", href: "/projects" },
  { icon: <MdEmail size={30} />, label: "Contact", href: "/contact" },
]

export default function Navbar({ currentPath, onNavigate }) {
  return (
    <header className="relative border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-[#7f8c8d] dark:bg-[#000008]/95 lg:fixed lg:left-0 lg:z-50 lg:flex lg:w-80 lg:border-b-0 lg:border-r">
      <nav className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-4 lg:flex-1 lg:items-stretch lg:px-8 lg:py-10">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-accent/10 text-3xl font-bold text-accent ring-4 ring-accent/20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 lg:text-5xl dark:bg-accent-dark/10 dark:text-accent-dark dark:ring-accent-dark/20">
          <img className="rounded-full" src="/formal.jpeg" alt="LA" />
        </div>
        <div>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              onNavigate("/")
            }}
            className="block pt-4 text-center text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:pt-10 lg:text-left lg:text-4xl">
            Lance J. Acuña
          </a>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-400">Web developer</p>
        </div>
        <ul className="mt-6 flex w-full gap-1 overflow-x-auto pt-1 text-sm lg:mt-16 lg:flex-col lg:gap-4 lg:overflow-visible lg:pt-0">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(link.href)
                  }}
                  className={` flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 transition-colors hover:bg-accent/10 hover:text-accent dark:hover:bg-accent-dark/10 dark:hover:text-accent-dark ${
                    currentPath === link.href
                      ? "bg-accent/10 font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <span className="flex shrink-0 items-center">{link.icon}</span>
                  <span>{link.label}</span> 
                </a>
              </li>
            ))}
        </ul>
        <div className="absolute top-4 right-4 flex items-center gap-4 lg:static lg:mt-0 lg:self-start lg:pt-70">
          <div className="hidden text-xs text-neutral-400 lg:block">Available for new work</div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
