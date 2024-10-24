import fs from "fs";
import path from "path";
import { readdir } from "fs/promises";
import { archivePath } from "@/config/archive";

// 카테고리 목록 조회
export async function getCategoryList() {
  const entries = await readdir(archivePath, { withFileTypes: true });

  // 1 Depth 하위 디렉토리 필터링
  const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(archivePath, entry.name));

  const sanitizedDirectories = directories.map((item) => {
    const slicedItem = item.split("/");
    return slicedItem[slicedItem.length - 1];
  });

  return sanitizedDirectories;
}

// 모든 게시글 경로 조회
export async function getAllArchivePath(): Promise<string[]> {
  const categories = await getCategoryList();

  return categories.reduce<string[]>((acc, category) => {
    const dirPath = path.join(process.cwd(), `${archivePath}/${category}`);

    const files = fs.readdirSync(dirPath).map(
      (file) => path.join(category, file), // 카테고리와 파일명만 포함
    );

    return acc.concat(files);
  }, []);
}

// 특정 게시글 경로 조회
export async function getArchivePath(id: string) {
  const allArchivePath = await getAllArchivePath();

  const archiveAllPath = allArchivePath.find((pathStr) => pathStr.endsWith(id));

  if (archiveAllPath) { return archiveAllPath; }

  return null;
}


export function getArchiveFileSource(_path: string) {
  const filePath = path.join(process.cwd(), `${archivePath}/${_path}`, "markdown.mdx");
  return fs.readFileSync(filePath, "utf8");
}
