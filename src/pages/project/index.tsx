import type { GetStaticProps } from 'next'
import type { IProjectPage } from '@/@types/notion'

import notion from '@/lib/noiton'

import NextHead from '@/components/seo/DefaultMeta'
import PageHeading from '@/components/molecule/PageHeading'
import ProjectLayout from '@/layouts/PageLayout/ProjectLayout'
import Link from 'next/link'

interface IProject {
  title: string
  pages: IProjectPage[]
}

export const getStaticProps: GetStaticProps<IProject> = async () => {
  const databaseId = process.env.NOTION_PROJECT_DATABASE_ID

  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')
    const info = await notion.getNotionInfo(databaseId)

    const { title } = info
    const pages = await notion.getAllProject(databaseId)

    return {
      props: { title: title[0].plain_text, pages },
      revalidate: 10,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export default function ProjectPage({ title, pages }: IProject) {
  return (
    <ProjectLayout>
      <NextHead title="Project" />
      <PageHeading title={title} count={pages.length} />
      {pages.map((page) => (
        <Link href={`/project/${page.id}`} key={page.id}>
          <div className="flex flex-col">
            <h2 className="text-postTitle">{page.title}</h2>
            <div className="flex flex-row gap-sm">
              {page.stack.map((st) => (
                <span key={st.id}>#{st.name}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </ProjectLayout>
  )
}
