import Container from 'components/Container';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LATEST_POSTS } from 'graphql/queries';
import Link from 'next/link';
import readingTime from 'reading-time';

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
        <p className="mb-12">
          Here you can find articles about everything web dev. I like to write
          &apos;how to&apos;s&apos; about specific topics e.g. Angular 2+,
          Next.js, Heroku etc, as well as broader topics about the life of a web
          developer.
        </p>
        <h2 className="mb-4">Latest articles</h2>
        <div className="flex flex-col-reverse">
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
              <div className="mb-8" key={i}>
                <Link href={'/blog/' + val.attributes.urlSlug}>
                  <a>
                    <h3>{val.attributes.heading}</h3>
                    <span className="text-sm text-green-700 dark:text-green-300">
                      {readingTime(val.attributes.content).text} - {createdAt}
                    </span>
                    <p>{val.attributes.description}</p>
                  </a>
                </Link>
              </div>
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
    variables: { type: 'code' }
  });

  return {
    props: {
      posts: data.blogPosts.data
    }
  };
}
