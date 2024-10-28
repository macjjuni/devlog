import fs from "fs";
import path from "path";
import { archivePath } from "@/config/archive";
import { mdxSerializer } from "@/lib/mdx";
import { ArchiveData } from "@/@types/archive";
import date from "@/lib/date";
import config from "@/config/config";

// region [Utility Functions]

function getMdxFileSource(_path: string) {
  const filePath = path.join(process.cwd(), `${archivePath}/${_path}`, "index.mdx");
  return fs.readFileSync(filePath, "utf8");
}

// 최신 날짜 기준으로 아카이브 데이터 정렬
function sortByLatestDate(archives: ArchiveData[]): ArchiveData[] {
  return archives.sort((a, b) => date.getTimeStamp(b.date).valueOf() - date.getTimeStamp(a.date).valueOf());
}

// 문자열 배열을 내림차순 정렬합니다.
function sortByDescendingLocale(arr: string[]): string[] {
  return arr.sort((a, b) => b.localeCompare(a));
}

// 페이지네이션 처리
function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return items.slice(startIndex, endIndex);
}

export async function getArchiveDataList(pathList: string[]): Promise<ArchiveData[]> {
  const archives = await Promise.all(
    pathList.map(async (pathString) => {
      const source = getMdxFileSource(pathString);
      const { frontmatter } = (await mdxSerializer(source)) as unknown as { frontmatter: ArchiveData };

      return { ...frontmatter, url: `${pathString.split("/")[1]}` };
    }),
  );

  return sortByLatestDate(archives);
}

// endregion

// 아카이브 카테고리 조회
export async function getCategoryList(isContainAll: boolean = false) {
  const { readdir } = await import("fs/promises");
  const entries = await readdir(archivePath, { withFileTypes: true });

  // 1 Depth 하위 디렉토리 필터링
  const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(archivePath, entry.name));

  const sanitizedDirectories = directories.map((item) => {
    const slicedItem = item.split("/");
    return slicedItem[slicedItem.length - 1];
  });

  const sortedList = sortByDescendingLocale(sanitizedDirectories);
  const { allText } = config.category;

  if (isContainAll) {
    return [allText].concat(sortedList);
  }
  return sortedList;
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
    return getMdxFileSource(archiveAllPath);
  }

  return null;
}

const { POSTS_PER_PAGE } = config.archive;

// 모든 아카이브 데이터 목록 조회
export async function getAllArchiveList(page: number = 1, pageSize: number = POSTS_PER_PAGE) {
  const allPath = await getAllArchivePath();
  const archiveDataList = await getArchiveDataList(allPath);
  const totalLength = archiveDataList.length;

  // 데이터가 없을 경우 빈 배열 반환
  if (!Array.isArray(archiveDataList)) {
    return { archives: [], totalLength: 0 };
  }

  const pagedArchives = paginate(archiveDataList, page, pageSize);
  return { archives: pagedArchives, totalLength };
}

// 특정 카테고리 아카이브 목록 조회
export async function getCategoryArchive(categoryName: string, page: number = 1, pageSize: number = POSTS_PER_PAGE) {
  try {
    const { readdir } = await import("fs/promises");
    const entries = await readdir(`${archivePath}/${categoryName}`, { withFileTypes: true });

    // 디렉토리 항목만 필터링하여 이름 배열로 반환
    const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => `${categoryName}/${entry.name}`);
    const archivesByCategory = await getArchiveDataList(directories);
    const pagedArchivesByCategory = paginate(archivesByCategory, page, pageSize);

    return { archives: pagedArchivesByCategory, totalLength: archivesByCategory.length };
  } catch (error) {
    throw Error("Failed to read directory");
  }
}

export async function getSearchArchive(keyword: string, page: number = 1, pageSize: number = POSTS_PER_PAGE) {
  const allArchivePath = await getAllArchivePath();
  const archiveDataList = await getArchiveDataList(allArchivePath);
  const archives = archiveDataList.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));
  const pagedArchives = paginate(archives, page, pageSize);

  return { archives: pagedArchives, totalLength: archives.length };
}
