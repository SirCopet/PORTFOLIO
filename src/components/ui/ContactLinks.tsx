"use client";

import { Linkedin, Mail, Github } from "lucide-react";
import { bioData } from "@/data/bio";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  className?: string;
}

export function ContactLinks({ className }: ContactLinksProps) {
  const links = [
    { 
      icon: Linkedin, 
      href: bioData.linkedin, 
      label: "LinkedIn", 
    },
    { 
      icon: Github, 
      href: bioData.github, 
      label: "GitHub", 
    },
    { 
      icon: Mail, 
      href: `mailto:${bioData.email}`, 
      label: "Email", 
    },
  ];

  return (
    <div className={cn("flex space-x-6", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-white/40 transition-all duration-300 p-3 hover:text-primary-500"
        >
          <link.icon size={26} />
        </a>
      ))}
    </div>
  );
}
