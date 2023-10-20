import { Post } from '@/types/WordPress/post';
import fetchJSON from '@/util/fetchJson';
import { NextPageProps } from '@/types/next';
import { ReactElement } from 'react';

interface PostDetailPageProps extends NextPageProps {
  slug: number;
}

export default async function PostDetailPage({ slug }: PostDetailPageProps): Promise<ReactElement> {
  console.log(slug);

  const postDetail = await fetchJSON<Post>(`/posts/?slug=${slug}`);
  console.log(postDetail);
  return <div>PostDetailPage</div>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await fetchJSON<Post[]>('/posts');
  return posts.map(({slug}) => ({ slug }));
}
