import Container from 'components/Container';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LATEST_POSTS } from 'graphql/queries';
import Link from 'next/link';
import readingTime from 'reading-time';
import LatestPosts from 'components/LatestPosts';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function Misc({ posts }) {
  return (
    <Container
      title="Blog/Misc – Ryan Carmody"
      description="Had a random thought, decided to write about it here."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/misc
        </h1>
        <p className="mb-12">
          Had a random thought about something, wrote about it here.
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
    variables: { type: 'misc' }
  });

  return {
    props: {
      posts: data.blogPosts.data
    }
  };
}
