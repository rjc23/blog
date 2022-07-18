import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  slug: string;
  content: MDXRemoteSerializeResult;
  heading: string;
  date: any;
  description: string;
  coverImage?: string;
  readingTime: string;
};
