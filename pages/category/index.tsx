import Container from 'components/Container';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_TAGS } from 'graphql/queries';
import Link from 'next/link';
import readingTime from 'reading-time';
import Image from 'next/image';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function Code({ tags }) {
  return (
    <Container
      title="Category – Ryan Carmody"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /category
        </h1>
        <p className="mb-12">
          Search for articles by category. Click on a category below to see all
          articles related to that
        </p>
        <h2 className="mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {tags.map((val, i) => {
            return (
              <div key={i} className="">
                <Link href={'category/' + val.attributes.tagName}>
                  <a className="relative">
                    <Image
                      src={val.attributes.image.data.attributes.url}
                      width={672}
                      height={250}
                      alt="image"
                      className="mt-1 rounded-md !bg-white !border-solid !border-1 !border-gray-200"
                    ></Image>
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
    query: GET_ALL_TAGS
  });

  return {
    props: {
      tags: data.tags.data
    }
  };
}
