import { memo } from "react";

const ActiveCheckSvg = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <g id="Interface / Check">
          <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
};

export default memo(ActiveCheckSvg);
