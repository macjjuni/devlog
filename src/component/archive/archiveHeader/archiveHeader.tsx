import { ArchiveData } from "@/@types/archive";
import "./archiveHeader.scss";

interface ArchiveHeaderProps {
  archiveData: ArchiveData;
}

export default function ArchiveHeader({ archiveData }: ArchiveHeaderProps) {



  return (
    <div className={"archive__header__container"}>
      <h1 className={"archive__header__container__title"}>{archiveData.title}</h1>
      <ul className={"archive__header__container__info__list"}>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>카테고리</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.category}</span>
        </li>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>태그</span>
          <span className={"archive__header__container__info__list__item__text"}>
            {archiveData?.tag?.map((tagItem) => <div key={tagItem}>{tagItem}</div>)}
          </span>
        </li>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>작성일</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.date}</span>
        </li>
        <li className={"archive__header__container__info__list__item"}>
          <span className={"archive__header__container__info__list__item__label"}>작성자</span>
          <span className={"archive__header__container__info__list__item__text"}>{archiveData?.author}</span>
        </li>
      </ul>
    </div>
  );
}
