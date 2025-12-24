import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CodeDivider from "@/components/code-divider"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <AboutSection />
        <CodeDivider />
        <ProjectsSection />
        <CodeDivider />
        <SkillsSection />
        <CodeDivider />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
