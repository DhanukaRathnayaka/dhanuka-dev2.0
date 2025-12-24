"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a1e28] text-lorenzo-text-light py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4">
            Man Behind the Code
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image with Labels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-700">
                <img src="/professional-developer-portrait-black-and-white-fo.jpg" alt="Profile" className="w-full h-full object-cover grayscale" />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-white">Software Engineer</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium text-white">B.Sc. (Hons) Student</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Hey, I'm <span className="text-blue-500">Dhanuka Rathnayaka</span>
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Final-year B.Sc. (Hons) Software Engineering undergraduate with a strong passion for creating
                  intuitive, impactful, and user-centric digital experiences. I specialize in Full-Stack Development,
                  Mobile Application Development, and AI-powered Chatbots, with hands-on experience using modern web and
                  mobile technologies.
                </p>
                <p>
                  My approach combines clean, scalable engineering with practical problem-solving, enabling me to build
                  solutions ranging from dynamic frontend interfaces and cross-platform mobile applications to secure
                  backend systems and intelligent conversational agents. I enjoy transforming complex requirements into
                  elegant, real-world applications.
                </p>
              </div>
            </div>

            {/* What I Do Section */}
            <div>
              <h4 className="text-2xl font-bold mb-6">What I Do</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full-Stack Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💻</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Full-Stack</h5>
                      <p className="text-sm text-gray-400">React, Next.js, Node.js</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Apps Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Mobile Apps</h5>
                      <p className="text-sm text-gray-400">Cross-platform Development</p>
                    </div>
                  </div>
                </div>

                {/* AI Chatbots Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🤖</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">AI Chatbots</h5>
                      <p className="text-sm text-gray-400">Conversational Agents</p>
                    </div>
                  </div>
                </div>

                {/* Backend Systems Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚙️</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Backend Systems</h5>
                      <p className="text-sm text-gray-400">APIs, Databases, Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
