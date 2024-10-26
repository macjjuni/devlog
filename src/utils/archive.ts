import fs from "fs";
import path from "path";
import { readdir } from "fs/promises";
import { archivePath } from "@/config/archive";
import { mdxSerializer } from "@/lib/mdx";
import { ArchiveData } from "@/@types/archive";
import date from "@/lib/date";

// region [Utility Functions]

function getArchiveFileSource(_path: string) {
  const filePath = path.join(process.cwd(), `${archivePath}/${_path}`, "index.mdx");
  return fs.readFileSync(filePath, "utf8");
}

async function generateArchiveDataList(pathList: string[]): Promise<ArchiveData[]> {
  const archives = await Promise.all(
    pathList.map(async (pathString) => {
      const source = getArchiveFileSource(pathString);
      const { frontmatter } = (await mdxSerializer(source)) as unknown as { frontmatter: ArchiveData };

      return { ...frontmatter, url: `${pathString.split("/")[1]}` };
    }),
  );
  // 최신 작성 날짜 기준으로 정렬
  return archives.sort((a, b) => date.getTimeStamp(b.date).valueOf() - date.getTimeStamp(a.date.valueOf()));
}

// endregion

// 아카이브 카테고리 조회
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

// 모든 아카이브 경로 조회
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

// 아카이브 상세 조회
export async function getArchivePath(id: string) {
  const allArchivePath = await getAllArchivePath();
  const archiveAllPath = allArchivePath.find((pathStr) => pathStr.endsWith(id));

  if (archiveAllPath) {
    return getArchiveFileSource(archiveAllPath);
  }

  return null;
}

// 모든 아카이브 데이터 목록 조회
export async function getAllArchiveList() {
  const allPath = await getAllArchivePath();

  return generateArchiveDataList(allPath);
}

// 특정 카테고리 아카이브 조회
export async function getCategoryArchive(categoryName: string) {
  try {
    const entries = await readdir(`${archivePath}/${categoryName}`, { withFileTypes: true });

    // 디렉토리 항목만 필터링하여 이름 배열로 반환
    const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => `${categoryName}/${entry.name}`);

    return await generateArchiveDataList(directories);
  } catch (error) {
    console.error("Failed to read directory");
    return null;
  }
}

export async function getSearchArchive(keyword: string) {
  const allArchivePath = await getAllArchivePath();
  const archiveDataList = await generateArchiveDataList(allArchivePath);

  return archiveDataList.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));
}
