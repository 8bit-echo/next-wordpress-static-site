export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  'version-history': VersionHistory[];
  'wp:attachment': About[];
  'wp:term': WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Meta {
  footnotes: string;
}

