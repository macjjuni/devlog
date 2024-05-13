import { memo } from 'react';
import './archiveList.scss';
import Link from 'next/link';

function ArchiveList() {
  return (
    <>
      <h2 className="archive__title">All</h2>
      <ul className="archive__list">
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">useRef 동적 할당하기</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">JavaScript - This</h3>
            <p className="archive__list__item__date">2014.03.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">대중은 가격에 반응한다</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">useRef 동적 할당하기</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">JavaScript - This</h3>
            <p className="archive__list__item__date">2014.03.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">대중은 가격에 반응한다</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">useRef 동적 할당하기</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">JavaScript - This</h3>
            <p className="archive__list__item__date">2014.03.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">대중은 가격에 반응한다</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
{' '}
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">useRef 동적 할당하기</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">JavaScript - This</h3>
            <p className="archive__list__item__date">2014.03.30</p>
          </Link>
        </li>
        <li className="archive__list__item">
          <Link href="/archive" className="archive__list__item__link">
            <h3 className="archive__list__item__title">대중은 가격에 반응한다</h3>
            <p className="archive__list__item__date">2014.04.30</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default memo(ArchiveList);
