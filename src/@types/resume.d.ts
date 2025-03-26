

export interface ResumeTypes {
  name: string;
  email: string;
  github: string;
  blog: string;
  skill: SkillTypes;
  experience: ExperienceTypes[];
}

export interface SkillTypes {
  "frontend": string[];
  "styling": string[];
  "testing": string[];
  "cooperation": string[];
}

export interface ExperienceTypes {
  companyTitle: string;
  position: string;
  date: string;
  projects: ProjectTypes[]
}

interface ProjectTypes {
  title: string;
  date: string;
  role: string;
  result: string;
  techStack?: string[];
}
