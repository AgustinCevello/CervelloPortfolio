// src/data/projects.ts
import type { ProjectsTranslation } from '../types';

export const projectsData: ProjectsTranslation = {
  title: "Mis Proyectos", // O el título que prefieras
  visit: "Visitar sitio",
  items: [
    {
      title: 'Renuevo de Vida',
      description: 'Espacio de comunidad y recursos cristianos enfocado en el crecimiento espiritual.',
      techs: ['React', 'Tailwind', 'Framer Motion'], // Ajusta las tecs según corresponda
      url: 'https://www.renuevodevida.com.ar/'
    },
    {
      title: 'VR3D Ingeniería',
      description: 'Estudio de ingeniería enfocado en construcción sustentable y energía solar.',
      techs: ['React', 'TypeScript', 'Vite'],
      url: 'https://vr3d.com.ar/'
    },
    {
      title: 'Julieta Vai',
      description: 'Portfolio personal profesional mostrando identidad y proyectos de desarrollo.',
      techs: ['React', 'Framer Motion', 'Tailwind'],
      url: 'https://julivai.netlify.app/'
    },
    {
      title: 'Sembrar La Palabra',
      description: 'Plataforma dedicada a la difusión de recursos y estudios bíblicos.',
      techs: ['React', 'Node', 'PostgreSQL'],
      url: 'https://sembrarlapalabra.netlify.app/'
    }
  ]
};