import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import SkillsSection from "@/components/Skills";
import WorkflowSection from "@/components/Workflow";
import ProjectsSection from "@/components/Projects";
import EducationCertificationsSection from "@/components/EducationCerts";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col selection:bg-[var(--color-brand-accent-1)]/30">
      <Navbar />
      <main className="flex-1 w-full relative z-10 flex flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkflowSection />
        <ProjectsSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
