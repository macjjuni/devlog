import IRoutes from '@/types/route'

const routes: IRoutes[] = [
  {
    id: 0,
    path: '/',
    title: 'About',
    show: true,
  },
  {
    id: 1,
    path: '/blog',
    title: 'Blog',
    show: true,
  },
  {
    id: 2,
    path: '/project',
    title: 'Project',
    show: true,
  },
  {
    id: 3,
    path: '/resume',
    title: 'Resume',
    show: false,
  },
]

export default routes
