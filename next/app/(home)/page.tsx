import Image from 'next/image';
import styles from './page.module.css';
import type { Post as WordPressPost } from '@/types/WordPress/post';
import fetchJSON from '@/util/fetchJson';
import { Post } from '@/components/Post';

export default async function Home() {
  const posts = await fetchJSON<WordPressPost[]>('/posts');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}