"use client";

import { FileDown } from "lucide-react";
import { bioData } from "@/data/bio";

export function DownloadButton() {
  return (
    <a
      href={bioData.cvUrl}
      download={bioData.cvFilename}
      className="inline-flex items-center space-x-3 px-6 py-3 border border-solder-gold text-solder-gold font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:bg-solder-gold hover:text-black hover:shadow-glow-gold active:scale-95"
    >
      <FileDown size={18} />
      <span>Download CV</span>
    </a>
  );
}
