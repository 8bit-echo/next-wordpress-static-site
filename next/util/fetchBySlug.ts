type PostTypes = 'posts' | 'pages' | 'projects';

export async function fetchBySlug<T>(type: PostTypes, slug: string): Promise<T | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/${type}?slug=${slug}`);
  const data = await res.json();
  if (!data.length) {
    return null;
  }
  return data[0] as T;
}
