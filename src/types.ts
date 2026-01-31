export interface Project {
  title: string;
  description: string;
  techs: string[];
  url: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

// Tipos para las traducciones
export interface SkillsTranslation {
  title: string;
  description: string;
}

export interface ProjectsTranslation {
  title: string;
  visit: string;
  items: Project[];
}

export interface HeroTranslation {
  greeting: string;
  role: string;
  description: string;
  cvBtn: string;
  projectsBtn: string;
}

export interface ExperienceTranslation {
  title: string;
  items: ExperienceItem[];
}

export interface AboutTranslation {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  location: string;
  eduTitle: string;
  edu1: string;
  edu1Sub: string;
  edu2: string;
  edu2Sub: string;
  edu3: string;
  edu3Sub: string;
  langTitle: string;
  lang1: string;
  lang1Lvl: string;
  lang2: string;
  lang2Lvl: string;
  lang3: string;
  lang3Lvl: string;
}

export interface ContactTranslation {
  title: string;
  description: string;
  labels: {
    email: string;
    chat: string;
    connect: string;
    repos: string;
  };
}