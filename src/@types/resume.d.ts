

export interface ResumeTypes {
  contact: ContactTypes;
  skill: SkillTypes;
  experience: ExperienceTypes[];
}

export interface ContactTypes {
  "email": string;
  "phone": string;
  "github": string;
  "blog": string;
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
