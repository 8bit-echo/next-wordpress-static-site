import { GUID, Content, Meta, Links } from "./common";

export interface Page {
  id: number;
  date: string;
  date_gmt: string;
  guid: GUID;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  acf: any[];
  _links: Links;
}
