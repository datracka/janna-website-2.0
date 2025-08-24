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
      privacy: "Privacy Policy",
      imprint: "Legal Notice",
      copyright: "© 2025 Janna Ziesemer. All rights reserved.",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
