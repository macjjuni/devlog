import { ReactNode, memo } from 'react';
import './pageLayout.tsx.scss';

function sidebar({ children }: { children: ReactNode }) {
  return <section className="archive__layout__sidebar">{children}</section>;
}

function content({ children }: { children: ReactNode }) {
  return <section className="archive__layout__content">{children}</section>;
}

export const ArchiveLayoutSidebar = memo(sidebar);
export const ArchiveLayoutContent = memo(content);

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return <div className="archive__layout">{children}</div>;
}
