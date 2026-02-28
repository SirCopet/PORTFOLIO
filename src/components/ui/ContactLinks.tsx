"use client";

import { Linkedin, Mail, Github } from "lucide-react";
import { bioData } from "@/data/bio";

export function ContactLinks() {
  const links = [
    { 
      icon: Linkedin, 
      href: bioData.linkedin, 
      label: "LinkedIn", 
      glow: "hover:text-pcb-green hover:shadow-glow-green" 
    },
    { 
      icon: Github, 
      href: bioData.github, 
      label: "GitHub", 
      glow: "hover:text-white hover:shadow-[0_0_15px_white]" 
    },
    { 
      icon: Mail, 
      href: `mailto:${bioData.email}`, 
      label: "Email", 
      glow: "hover:text-solder-gold hover:shadow-glow-gold" 
    },
  ];

  return (
    <div className="flex space-x-6">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`text-white/40 transition-all duration-300 p-2 rounded-full border border-transparent hover:border-current/20 ${link.glow}`}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
}
