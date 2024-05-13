'use client';

import { memo, useCallback, useEffect, useMemo, useRef, useState, UIEvent } from 'react';
import './category.scss';
import Link from 'next/link';

type ScrollPositionType = 'left' | 'between' | 'right';
type ScrollDirectionType = Omit<ScrollPositionType, 'between'>;

function Category() {
  // region [Hooks]

  const categoryRef = useRef<HTMLUListElement>(null);
  const [scrollMaxWidth, setScrollMaxWidth] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  // const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>('left');

  // endregion

  // region [Privates]

  const isLeftScrollIcon = useMemo(() => isScroll && scrollPosition !== 'left', [isScroll, scrollPosition]);
  const isRightScrollIcon = useMemo(() => isScroll && scrollPosition !== 'right', [isScroll, scrollPosition]);

  const scrollAction = useCallback((direction: ScrollDirectionType) => {
    const scrollDefaultValue = 120;
    const { scrollLeft } = categoryRef.current!;
    const scrollValue = scrollLeft + (direction === 'left' ? -scrollDefaultValue : scrollDefaultValue);

    categoryRef.current!.scroll({ top: 0, left: scrollValue, behavior: 'smooth' });
  }, []);

  // endregion

  // region [Events]

  const onScroll = useCallback(
    (e: UIEvent<HTMLUListElement>) => {
      const { scrollLeft } = e.target as HTMLElement;

      if (scrollLeft < 2) {
        setScrollPosition('left');
        return;
      }
      if (scrollLeft > scrollMaxWidth - 2) {
        setScrollPosition('right');
        return;
      }
      if (scrollLeft > 0) {
        setScrollPosition('between');
      }
    },
    [scrollMaxWidth],
  );

  const onScrollAction = useCallback(
    (direction: ScrollDirectionType) => {
      scrollAction(direction);
    },
    [scrollAction],
  );

  // endregion

  // region [Effects]

  useEffect(() => {
    const { innerWidth: fullWidth } = window;
    const { scrollWidth } = categoryRef.current!;

    setScrollMaxWidth(scrollWidth - fullWidth + 12 * 2); // 16 is padding

    if (scrollWidth > fullWidth) {
      setIsScroll(true);
    }
  }, []);

  // endregion

  return (
    <div className="category__card">
      {isLeftScrollIcon && (
        <button type="button" className="category__card__scroll-action-icon-start" onClick={() => onScrollAction('left')}>
          &#60;
        </button>
      )}
      <ul ref={categoryRef} className="category__card__list" onScroll={onScroll}>
        <li className="category__card__item">
          <Link href="/#" className="category__card__item__link">
            <div className="category__card__item__link__active-character" />
            All
          </Link>
        </li>
      </ul>
      {isRightScrollIcon && (
        <button type="button" className="category__card__scroll-action-icon-end" onClick={() => onScrollAction('right')}>
          &#62;
        </button>
      )}
    </div>
  );
}

export default memo(Category);
