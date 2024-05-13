import { ReactNode } from 'react';
import './main.scss';

export default function Main({ children }: { children: ReactNode }) {
  return <main className="main">{children}</main>;
}
