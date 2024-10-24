export type ArchiveCategory = "Dev" | "Daily" | "JavaScript" | "TypeScript" | "React" | "Vue" | "Bitcoin";

export interface ArchiveData {
  title: string;
  category: ArchiveCategory;
  tag: string[];
  date: string;
  author: string;
}
