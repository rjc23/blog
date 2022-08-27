import Container from 'components/Container';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LATEST_POSTS } from 'graphql/queries';
import Link from 'next/link';
import readingTime from 'reading-time';
import { Key } from 'react';
import LatestPosts from 'components/LatestPosts';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function Misc({ posts }) {
  return (
    <Container
      title="Blog/Life – Ryan Carmody"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/life
        </h1>
        <p className="mb-12">
          Everything related to whats going on in my life. This might include
          articles about the sports I play, my hobbies, holidays I take, jobs I
          apply for etc.
        </p>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_LATEST_POSTS,
    variables: { type: 'life' }
  });

  return {
    props: {
      posts: data.blogPosts.data
    }
  };
}
