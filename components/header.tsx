"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState<"white" | "dark">("dark")
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 50)

      // Simplified scroll detection for mobile
      const sections = [
        { id: "about", offset: 150 },
        { id: "projects", offset: 150 },
        { id: "skills", offset: 150 },
        { id: "contact", offset: 150 },
      ]

      let newColor: "white" | "dark" = "dark"
      let foundSection = "home"

      if (currentScroll > 50) {
        newColor = "white"
      }

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const headerOffset = section.offset
          
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            newColor = section.id === "projects" || section.id === "contact" ? "dark" : "white"
            foundSection = section.id
            break
          }
        }
      }

      setLogoColor(newColor)
      setActiveSection(foundSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.position = ""
      document.body.style.width = ""
    }
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-lorenzo-dark/80" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 md:px-12 flex items-center justify-between h-14 md:h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-start mix-blend-difference"
          >
            <h1
              className={`font-brier text-2xl md:text-4xl leading-none mt-1 tracking-tight font-bold transition-colors duration-300 ${
                logoColor === "white" ? "text-white" : "text-lorenzo-dark"
              }`}
            >
              Dhanuka-dev
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 md:gap-4 mix-blend-difference"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-lorenzo-dark/80 border border-white/30 hover:bg-lorenzo-dark rounded-lg transition-colors text-white"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-lorenzo-dark/95 backdrop-blur-xl z-40 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-4 md:space-y-6 text-3xl md:text-6xl font-black uppercase text-white">
                {[
                  { label: "HOME", href: "#" },
                  { label: "ABOUT", href: "#about" },
                  { label: "PROJECTS", href: "#projects" },
                  { label: "SKILLS", href: "#skills" },
                  { label: "CONTACT", href: "#contact" },
                ].map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <a
                      href={item.href}
                      className="inline-block hover:text-lorenzo-accent transition-colors duration-300 hover:scale-110 transform"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-8 md:mt-12 flex justify-center gap-4 md:gap-6"
              >
                {["GITHUB", "LINKEDIN", "TWITTER"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#c8f550" }}
                    href="#"
                    className="text-xs md:text-sm font-bold text-white/60 hover:text-lorenzo-accent transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
