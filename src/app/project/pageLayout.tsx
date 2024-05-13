import { ReactNode } from 'react';
import './pageLayout.tsx.scss';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <section className="project__layout">{children}</section>;
}
