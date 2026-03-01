import { BioHeroAnimated } from "./BioHeroAnimated";

export function BioHero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center border-bold border-sky-500/50 rounded-3xl p-8 md:p-20 bg-surface/30 shadow-glow-blue transition-[border-color,shadow] hover:border-sky-500 duration-500">
        <BioHeroAnimated />
      </div>
    </section>
  );
}
