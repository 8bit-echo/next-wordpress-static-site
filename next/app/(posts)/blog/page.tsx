import { Post } from '@/components/Post';
import { Post as WordPressPost } from '@/types/WordPress/post';
import fetchJSON from '@/util/fetchJson';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import styles from './blogParent.module.css';

export default async function BlogLandingPage(): Promise<ReactElement> {
  const posts = await fetchJSON<WordPressPost[]>('/posts');

  if (!posts || !posts.length) {
    notFound();
  }

  return (
    <main className={styles.postList}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      ;
    </main>
  );
}
