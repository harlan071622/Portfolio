export default function Footer() {
  return (
    <footer className="fixed right-0 bottom-0 left-0 z-40 border-t border-neutral-200 bg-white/95 py-6 text-center text-sm text-neutral-500 backdrop-blur dark:border-[#7f8c8d] dark:bg-[#000008]/95 dark:text-[#bdc3c7] lg:left-80">
      © {new Date().getFullYear()} Lance J. Acuña. All rights reserved.
    </footer>
  )
}
