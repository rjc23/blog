import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import components from 'components/MDXComponents';
import { mdxToHtml } from 'lib/mdx';
import { Post } from 'lib/types';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  GET_ALL_SLUGS,
  GET_ALL_TAGS,
  GET_INDIVIDUAL_POST,
  GET_POSTS_FROM_TAG
} from 'graphql/queries';
import Container from 'components/Container';
import Link from 'next/link';
import readingTime from 'reading-time';
import LatestPosts from 'components/LatestPosts';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function Categories({ tag, posts }) {
  return (
    <Container
      title={`category/${tag} – Ryan Carmody`}
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /category/
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> */}
          {tag}
          {/* </span> */}
        </h1>
        <p className="mb-12">
          Here you can find articles about everything {tag}.
        </p>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_TAGS });
  const paths = data.tags.data.map((tag) => {
    return { params: { slug: tag.attributes.tagName } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { data } = await client.query({
    query: GET_POSTS_FROM_TAG,
    variables: { tag: params.slug }
  });

  return {
    props: {
      tag: data.tags.data[0].attributes.tagName,
      posts: data.tags.data[0].attributes.blog_posts.data
    }
  };
}
