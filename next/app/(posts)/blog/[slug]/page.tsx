import { Post } from '@/types/WordPress/post';
import { NextPageProps } from '@/types/next';
import { ReactElement } from 'react';
import createStaticParams from '@/util/createStaticParams';
import { RenderedContent } from '@/components/RenderedContent';
import { notFound } from 'next/navigation';
import { fetchBySlug } from '@/util/fetchBySlug';

export const generateStaticParams = createStaticParams('/posts');

interface PostDetailPageProps extends NextPageProps {
  slug: string;
}

export default async function PostDetailPage({
  params: { slug },
}: PostDetailPageProps): Promise<ReactElement> {
  const postDetail = await fetchBySlug<Post>('posts', slug);

  if (!postDetail) {
    notFound();
  }

  return (
    <article>
      <RenderedContent as="h1">{postDetail.title.rendered}</RenderedContent>
      <RenderedContent>{postDetail.content.rendered}</RenderedContent>
    </article>
  );
}
