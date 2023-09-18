const route = [
  {
    id: 0,
    title: 'About',
    path: '/',
    show: true,
  },
  {
    id: 0,
    title: 'Blog',
    path: '/blog',
    show: true,
  },
  {
    id: 0,
    title: 'Project',
    path: '/project',
    show: true,
  },
  {
    id: 0,
    title: 'GuestBook',
    path: '/guestbook',
    show: true,
  },
]

const routes = route.map((rot, idx) => {
  const newRoute = rot
  newRoute.id = idx
  return newRoute
})

export default routes
