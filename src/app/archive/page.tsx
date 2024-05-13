import { ArchiveLayoutSidebar, ArchiveLayoutContent } from '@/app/archive/layout';
import Category from '@/component/sidebar/category/category';
import Profile from '@/component/sidebar/profile/profile';
import Search from '@/component/sidebar/search/search';
import ArchiveList from '@/component/archiveList/archiveList';

export default function ArchivePage() {
  return (
    <>
      <ArchiveLayoutSidebar>
        <Profile />
        <Search />
        <Category />
      </ArchiveLayoutSidebar>
      <ArchiveLayoutContent>
        <ArchiveList />
      </ArchiveLayoutContent>
    </>
  );
}
