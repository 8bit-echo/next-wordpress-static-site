import { RenderedContent } from '@/components/RenderedContent';
import { NextPageProps } from '@/types/next';
import { Project } from '@/types/WordPress/project';
import createStaticParams from '@/util/createStaticParams';
import { fetchBySlug } from '@/util/fetchBySlug';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

// This is an example of a custom post type in ACF.
// it has one custom field: url.
export const generateStaticParams = createStaticParams('/projects');

interface ProjectDetailsProps extends NextPageProps {
  slug: string;
}

export default async function ProjectDetails({
  params: { slug },
}: ProjectDetailsProps): Promise<ReactElement> {
  const project = await fetchBySlug<Project>('projects', slug);
  if (!project) {
    notFound();
  }

  return (
    <main>
      <RenderedContent as="h1">{project.title.rendered}</RenderedContent>
      <a href={project.acf.url} target="_blank">
        {project.acf.url}
      </a>
    </main>
  );
}
