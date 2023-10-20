import type { Post as WordPressPost } from '@/types/WordPress/post';

interface PostProps {
  post: WordPressPost;
}

export function Post({ post: { title, content } }: PostProps) {
  return (
    <article>
      <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
      <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </article>
  );
}
