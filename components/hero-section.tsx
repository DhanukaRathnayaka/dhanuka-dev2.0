"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronDown } from "lucide-react"
import InteractivePortrait from "./interactive-portrait"
import SignatureMarqueeSection from "./signature-marquee-section"
import HeroSectionMobile from "./hero-section-mobile"

// Import the original hero section logic for desktop
function HeroSectionDesktop() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  // Wait for preloader (2s + buffer)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1800)
    return () => clearTimeout(timer)
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

  // Desktop-specific animations
  // Phase 1: Shrink Portrait (0% -> 40%)
  const scale = useTransform(smoothProgress, [0, 0.4], [1, 0.45])

  // Phase 2: Text Parallax (0% -> 80%)
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])

  // Phase 3: Exit (80% -> 100%)
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
      </div>
    </section>
  )
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Render appropriate version based on screen size
  if (isMobile) {
    return <HeroSectionMobile />
  }

  return <HeroSectionDesktop />
}
