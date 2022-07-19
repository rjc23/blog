import { PropsWithChildren, Suspense } from 'react';

import Container from 'components/Container';
import { Post } from 'lib/types';
import Author from 'components/Author';
import AboutAuthor from 'components/AboutAuthor';
import PlayGames from 'components/PlayGames';

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
        <Author readingTime={post.readingTime} date={post.date} />
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.heading}
        </h1>
        <Suspense fallback={null}>
          <div className="w-full prose dark:prose-dark max-w-none">
            {children}
          </div>
        </Suspense>
        <hr className="mt-10 w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <AboutAuthor />
        <PlayGames />
      </article>
    </Container>
  );
}
