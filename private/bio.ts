export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Skills {
  software: string[];
  hardware: string[];
  other: string[];
}

export interface BioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  url: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  languages: string[];
  availability: string;
  labels: {
    profile: string;
    otherData: string;
    languages: string;
    drivingLicense: string;
    availability: string;
    experience: string;
    skills: string;
    software: string;
    hardware: string;
    other: string;
    education: string;
    present: string;
    contact: string
  };
}

export const bioDataMultilingual: Record<string, BioData> = {
  ca: {
    name: "Martí Copete Girbau",
    role: "ENGINYERIA ELECTRÒNICA de TELECOMUNICACIÓ",
    location: "08202, Sabadell",
    email: "copetemarti@gmail.com",
    phone: "628 700 908",
    linkedin: "https://www.linkedin.com/in/marti-copete",
    github: "https://github.com/SirCopet",
    url: "https://marticopete.space",
    about: "Estudiant d'enginyeria amb ganes d'aprendre i de buscar noves experiències laborals. Durant la trajectòria laboral i acadèmica destaca la capacitat d'adaptació a nous entorns, el pensament lògic i analític, i una bona resolució davant de nous reptes. Amb ganes de formar part d'un equip i créixer tant com a nivell professional com personal, aportant autonomia en la gestió de tasques, atenció al detall, bona comprensió tècnica i capacitat per donar i rebre feedback constructiu.",
    experience: [
      {
        company: "WORLDLINE",
        role: "Full-Stack Internship",
        duration: "Octubre 2025 - Present",
        description: [
          "Participació en el desenvolupament i manteniment d'entorns web. Utilitzant Angular / TypeScript per al frontend i Spring / Java al backend.",
          "Experiència en la integració i gestió de bases de dades i APIs RESTful, treball en equip mitjançant GitLab seguint bones pràctiques de desenvolupament de programari i metodologia agile."
        ]
      },
      {
        company: "ZeroDay",
        role: "Dependent, transportista i gestió informàtica",
        duration: "2019 - Present",
        description: [
          "Atenció al client i transport de mercaderies en comerç local al Vallès.",
          "Gestió informàtica de productes de roba de forma intermitent durant el transcurs."
        ]
      }
    ],
    education: [
      {
        degree: "Enginyeria Electrònica de Telecomunicació",
        institution: "La Salle Universitat Ramón Llull (Barcelona)",
        duration: "2020 - Present"
      },
      {
        degree: "ESO, Batxillerat",
        institution: "Sant Nicolau (Sabadell)",
        duration: "2013-2017 - 2019"
      }
    ],
    skills: {
      software: ["C", "Java", "Python", "VHDL", "Assembly", "Matlab", "SQL", "Angular", "Spring"],
      hardware: ["Disseny i implementació de circuits", "PCBs", "anàlisi de components electrònics i radiofreqüència"],
      other: ["CCNA (intermediate)", "Swagger", "REST APIs", "Intel·ligència Artificial"]
    },
    languages: [
      "Català i castellà: natiu",
      "Anglès: nivell alt parlat i escrit"
    ],
    availability: "Incorporació al març de 2026 per a treballar en jornada de 4 a 5 hores durant el matí. Possibilitat de conveni amb la universitat (La Salle).",
    labels: {
      profile: "Perfil professional",
      otherData: "Altres Dades",
      languages: "Idiomes",
      drivingLicense: "Permís de conduir",
      availability: "Disponibilitat",
      contact: "Contacte",
      experience: "Experiència",
      skills: "Habilitats Tècniques",
      software: "Software",
      hardware: "Hardware",
      other: "Altres",
      education: "Educació",
      present: "Present"
    }
  },
  en: {
    name: "Martí Copete Girbau",
    role: "ELECTRONIC & COMMUNICATIONS ENGINEERING",
    location: "08202, Sabadell",
    email: "copetemarti@gmail.com",
    phone: "628 700 908",
    linkedin: "https://www.linkedin.com/in/marti-copete",
    github: "https://github.com/SirCopet",
    url: "https://marticopete.space",
    about: "Engineering student eager to learn and seek new work experiences. Throughout my academic and professional journey, I have demonstrated strong adaptability to new environments, logical and analytical thinking, and effective problem-solving skills when facing new challenges. I am motivated to be part of a team and grow both professionally and personally, contributing with autonomy in task management, attention to detail, solid technical understanding, and the ability to give and receive constructive feedback.",
    experience: [
      {
        company: "WORLDLINE",
        role: "Full-Stack Internship",
        duration: "October 2025 - Present",
        description: [
          "Participation in the development and maintenance of web environments. Using Angular / TypeScript for the frontend and Spring / Java on the backend.",
          "Experience in the integration and management of databases and RESTful APIs, teamwork through GitLab following good software development practices and agile methodology."
        ]
      },
      {
        company: "ZeroDay",
        role: "Store clerk, delivery driver and IT management",
        duration: "2019 - Present",
        description: [
          "Customer service and merchandise transportation at a local enterprise around Vallès.",
          "Store clerk, delivery driver and IT management of clothing products on an intermittent basis during this period."
        ]
      }
    ],
    education: [
      {
        degree: "Electronic & Telecommunication Engineering",
        institution: "La Salle – Ramón Llull University (Barcelona)",
        duration: "2020 - Present"
      },
      {
        degree: "Secondary Education & High School Diploma",
        institution: "Sant Nicolau (Sabadell)",
        duration: "2013 - 2017 - 2019"
      }
    ],
    skills: {
      software: ["C", "Java", "Python", "VHDL", "Assembly", "Matlab", "SQL", "Angular", "Spring"],
      hardware: ["Circuit design and implementation", "PCBs", "electronic analysis", "radiofrequency"],
      other: ["CCNA (intermediate)", "Swagger", "REST APIs", "Artificial Intelligence"]
    },
    languages: [
      "Catalan & Spanish: native",
      "English: fluent, written and spoken"
    ],
    availability: "Possibility of a university internship agreement (La Salle). Available to start in March 2026 for a 4 to 5 hour morning shift.",
    labels: {
      profile: "Professional Profile",
      otherData: "Other",
      languages: "Languages",
      drivingLicense: "Driver's license",
      availability: "Availability",
      contact: "Contact",
      experience: "Experience",
      skills: "Technical Abilities",
      software: "Software",
      hardware: "Hardware",
      other: "Other",
      education: "Education",
      present: "Present"
    }
  },
  es: {
    name: "Martí Copete Girbau",
    role: "INGENIERÍA ELECTRÓNICA de TELECOMUNICACIÓN",
    location: "08202, Sabadell",
    email: "copetemarti@gmail.com",
    phone: "628 700 908",
    linkedin: "https://www.linkedin.com/in/marti-copete",
    github: "https://github.com/SirCopet",
    url: "https://marticopete.space",
    about: "Estudiante de ingeniería con ganas de aprender y de buscar nuevas experiencias laborales. A lo largo de la trayectoria académica y laboral, destaca por la capacidad de adaptación a nuevos entornos, pensamiento lógico y analítico, y una buena resolutiva ante nuevos retos. Con ganas de formar parte de un equipo y crecer tanto a nivel profesional como personal, aportando autonomía en la gestión de tareas, atención al detalle, buena comprensión técnica y capacidad para dar y recibir feedback constructivo.",
    experience: [
      {
        company: "WORLDLINE",
        role: "Full-Stack Internship",
        duration: "Octubre 2025 - Presente",
        description: [
          "Participación en el desarrollo y mantenimiento de entornos web. Utilizando Angular / Typescript para frontend y Spring / Java en el backend.",
          "Experiencia en integración y gestión de bases de datos y APIs RESTful, trabajo en equipo mediante GitLab siguiendo buenas prácticas de desarrollo de software y metodología agile."
        ]
      },
      {
        company: "ZeroDay",
        role: "Dependiente, transportista y gestión informática",
        duration: "2019 - 2025",
        description: [
          "Atención al cliente y transporte de bienes en comercio local en el Vallès.",
          "Dependiente, transportista y gestión informática de productos de ropa de forma intermitente durante el transcurso."
        ]
      }
    ],
    education: [
      {
        degree: "Ingeniería Electrónica de Telecomunicación",
        institution: "La Salle – Universitat Ramón Llull (Barcelona)",
        duration: "2020 - Presente"
      },
      {
        degree: "ESO, Bachillerato",
        institution: "Sant Nicolau (Sabadell)",
        duration: "2013 - 2017 - 2019"
      }
    ],
    skills: {
      software: ["C", "Java", "Python", "VHDL", "Assembly", "Matlab", "SQL", "Angular", "Spring"],
      hardware: ["Diseño e implementación de circuitos", "PCBs", "análisis de componentes electrónicos y radiofrecuencia"],
      other: ["CCNA (intermediate)", "Swagger", "REST APIs", "Inteligencia Artificial"]
    },
    languages: [
      "Catalán y castellano: nativo",
      "Inglés: nivel alto hablado y escrito"
    ],
    availability: "Posibilidad de convenio con la universidad (La Salle). Incorporación en marzo de 2026 para trabajar en jornada de 4 o 5 horas por la mañana.",
    labels: {
      profile: "Perfil Profesional",
      otherData: "Otros Datos",
      languages: "Idiomas",
      drivingLicense: "Permiso de conducir",
      availability: "Disponibilidad",
      contact: "Contacto",
      experience: "Experiencia",
      skills: "Habilidades Técnicas",
      software: "Software",
      hardware: "Hardware",
      other: "Otros",
      education: "Educación",
      present: "Presente"
    }
  }
};
