import { ArchiveData } from "@/@types/archive";
import Image from "next/image";
import "./archiveHeader.scss";

interface ArchiveHeaderProps {
  thumbnailPath: string;
  archiveData: ArchiveData;
}

export default function ArchiveHeader({ thumbnailPath, archiveData }: ArchiveHeaderProps) {
  return (
    <div className={"archive__header__container"}>
      <div className="archive__header__container__thumbnail__wrapper">
        <Image src={`/archive/${thumbnailPath}/thumbnail.webp`} alt={`${archiveData.title}_thumbnail`} width={1052} height={264} />
      </div>
      <h1 className={"archive__header__container__title"}>{archiveData.title}</h1>
      <ul className={"archive__header__container__info__list"}>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>카테고리</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.category}</span>
        </li>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>작성일</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.date}</span>
        </li>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>작성일</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.author}</span>
        </li>
      </ul>
    </div>
  );
}
