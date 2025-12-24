"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { supabase } from "@/lib/supabaseClient" // Adjust path as needed

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/DhanukaRathnayaka" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhanuka-rathnayaka/" },
  { icon: Mail, label: "Email", href: "mailto:dhanukarathnayakakck@gmail.com" },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Insert form data into Supabase table
      const { data, error } = await supabase
        .from('contact_messages') // Replace with your actual table name
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) {
        throw error
      }

      console.log('Message saved successfully:', data)
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      })
      
      // Clear the form
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was a problem sending your message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-light text-lorenzo-text-dark py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-balance leading-[1.1]">
            LET'S <span className="text-lorenzo-dark font-brier">CONNECT</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-lorenzo-dark/20 rounded-lg focus:border-lorenzo-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-lorenzo-dark/20 rounded-lg focus:border-lorenzo-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-lorenzo-dark/20 rounded-lg focus:border-lorenzo-dark focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lorenzo-dark text-lorenzo-text-light font-black uppercase tracking-wide py-4 rounded-lg hover:bg-lorenzo-accent hover:text-lorenzo-text-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message Display */}
              {submitStatus.type && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                Get in Touch
              </h3>
              <p className="text-lg leading-relaxed opacity-70">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-lorenzo-dark text-lorenzo-text-light flex items-center justify-center rounded-full hover:bg-lorenzo-accent hover:text-lorenzo-text-dark transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-lorenzo-dark/20 pt-8">
              <p className="text-sm opacity-70">
                <strong className="font-bold uppercase tracking-wide">Email:</strong>
                <br />
                <a
                  href="mailto:dhanukarathnayakakck@gmail.com"
                  className="hover:text-lorenzo-dark transition-colors"
                >
                  dhanukarathnayakakck@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}