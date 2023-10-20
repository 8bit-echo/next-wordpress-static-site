import { NextPageProps } from '@/types/next';
import { Project } from '@/types/WordPress/project';
import { fetchBySlug } from '@/util/fetchBySlug';
import fetchJSON from '@/util/fetchJson';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

interface ProjectSlugProps extends NextPageProps {
  slug: string;
}

export default async function ProjectSlug({ params: { slug } }: ProjectSlugProps): Promise<ReactElement> {
  const project = await fetchBySlug<Project>('projects', slug);
  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title.rendered}</h1>
      <a href={project.acf.url} target="_blank">{project.acf.url}</a>
    </main>
  );
}


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await fetchJSON<Project[]>('/projects');
  return projects.map(({slug}) => ({ slug }));
}