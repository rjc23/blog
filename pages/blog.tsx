import Container from 'components/Container';
import Link from 'next/link';

export default function Blog() {
  return (
    <Container
      title="Blog – Ryan Carmody"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          /blog
        </h1>
        <div className="mt-10 mb-20">
          <h2>I write about three topics</h2>
          <div className="flex gap-4 flex-col md:flex-row mt-6">
            <div className=" shadow-xl dev transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#F96167] to-[#ffdb23]">
              <Link href="/blog/code">
                <a className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                  <h4>code</h4>
                  <p className="mb-6">
                    Everything related to the tech stacks I use. This includes
                    Angular 2+, Next.js, Node.js, SCSS, Heroku, Vercel, MongoDB
                    etc.
                  </p>
                </a>
              </Link>
            </div>
            <div className="shadow-xl dev transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#AA96DA] to-[#69af7e]">
              <Link href="/blog/life">
                <a className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                  <h4>life</h4>
                  <p className="mb-6">
                    About the things going on in my life. This might be tutoring
                    related or about the sports I participate in.
                  </p>
                </a>
              </Link>
            </div>
            <div className="shadow-xl dev transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#89ABE3FF] to-[#EA738DFF]">
              <Link href="/blog/misc">
                <a className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                  <h4>misc</h4>
                  <p className="mb-6">
                    Just random things that come into my head that I have
                    decided to write down.
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
