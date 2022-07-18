import Container from 'components/Container';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LATEST_POSTS } from 'graphql/queries';
import Link from 'next/link';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function Misc({ posts }) {
  return (
    <Container
      title="Blog/Code – Ryan Carmody"
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
        <div>
          {posts.map((val, i) => {
            const options: any = {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            };
            const createdAt = new Date(
              val.attributes.createdAt
            ).toLocaleDateString([], options);
            return (
              <Link
                href={'/blog/' + val.attributes.urlSlug}
                key={i}
                className="mb-8"
              >
                <a>
                  <h3>{val.attributes.heading}</h3>
                  <span className="text-sm text-green-600 dark:text-green-300">
                    {val.attributes.minsToRead} mins - {createdAt}
                  </span>
                  <p>{val.attributes.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
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
