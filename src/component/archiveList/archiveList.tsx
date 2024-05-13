import { memo } from "react";
import "./archiveList.scss";
import Link from "next/link";
import type { IPage } from "@/@types/notion";

interface ArchiveListProps {
  list: IPage[];
}

function ArchiveList({ list }: ArchiveListProps) {
  return (
    <>
      <h2 className="archive__title">All</h2>
      <ul className="archive__list">
        {list.map((listItem) => (
          <li key={listItem.id} className="archive__list__item">
            <Link href={`/archive/${listItem.id}`} className="archive__list__item__link">
              <h3 className="archive__list__item__title">{listItem.title}</h3>
              {/* TODO. 날짜 포멧 변환 해야함! YYYY.MM.DD */}
              <p className="archive__list__item__date">{listItem.published}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default memo(ArchiveList);
