

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
