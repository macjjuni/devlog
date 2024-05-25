import IRoutes from "@/@types/route";

const routes: IRoutes[] = [
  {
    id: 0,
    title: "About",
    path: "/",
    show: true,
  },
  {
    id: 1,
    title: "Archive",
    path: "/archive",
    show: true,
  },
  {
    id: 2,
    title: "Resume",
    path: "/resume",
    show: true,
  },
];

export const getCategoryPageUrl = (category: string) => `/archive/category/${encodeURIComponent(category)}`;
export const getSearchPageUrl = (searchText: string) => `/archive/search?q=${encodeURIComponent(searchText)}`;

export default routes;
