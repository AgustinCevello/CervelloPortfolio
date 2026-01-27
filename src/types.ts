export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  techs: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon: string }[];
}