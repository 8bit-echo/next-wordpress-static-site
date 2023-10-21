import type { Post as WordPressPost } from '@/types/WordPress/post';
import { RenderedContent } from './RenderedContent';

interface PostProps {
  post: WordPressPost;
}

export function Post({ post: { title, content, slug } }: PostProps) {
  return (
    <article>
      <h2>
        <a href={`/posts/${slug}`}>
          <RenderedContent as="span">{title.rendered}</RenderedContent>
        </a>
      </h2>
      <RenderedContent>{content.rendered}</RenderedContent>
    </article>
  );
}
