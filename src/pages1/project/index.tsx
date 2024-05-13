import type { GetStaticProps } from 'next'
import type { IProjectPage } from '@/@types/notion'

import notion from '@/lib/noiton'

import NextHead from '@/component/seo/DefaultMeta'
import ProjectLayout from '@/layouts/PageLayout/ProjectLayout'
import ProjectList from '@/component/oraganisms/ProjectList'

interface IProject {
  pages: IProjectPage[]
}

export const getStaticProps: GetStaticProps<IProject> = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID

  try {
    if (!databaseId) throw new Error('DATABASE_ID is undefined.')

    const pages = await notion.getAllProject(databaseId)
    return {
      props: { pages },
      revalidate: 10,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export default function ProjectPage({ pages }: IProject) {
  return (
    <ProjectLayout>
      <NextHead title="Project" />
      <ProjectList pages={pages} />
    </ProjectLayout>
  )
}
