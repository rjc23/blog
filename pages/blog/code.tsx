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

export default function Code({ posts }) {
  return (
    <Container
      title="Blog/Code – Ryan Carmody"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog/code
        </h1>
        <div className="mb-12">
          <p className="mb-3">
            Here you can find articles about everything web dev. I like to write
            &apos;how to&apos;s&apos; about specific topics e.g. Angular 2+,
            Next.js, Heroku etc, as well as broader topics about the life of a
            web developer.
          </p>
          <p>
            You can search{' '}
            <Link href={'/category'}>
              <a>by category.</a>
            </Link>
          </p>
        </div>
        <h2 className="mb-4">Latest articles</h2>
        <LatestPosts posts={posts} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_LATEST_POSTS,
    variables: { type: 'code' }
  });

  return {
    props: {
      posts: data.blogPosts.data
    }
  };
}
