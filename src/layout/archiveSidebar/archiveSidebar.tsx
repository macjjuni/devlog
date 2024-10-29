import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import BitcoinChart from "@/component/sidebar/bitcoinChart/bitcoinMarketChart";
import { useCurrentCategory } from "@/hook";

export default async function ArchiveSidebar({ categories }: { categories: string[] }) {
  const currentCategory = await useCurrentCategory();

  return (
    <aside className="archive__layout__sidebar">
      <Profile />
      <Search />
      <Category list={categories} currentCategory={currentCategory} />
      <BitcoinChart />
    </aside>
  );
}
