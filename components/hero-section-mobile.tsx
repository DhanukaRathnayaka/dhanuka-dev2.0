"use client"

import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSectionMobile() {

  return (
    <section className="relative min-h-screen bg-[#0a1929] overflow-hidden">
      {/* Decorative Top Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-blue-400/40 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-blue-400/60 rounded-full" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 px-6 py-6 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-8 h-8" />
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <div className="w-5 h-5 rounded-full border border-gray-400" />
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 px-6 py-12 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        {/* Profile Image - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8"
        >
          {/* Decorative Circle 1 */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-blue-400/20 rounded-full" />

          {/* Decorative Circle 2 */}
          <div className="absolute top-20 -right-16 w-40 h-40 border border-blue-500/10 rounded-full" />

          {/* Profile Image Container - Centered */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto bg-white">
            <Image
              src="/images/hero-off.png"
              alt="Dhanuka Rathnayaka"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          {/* Role Accent */}
          <div className="mb-4">
            <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">Full-Stack Developer</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-black text-white leading-tight mb-6">
            Dhanuka
            <br />
            Rathnayaka
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed max-w-md mb-8 mx-auto">
            Through code and creativity, I build digital experiences that solve real problems and inspire users. Every
            project is a canvas for innovation.
          </p>

          {/* Stats */}
          <div className="text-2xl font-bold text-white mb-8">
            50+ <span className="text-gray-400 text-lg font-normal">Projects Completed</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            View Projects
            <ExternalLink size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-colors text-center"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mb-12 justify-center"
        >
          {[
            { Icon: Github, href: "https://github.com/DhanukaRathnayaka" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/dhanuka-rathnayaka/" },
            { Icon: Mail, href: "mailto:dhanukarathnayakakck@gmail.com" },
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all"
            >
              <Icon size={20} className="text-gray-400 hover:text-blue-400" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
          <ArrowDown size={20} className="text-blue-400" />
        </motion.div>
      </div>
    </section>
  )
}