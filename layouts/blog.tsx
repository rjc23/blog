import { PropsWithChildren, Suspense } from 'react';

import Container from 'components/Container';
import { Post } from 'lib/types';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container
      title={`${post.heading} – Ryan Carmody`}
      description={post.description}
      // image={urlForImage(post.coverImage).url()}
      date={post.date}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.heading}
        </h1>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
