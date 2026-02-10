import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";

export default function Page() {
  return (
    <main>
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CTASection />
      <Footer />
    </main>
  );
}
