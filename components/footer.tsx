"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm hover:text-blue-400 transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-400 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Copyright ©2025. Designed by <span className="text-blue-400">Dhanuka Rathnayaka</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
