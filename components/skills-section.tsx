"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Zap, Shield, Smartphone, Code2 } from "lucide-react"
import React, { useState, MouseEvent } from "react"

const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Language" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Backend" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", category: "Design" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "DevOps" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF", category: "Animation" },
]

export default function UltraSkills() {
  return (
    <section className="relative py-24 bg-background overflow-hidden text-foreground">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,181,246,0.1),transparent_50%)]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-chart-2/20 rounded-full opacity-30" />
      <div className="absolute top-1/2 right-20 w-16 h-16 border border-chart-3/20 rounded-full opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full border border-border bg-card text-xs font-medium tracking-widest uppercase text-accent"
          >
            Stack & Technologies
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-oswald)] font-black tracking-tighter italic uppercase">
            Tech <span className="[-webkit-text-stroke:1px_rgba(100,181,246,0.3)] text-transparent">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2">
            <SkillCard 
              title="Frontend Mastery" 
              desc="Building performant, SEO-friendly, and highly interactive user interfaces."
              icon={<Globe className="w-8 h-8 text-accent" />}
              tags={["React", "Next.js 14", "Three.js"]}
              className="h-full bg-gradient-to-br from-accent/20 to-transparent border-accent/20"
            />
          </div>

          {/* Medium Cards */}
          <div className="md:col-span-2">
            <SkillCard 
              title="Backend Architecture" 
              desc="Scalable microservices and secure database schemas."
              icon={<Cpu className="w-8 h-8 text-chart-2" />}
              tags={["Node.js", "PostgreSQL", "Redis"]}
              className="bg-gradient-to-br from-chart-2/10 to-transparent border-chart-2/20"
            />
          </div>

          <div className="md:col-span-2">
            <SkillCard 
              title="Design & DevOps" 
              desc="Modern UI/UX design principles and containerized deployments."
              icon={<Shield className="w-8 h-8 text-chart-3" />}
              tags={["Tailwind", "Docker", "Figma"]}
              className="bg-gradient-to-br from-chart-3/10 to-transparent border-chart-3/20"
            />
          </div>

          {/* Small Brand Icon Grid */}
          <div className="md:col-span-2 grid grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="aspect-square flex items-center justify-center rounded-2xl bg-card border border-border hover:bg-accent/10 hover:border-accent/30 transition-all cursor-pointer group"
              >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

interface SkillCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tags: string[];
  className?: string;
}

function SkillCard({ title, desc, icon, tags, className = "" }: SkillCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-[2rem] border border-border p-8 transition-all hover:shadow-2xl hover:shadow-accent/10 ${className}`}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(100,181,246,0.06), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="mb-4">{icon}</div>
          <h3 className="text-3xl font-[family-name:var(--font-oswald)] font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-[280px] font-[family-name:var(--font-roboto)]">{desc}</p>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-border bg-card text-muted-foreground font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}