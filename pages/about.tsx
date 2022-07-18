import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
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
        </p>
        <p className="text-black dark:text-white mb-4">
          For about 2 years, I worked full-time for a local company as a web
          developer, mainly using Angular 2+. I love coding but hate working in
          an office for 40 hours a week. Deep down, I was pretty unhappy and I
          was losing my passion for coding and creating things. It felt like I
          was using up all of my problem-solving abilities and creativity at
          work.
        </p>
        <p className="text-black dark:text-white mb-6">
          In early 2022, I quit my job and took a job tutoring at my local
          university. I can now say, I seriously LOVE tutoring. I really enjoy
          building meaningful relationships with students and seeing them
          develop their coding skills. Also, since I started tutoring, I have
          really regained my passion for coding and creating things. I have
          started building things again and am learning new tech such as
          next.js.
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
