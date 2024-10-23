export type ArchiveCategory = "Dev" | "Daily" | "JavaScript" | "TypeScript" | "React" | "Vue" | "Bitcoin";

export interface ArchiveData {
  title: string;
  category: ArchiveCategory;
  date: string;
  author: string;
}
