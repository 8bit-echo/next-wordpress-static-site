import fetchJSON from './fetchJson';

// Used to create static paths for dynamic routes.
// Assumes that your dynamic routes are in the format of [slug]/page.tsx
export default function createStaticParams(path: string) {
  return async () => {
    const paths = await fetchJSON<{ slug: string }[]>(path);
    return paths.map(({ slug }) => ({ slug }));
  };
}
