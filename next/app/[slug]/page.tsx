import { NextPageProps } from '@/types/next';
import { ReactElement } from 'react';
import createStaticParams from '@/util/createStaticParams';
import { RenderedContent } from '@/components/RenderedContent';
import { notFound } from 'next/navigation';
import { fetchBySlug } from '@/util/fetchBySlug';
import { Page } from '@/types/WordPress/page';

// generateStaticParams is used to tell next which paths need
// to be statically rendered at build time.
export const generateStaticParams = createStaticParams('/pages');

interface PageDetailsProps extends NextPageProps {
  slug: string;
}

export default async function PageDetailsProps({
  params: { slug },
}: PageDetailsProps): Promise<ReactElement> {
  const pageDetail = await fetchBySlug<Page>('pages', slug);

  if (!pageDetail) {
    notFound();
  }

  return (
    <article>
      <RenderedContent as="h1">{pageDetail.title.rendered}</RenderedContent>
      <RenderedContent>{pageDetail.content.rendered}</RenderedContent>
    </article>
  );
}
