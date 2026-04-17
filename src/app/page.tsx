import { BioHero } from "@/components/features/BioHero";
import { ProjectGallery } from "@/components/features/ProjectGallery";
import { ScrollSpyManager } from "@/components/features/ScrollSpyManager";
import { RadioBackground } from "@/components/features/RadioBackground";

const new_year = new Date().getFullYear();

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black" style={{ zIndex: 1 }}>
      <RadioBackground />
      <ScrollSpyManager />
      <BioHero />
      <ProjectGallery />
      
      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 relative z-[1]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/20 font-mono text-xs uppercase tracking-[0.3em]">
            &copy; {new_year} MARTÍ COPETE
          </p>
        </div>
      </footer>
    </main>
  );
}
