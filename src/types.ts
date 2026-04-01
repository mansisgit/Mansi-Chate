export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  metrics: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  platform: string;
  year: string;
  status: 'done' | 'ip';
}
