// helper type for dynamic routing page params
export interface NextPageProps<
  P extends Record<string, string[] | string> = Record<string, never>,
> {
  params: P;
}