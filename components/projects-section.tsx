"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    id: "safe-space",
    title: "SafeSpace Ecosystem",
    subtitle: "AI HealthTech",
    description:
      "Award-winning platform connecting patients and doctors with real-time AI-driven sentiment analysis.",
    image: "/projects/safespace.png",
    tech: ["Flutter", "React", "TypeScript", "Python", "FastAPI"],
    demo: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/SafeSpace.mp4",
    github: "https://github.com/DhanukaRathnayaka/Final_Year_Project",
    video: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/SafeSpace%20(1).mp4", // Ensure this file exists for autoplay
  },
  {
    id: "Master Designer v2",
    title: "Master Designer v2",
    subtitle: "web application",
    description:
      "Master Designer v2.0 is an official all-island design competition platform featuring modern UI/UX, interactive visuals, and a fully responsive web experience.",
    image: "/projects/freshmart.png",
    tech: ["HTML 5", "CSS", "Tailwind", "JavaScript", "json"],
    demo: "https://master-designer-v2-0.vercel.app/",
    github: "https://github.com/DhanukaRathnayaka/Master-Designer-v2.0",
    video: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4",
  },
  {
    id: "Kamukoo",
    title: "Kamukoo food delivery web-app",
    subtitle: "E-commerce",
    description:
      "A responsive food delivery web application built with React and Vite, designed for a fast and seamless user experience.",
    image: "/projects/researchx.png",
    tech: ["Node.js", "css", "react", "Vercel"],
    demo: "https://dhanukarathnayaka.github.io/Food-Delivery-App-Using-React-JS/",
    github: "https://github.com/DhanukaRathnayaka/Food-Delivery-App-Using-React-JS",
    video: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4",
  },
  {
    id: "Serandib Games",
    title: "Serandib Games Blog",
    subtitle: "Blog Platform",
    description:
      "A cloud-based gaming blog with a user-friendly interface, Firebase authentication, and a real-time trained chatbot for interactive user engagement.",
    image: "/projects/master-designer.png",
    tech: ["javascript", "css", "HTML 5", "Chatbot","Firbase"],
    demo: "https://serendib-games-blog.vercel.app/",
    github: "https://serendib-games-blog.vercel.app/",
    video: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/Untitled%20video%20-%20Made%20with%20Clipchamp%20(4).mp4",
  },
  {
    id: "GPA Calculator",
    title: "GPA Calculator",
    subtitle: "Mobile App",
    description:
      "A GPA calculator app designed to dynamically calculate GPA based on user-entered subjects and grades with real-time updates.",
    image: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/SafeSpace.png",
    tech: ["Dart", "Flutter",],
    demo: "#",
    github: "https://github.com/DhanukaRathnayaka/Gpa_Calculator",
  },
  {
    id: "Book Store App",
    title: "E-Commerce Book Store",
    subtitle: "E-Commerce",
    description:
      "Scalable architecture with microservices, handling thousands of products with AI recommendations.",
    image: "https://ncmttztvfuwnkyuekrvv.supabase.co/storage/v1/object/public/portfolio/SafeSpace%20(1).png",
    tech: ["Dart", "Flutter",],
    demo: "#",
    github: "#",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showMore, setShowMore] = useState(false)
  const displayedProjects = showMore ? projects : projects.slice(0, 4)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-light text-lorenzo-text-dark py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-balance leading-[1.1]">
            FEATURED <span className="text-lorenzo-dark font-brier">PROJECTS</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-lorenzo-dark/0 group-hover:bg-lorenzo-dark/20 transition-colors duration-300" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{project.title}</h3>
                  <p className="text-sm text-lorenzo-accent uppercase tracking-wide">{project.subtitle}</p>
                </div>

                <p className="text-base mb-6 opacity-70 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-lorenzo-dark text-lorenzo-text-light text-sm font-bold uppercase tracking-wide rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-lorenzo-accent text-lorenzo-text-light font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-lorenzo-dark transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-lorenzo-dark text-lorenzo-text-light font-bold uppercase text-sm tracking-wide rounded-lg hover:bg-lorenzo-accent transition-colors text-center"
                    >
                      View Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="px-8 md:px-12 py-4 bg-lorenzo-dark text-lorenzo-text-light font-black uppercase tracking-widest rounded-lg hover:bg-lorenzo-accent transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {showMore ? "SHOW LESS" : "SHOW MORE"}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
