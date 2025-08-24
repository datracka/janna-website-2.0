export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      services: "Servicios",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      title: "Alemán como Lengua Extranjera",
      subtitle: "con Janna Ziesemer",
      tagline: "Aprende alemán con confianza y facilidad",
      cta: "Reserva una clase de prueba gratuita",
    },
    about: {
      title: "Sobre mí",
      description:
        "Profesora especializada en enseñanza de alemán e inglés como lengua extranjera para empresas y estudiantes.",
      qualifications: {
        experience: "Experiencia en enseñanza de alemán e inglés como lengua extranjera",
        certifications: "Certificaciones reconocidas internacionalmente",
        specialization: "Especialización en clientes corporativos y estudiantes individuales",
        examPrep: "Preparación para exámenes oficiales (Goethe, TestDaF, Telc)",
        title: "Certificaciones y Experiencia",
        cert1Title: "Certificación en Enseñanza de Alemán",
        cert1Desc: "Instituto de Formación Docente",
        cert2Title: "Experiencia Corporativa",
        cert2Desc: "Empresas multinacionales y startups",
        cert3Title: "Preparación de Exámenes",
        cert3Desc: "Goethe, TestDaF, Telc, DSH"
      }
    },
    services: {
      title: "Servicios",
      private: "Clases particulares (online/presencial)",
      corporate: "Clientes corporativos",
      exam: "Preparación de exámenes (Goethe, TestDaF, Telc, etc.)",
      business: "Alemán para negocios",
      pricing: "Consulta precios por contacto",
    },
    testimonials: {
      title: "Testimonios",
    },
    contact: {
      title: "Contacto",
      email: "Correo electrónico",
      phone: "Teléfono",
      social: "Redes sociales",
    },
    footer: {
      language: "Idioma",
      privacy: "Política de Privacidad",
      imprint: "Aviso Legal",
      copyright: "© 2025 Janna Ziesemer. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      title: "German as a Foreign Language",
      subtitle: "with Janna Ziesemer",
      tagline: "Learn German with confidence and ease",
      cta: "Book a free trial lesson",
    },
    about: {
      title: "About",
      description:
        "Teacher specialized in teaching German and English as a foreign language for companies and students.",
      qualifications: {
        experience: "Experience in teaching German and English as foreign languages",
        certifications: "Internationally recognized certifications",
        specialization: "Specialization in corporate clients and individual students",
        examPrep: "Official exam preparation (Goethe, TestDaF, Telc)",
        title: "Certifications and Experience",
        cert1Title: "German Teaching Certification",
        cert1Desc: "Teacher Training Institute",
        cert2Title: "Corporate Experience",
        cert2Desc: "Multinational companies and startups",
        cert3Title: "Exam Preparation",
        cert3Desc: "Goethe, TestDaF, Telc, DSH"
      }
    },
    services: {
      title: "Services",
      private: "Private lessons (online/offline)",
      corporate: "Corporate clients",
      exam: "Exam preparation (Goethe, TestDaF, Telc, etc.)",
      business: "Business German",
      pricing: "Request pricing details on contact",
    },
    testimonials: {
      title: "Testimonials",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      social: "Social Media",
    },
    footer: {
      language: "Language",
      privacy: "Privacy Policy",
      imprint: "Legal Notice",
      copyright: "© 2025 Janna Ziesemer. All rights reserved.",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      services: "Leistungen",
      testimonials: "Referenzen",
      contact: "Kontakt",
    },
    hero: {
      title: "Deutsch als Fremdsprache",
      subtitle: "mit Janna Ziesemer",
      tagline: "Deutsch lernen mit Vertrauen und Leichtigkeit",
      cta: "Kostenlosen Probeunterricht buchen",
    },
    about: {
      title: "Über mich",
      description:
        "Lehrerin spezialisiert auf Deutsch und Englisch als Fremdsprache für Unternehmen und Studenten.",
      qualifications: {
        experience: "Erfahrung im Unterrichten von Deutsch und Englisch als Fremdsprachen",
        certifications: "International anerkannte Zertifizierungen",
        specialization: "Spezialisierung auf Firmenkunden und Einzelstudenten",
        examPrep: "Offizielle Prüfungsvorbereitung (Goethe, TestDaF, Telc)",
        title: "Zertifizierungen und Erfahrung",
        cert1Title: "Zertifizierung für Deutschunterricht",
        cert1Desc: "Lehrerfortbildungsinstitut",
        cert2Title: "Unternehmenserfahrung",
        cert2Desc: "Multinationale Unternehmen und Startups",
        cert3Title: "Prüfungsvorbereitung",
        cert3Desc: "Goethe, TestDaF, Telc, DSH"
      }
    },
    services: {
      title: "Leistungen",
      private: "Privatunterricht (online/vor Ort)",
      corporate: "Firmenkunden",
      exam: "Prüfungsvorbereitung (Goethe, TestDaF, Telc, etc.)",
      business: "Wirtschaftsdeutsch",
      pricing: "Preise auf Anfrage",
    },
    testimonials: {
      title: "Referenzen",
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      phone: "Telefon",
      social: "Soziale Medien",
    },
    footer: {
      language: "Sprache",
      privacy: "Datenschutzerklärung",
      imprint: "Impressum",
      copyright: "© 2025 Janna Ziesemer. Alle Rechte vorbehalten.",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
