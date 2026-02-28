import { bioData } from "@/data/bio";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { BioHeroAnimated } from "./BioHeroAnimated";

export function BioHero() {
  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center px-6 py-20 bg-black border-b border-white/5">
      <div className="max-w-4xl mx-auto w-full border border-pcb-green/20 rounded-sm p-8 md:p-12 bg-surface/30 shadow-glow-green/5">
        <BioHeroAnimated 
          bioData={bioData}
          actions={
            <div className="pt-10 flex flex-col md:flex-row md:items-center gap-10">
              <DownloadButton />
              <div className="h-px w-12 bg-white/10 hidden md:block" />
              <ContactLinks />
            </div>
          }
        />
      </div>
    </section>
  );
}
