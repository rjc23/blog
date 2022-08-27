import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import components from 'components/MDXComponents';
import { mdxToHtml } from 'lib/mdx';
import { Post } from 'lib/types';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from 'graphql/queries';

const client = new ApolloClient({
  uri: process.env.CMS_HOST,
  cache: new InMemoryCache()
});

export default function PostPage({ post }: { post: Post }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });
  const paths = data.blogPosts.data.map((post) => {
    return { params: { slug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug }
  });

  const attrs = data.blogPosts.data[0].attributes;
  const { html, readingTime } = await mdxToHtml(attrs.content);

  return {
    props: {
      post: {
        heading: attrs.heading,
        content: html,
        description: attrs.description,
        date: attrs.createdAt,
        socialImage: attrs.socialImage.data.attributes.url,
        tags: attrs.tags,
        readingTime: readingTime,
        tag: attrs.tag.data
      }
    }
  };
}
