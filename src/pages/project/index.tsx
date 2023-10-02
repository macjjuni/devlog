import type { GetStaticProps } from 'next'
import type { IProjectPage } from '@/types/notion'

import notion from '@/lib/noiton'

import NextHead from '@/components/seo/DefaultMeta'
import ProjectLayout from '@/layouts/Layout/ProjectLayout'
import PageHeading from '@/components/molecule/PageHeading'

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

// const { POSTS_PER_PAGE } = config.post

export default function ProjectPage({ title, pages }: IProject) {
  return (
    <ProjectLayout>
      <NextHead title="Project" />
      <PageHeading title={title} count={pages.length} />
    </ProjectLayout>
  )
}
