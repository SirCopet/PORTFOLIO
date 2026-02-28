import { BioHero } from "@/components/features/BioHero";
import { ProjectGallery } from "@/components/features/ProjectGallery";
import { ContactSection } from "@/components/features/ContactSection";
import { ScrollSpyManager } from "@/components/features/ScrollSpyManager";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollSpyManager />
      <BioHero />
      <ProjectGallery />
      <ContactSection />
    </main>
  );
}
