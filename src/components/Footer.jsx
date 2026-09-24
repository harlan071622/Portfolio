export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/95 text-center text-sm text-neutral-500 backdrop-blur dark:border-[#7f8c8d] dark:bg-[#000008]/95 dark:text-accent-dark">
      © {new Date().getFullYear()} Lance J. Acuña. All rights reserved.
    </footer>
  )
}
