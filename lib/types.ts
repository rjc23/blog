import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  slug: string;
  content: MDXRemoteSerializeResult;
  heading: string;
  date: any;
  tags: any;
  description: string;
  socialImage: string;
  readingTime: string;
  tag: any;
};
