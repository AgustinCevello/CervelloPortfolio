export const TRANSLATIONS = {
  ES: {
    nav: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      testimonios: 'Testimonios',
      sobremi: 'Sobre mí',
      contacto: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full-Stack & Especialista en Integración IA.',
      description: 'Transformo ideas en experiencias digitales potenciadas por inteligencia artificial, integrando arquitecturas escalables, sistemas en tiempo real y tecnologías web modernas.',
      cvBtn: 'Descargar CV',
      projectsBtn: 'Ver Proyectos'
    },
    about: {
      title: 'Sobre Mí',
      p1: 'Me especializo en arquitecturas <span class="text-lila-600 dark:text-lila-400 font-semibold">Full-Stack con integración de IA</span>, creando desde sistemas de gestión en tiempo real hasta experiencias web dinámicas de alto rendimiento.',
      p2: 'Avanzo en la <span class="text-lila-600 dark:text-lila-400 font-semibold">Licenciatura en Gestión TI</span> y Tecnicatura en Desarrollo de Software en UADE, con una visión enfocada en la innovación técnica y el impacto estratégico en el negocio.',
      p3: 'Mi enfoque combina el uso de tecnologías modernas (React 19, TypeScript, Node) con soluciones inteligentes (LLMs, automatizaciones) para construir productos escalables y eficientes.',
      location: 'Base en Buenos Aires, Argentina. Disponible para desafíos híbridos o remotos.',
      eduTitle: 'Educación',
      edu1: 'Lic. en Gestión de TI',
      edu1Sub: 'UADE (En curso)',
      edu2: 'Tec. Univ. en Desarrollo de Software',
      edu2Sub: 'UADE (2023 - 2025)',
      edu3: 'Técnico Electrónico',
      edu3Sub: 'Escuela República Francesa',
      langTitle: 'Idiomas',
      lang1: 'Español',
      lang1Lvl: 'Nativo',
      lang2: 'Inglés',
      lang2Lvl: 'Intermedio (B2 - Cambridge)',
      lang3: 'Chino',
      lang3Lvl: 'Inicial'
    },
    experience: {
      title: 'Trayectoria Profesional',
      items: [
        {
          role: 'Desarrollador Full-Stack & Arquitecto de Software',
          company: 'Freelance',
          period: 'Marzo 2025 - Actualidad',
          desc: [
            'Arquitectura y desarrollo de "Automacer": Sistema ERP con sincronización bidireccional en tiempo real, WebSockets y facturación electrónica.',
            'Implementación de soluciones web modernas (React, TypeScript, Node) enfocadas en rendimiento, SEO y escalabilidad cloud.',
            'Exploración e integración de herramientas impulsadas por IA para la optimización de procesos de venta y flujos de trabajo automatizados.'
          ]
        },
        {
          role: 'Desarrollador Mobile & Frontend',
          company: 'UADE',
          period: 'Marzo 2025 - Junio 2025',
          desc: [
            'Diseño y desarrollo de aplicaciones móviles y PWA aplicando patrones arquitectónicos modernos y testing automatizado.',
            'Participación en investigación y adopción de nuevas tecnologías aplicadas al desarrollo de interfaces fluidas (CI/CD, optimización).'
          ]
        },
        {
          role: 'Desarrollador Web Freelance',
          company: 'Independiente / Varios',
          period: '2017 - 2023',
          desc: [
            'Desarrollo integral de sitios institucionales y plataformas corporativas (VR3D Ingeniería, Renuevo de Vida).',
            'Implementación de arquitecturas serverless, optimización de Core Web Vitals y diseño centrado en el usuario (UX/UI).'
          ]
        }
      ]
    },
    projects: {
      title: 'Proyectos Destacados',
      visit: 'Visitar sitio',
      items: [
        {
          title: 'Automacer',
          description: 'Solución integral de gestión (ERP) para automatización de ventas y control de stock en tiempo real.',
          techs: ['React', 'Node.js', 'SQL'],
          url: 'https://automacer.netlify.app/'
        },
        {
          title: 'VR3D Ingeniería',
          description: 'Plataforma corporativa para estudio de ingeniería solar con portafolio de obras.',
          techs: ['React', 'TypeScript', 'Tailwind'],
          url: 'https://vr3d.com.ar/'
        },
        {
          title: 'Renuevo de Vida',
          description: 'Web institucional enfocada en comunidad, con diseño accesible y optimización de carga.',
          techs: ['React', 'JavaScript', 'CSS3'],
          url: 'https://www.renuevodevida.com.ar/'
        },
        {
          title: 'Sembrar la Palabra',
          description: 'Plataforma educativa de recursos bíblicos con experiencia de lectura optimizada.',
          techs: ['React', 'Framer Motion', 'UI/UX'],
          url: 'https://sembrarlapalabra.com.ar/'
        }
      ]
    },
    skills: {
      title: 'Stack Tecnológico',
      description: 'Dominio de herramientas para desarrollo moderno, arquitecturas cloud e integración de inteligencia artificial.'
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen quienes trabajaron conmigo.',
      items: [
        { 
          name: 'Roberto Gómez', 
          role: 'Director en VR3D Ingeniería', 
          quote: 'La capacidad de Agustín para entender requerimientos técnicos complejos y transformarlos en una interfaz intuitiva es excepcional.' 
        },
        { 
          name: 'Elena Rodríguez', 
          role: 'Coordinadora de Proyectos TI', 
          quote: 'Un desarrollador comprometido que no solo entrega código de calidad, sino que también aporta una visión estratégica al negocio.' 
        }
      ]
    },
    contact: {
      title: 'Contacto',
      description: '¿Buscas un desarrollador que entienda tanto el código como el negocio? Hablemos.',
      labels: { email: 'Enviar Email', chat: 'Chat', connect: 'LinkedIn', repos: 'GitHub' }
    },
    footer: {
      builtWith: 'Diseñado y construido con React + Tailwind CSS.',
      tagline: '"Construyendo soluciones inteligentes y escalables con tecnologías web modernas"'
    }
  },
  EN: {
    nav: {
      inicio: 'Home',
      experiencia: 'Experience',
      proyectos: 'Projects',
      habilidades: 'Skills',
      testimonios: 'Testimonials',
      sobremi: 'About',
      contacto: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full-Stack Developer & AI Integration Specialist.',
      description: 'I transform ideas into AI-powered digital experiences, integrating scalable architectures, real-time systems, and modern web technologies.',
      cvBtn: 'Download CV',
      projectsBtn: 'View Projects'
    },
    about: {
      title: 'About Me',
      p1: 'I specialize in <span class="text-lila-600 dark:text-lila-400 font-semibold">Full-Stack architectures with AI integration</span>, building everything from real-time management systems to high-performance dynamic web experiences.',
      p2: 'I am pursuing a <span class="text-lila-600 dark:text-lila-400 font-semibold">B.S. in IT Management</span> and an Associate Degree in Software Development at UADE, focusing on technical innovation and strategic business impact.',
      p3: 'My approach combines modern technologies (React 19, TypeScript, Node) with intelligent solutions (LLMs, automation) to build scalable and efficient products.',
      location: 'Based in Buenos Aires, Argentina. Available for hybrid or remote challenges.',
      eduTitle: 'Education',
      edu1: 'B.S. in IT Management',
      edu1Sub: 'UADE (In progress)',
      edu2: 'Associate Degree in Software Dev',
      edu2Sub: 'UADE (2023 - 2025)',
      edu3: 'Electronic Technician',
      edu3Sub: 'Republica Francesa Technical HS',
      langTitle: 'Languages',
      lang1: 'Spanish',
      lang1Lvl: 'Native',
      lang2: 'English',
      lang2Lvl: 'Intermediate (B2)',
      lang3: 'Chinese',
      lang3Lvl: 'Beginner'
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          role: 'Full-Stack Developer & Software Architect',
          company: 'Freelance',
          period: 'March 2025 - Present',
          desc: [
            'Architecture and development of "Automacer": ERP system with real-time bidirectional synchronization, WebSockets, and e-invoicing.',
            'Implementation of modern web solutions (React, TypeScript, Node) focused on performance, SEO, and cloud scalability.',
            'Exploration and integration of AI-driven tools for sales process optimization and automated workflows.'
          ]
        },
        {
          role: 'Mobile & Frontend Developer',
          company: 'UADE',
          period: 'March 2025 - June 2025',
          desc: [
            'Design and development of mobile apps and PWAs applying modern architectural patterns and automated testing.',
            'Participation in research and adoption of emerging technologies applied to fluid interface development (CI/CD, optimization).'
          ]
        },
        {
          role: 'Freelance Web Developer',
          company: 'Independent / Various',
          period: '2017 - 2023',
          desc: [
            'End-to-end development of institutional sites and corporate platforms (VR3D Engineering, Renuevo de Vida).',
            'Implementation of serverless architectures, Core Web Vitals optimization, and user-centered design (UX/UI).'
          ]
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      visit: 'Visit site',
      items: [
        {
          title: 'Automacer',
          description: 'Comprehensive ERP solution for sales automation and real-time stock control.',
          techs: ['React', 'Node.js', 'SQL'],
          url: 'https://automacer.netlify.app/'
        },
        {
          title: 'VR3D Engineering',
          description: 'Corporate platform for solar engineering studio with project portfolio.',
          techs: ['React', 'TypeScript', 'Tailwind'],
          url: 'https://vr3d.com.ar/'
        },
        {
          title: 'Renuevo de Vida',
          description: 'Institutional web focused on community, with accessible design and load optimization.',
          techs: ['React', 'JavaScript', 'CSS3'],
          url: 'https://www.renuevodevida.com.ar/'
        },
        {
          title: 'Sembrar la Palabra',
          description: 'Educational platform for biblical resources with optimized reading experience.',
          techs: ['React', 'Framer Motion', 'UI/UX'],
          url: 'https://sembrarlapalabra.com.ar/'
        }
      ]
    },
    skills: {
      title: 'Tech Stack',
      description: 'Mastery of tools for modern development, cloud architectures, and artificial intelligence integration.'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What people I worked with say.',
      items: [
        { 
          name: 'Roberto Gómez', 
          role: 'Director at VR3D Engineering', 
          quote: 'Agustín\'s ability to understand complex technical requirements and transform them into an intuitive interface is exceptional.' 
        },
        { 
          name: 'Elena Rodríguez', 
          role: 'IT Project Coordinator', 
          quote: 'A committed developer who not only delivers quality code but also provides a strategic vision to the business.' 
        }
      ]
    },
    contact: {
      title: 'Contact',
      description: 'Looking for a developer who understands both code and business? Let\'s talk.',
      labels: { email: 'Send Email', chat: 'Chat', connect: 'LinkedIn', repos: 'GitHub' }
    },
    footer: {
      builtWith: 'Designed and built with React + Tailwind CSS.',
      tagline: '"Building intelligent, scalable solutions with modern web technologies"'
    }
  }
};

export const SKILLS_DATA = [
  {
    name: "Frontend & Mobile",
    skills: [
      { name: "React 19 / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS / UI", level: 90 },
      { name: "React Native", level: 75 },
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "WebSockets / SSE", level: 80 },
      { name: "Vercel / AWS", level: 75 },
    ]
  },
  {
    name: "AI & Modern Tooling",
    skills: [
      { name: "LLM / OpenAI API", level: 75 },
      { name: "Git / CI/CD", level: 85 },
      { name: "Vite / Jest", level: 80 },
      { name: "Figma (UX/UI)", level: 80 }
    ]
  }
];