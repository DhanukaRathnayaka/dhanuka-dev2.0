"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronDown } from "lucide-react"
import InteractivePortrait from "./interactive-portrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Wait for preloader (2s + buffer)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Phase 1: Shrink Portrait (0% -> 40%)
  // Maps scroll 0-0.4 to scale 1-0.45
  const scale = useTransform(smoothProgress, [0, 0.4], [1, isMobile ? 0.6 : 0.45])

  // Phase 2: Text Parallax (0% -> 80%)
  // Text moves slightly to create depth
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])

  // Phase 3: Exit (80% -> 100%)
  // Everything slides up to reveal next section
  const exitY = useTransform(smoothProgress, [0.85, 1], ["0%", "-100%"])
  const exitOpacity = useTransform(smoothProgress, [0.9, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#1a1f1a]" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
        {/* Background Text Layer */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center opacity-0"
            style={{ opacity: textOpacity }}
          >
            <SignatureMarqueeSection />
          </motion.div>
        </motion.div>

        {/* Foreground Portrait Layer */}
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          style={{
            scale: scale,
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          {isReady && <InteractivePortrait />}
        </motion.div>

        {/* Mobile Scroll Down Button */}
        {isMobile && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-black hover:text-black/70 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs uppercase tracking-widest text-black">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.button>
        )}
      </div>
    </section>
  )
}
