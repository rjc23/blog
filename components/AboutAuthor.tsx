import Image from 'next/image';
import Link from 'next/link';

export default function Author() {
  return (
    <div className="flex items-start justify-start flex-col gap-4 mt-8 sm:flex-row sm:gap-8">
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
        <h3 className="">About the Author</h3>
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
          I web develop, rock climb, play wheelchair basketball and brew beer.{' '}
          <Link href="/about">
            <a>Learn more</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
