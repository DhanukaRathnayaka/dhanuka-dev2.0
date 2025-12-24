"use client"

import { motion } from "framer-motion"

export default function CodeDivider() {
  const codeLines = [
    "function buildAmazingThings() {",
    "  const passion = ['design', 'code', 'innovation'];",
    "  return passion.map(skill => skill.toUpperCase());",
    "}",
  ]

  return (
    <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-gradient-to-r from-[#0a1929] via-[#1565c0]/20 to-[#0a1929] flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(100, 181, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(100, 181, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Code snippet */}
      <div className="relative z-10 px-4 md:px-8 max-w-4xl w-full">
        <div className="font-mono text-xs md:text-sm lg:text-base">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-primary/80 mb-1 md:mb-2"
            >
              <span className="text-primary mr-2">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-blue-300">{line}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated accent lines */}
      <motion.div
        className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
