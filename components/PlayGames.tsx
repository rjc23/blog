import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function Game({
  children,
  link,
  alt,
  imgSrc
}: PropsWithChildren<{ link: any; alt: string; imgSrc: string }>) {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Image
        src={imgSrc}
        width={400}
        height={400}
        alt={alt}
        className="rounded-lg"
      ></Image>
      {children}
    </a>
  );
}

export default function PlayGames() {
  return (
    <div className="mt-16">
      <h3>Check out some of the games I made</h3>
      <div className="flex gap-12">
        <div className="mt-6 w-3/12">
          <div className="">
            <Game
              link="https://playretrosnake.com"
              alt="Retro Snake Game"
              imgSrc="/snake.jpeg"
            ></Game>
          </div>
          <div>
            <h4>Retro Snake</h4>
            <p>Eat the food but don’t hit the walls or your own body!</p>
          </div>
        </div>
        <div className="mt-6 w-3/12">
          <div className="">
            <Game
              link="https://playretrosnake.com"
              alt="Retro Snake Game"
              imgSrc="/world.png"
            ></Game>
          </div>
          <div>
            <h4>Worldle</h4>
            <p>
              Replica of the original but with extra features! Guess countries,
              flags and capitals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
