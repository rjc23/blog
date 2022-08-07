import Image from 'next/image';
import Link from 'next/link';

export default function Author() {
  return (
    <div className="flex items-start justify-start flex-col gap-4 mt-8 sm:flex-row sm:gap-8 sm:items-center">
      <div className="w-20 sm:w-auto">
        <Image
          src={'/avatar.png'}
          height={100}
          width={100}
          alt="Image of the Author, Ryan Carmody"
          className="rounded-full"
        ></Image>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3>About the Author</h3>
          <p className="bg-green-300 pl-2 pr-2 rounded-lg dark:text-black">
            Open for work
          </p>
        </div>
        <p>
          Hi, I'm Ryan from{' '}
          <a
            href="https://en.wikipedia.org/wiki/Adelaide"
            target="blank"
            rel="noopener noreferrer"
          >
            Adelaide, South Australia
          </a>
          .
        </p>
        <p>
          I'm a web developer and computer science tutor. I also rock climb,
          play{' '}
          <Link href="/blog/my-experience-playing-wheelchair-basketball">
            <a>wheelchair basketball</a>
          </Link>{' '}
          and brew beer.
        </p>
      </div>
    </div>
  );
}
