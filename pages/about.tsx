import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Ryan Carmody">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          /about
        </h1>
        <p className="text-black dark:text-white mb-4">
          My name is Ryan Carmody and I am from{' '}
          <a
            href="https://en.wikipedia.org/wiki/Adelaide"
            target="blank"
            rel="noopener noreferrer"
          >
            Adelaide, South Australia
          </a>
          .
        </p>
        <p className="text-black dark:text-white mb-4">
          For about 2 years, I worked full-time for a local company as a web
          developer, mainly using Angular 2+. I really enjoyed working at this
          company but was ready for something new.
        </p>
        <p className="text-black dark:text-white mb-6">
          In early 2022, I left my job and took a job tutoring at my local
          university. I can now say, I seriously LOVE tutoring. I really enjoy
          building meaningful relationships with students and seeing them
          develop their coding skills. Also, since I started tutoring, I have
          started working on many more{' '}
          <Link href="blog/personal-projects">personal coding projects.</Link>{' '}
          This has enabled me to learn new skills, such as Next.js, Web
          Scraping, Twitter API and much more.
        </p>
        <h2 className="text-black dark:text-white mb-4">Get in contact</h2>
        <ul>
          <li>
            {'>  '}
            <a
              href="https://www.linkedin.com/in/ryanjcarmody/"
              target="blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {'>  '}
            <a
              href="mailto:ryancarmody1@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
