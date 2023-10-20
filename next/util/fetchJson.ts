export default async function fetchJSON<T>(urlPath: string, options?:RequestInit):Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2${urlPath}`, options);
  const json = await res.json();
  return json as T;
}