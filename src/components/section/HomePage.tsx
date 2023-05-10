import React from 'react';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { Button } from '../button';
import CardLine1 from './CardLine1';
import CardLine2 from './CardLine2';

export default function HomeHero() {
  return (
    <div className="flex items-center">
      <Hero>
        <div className="lg:mt-8">
          <HeroTitle>
            transform your
            <br /> ideas into reality <br />
            with nfts.
          </HeroTitle>
          <HeroSubtitle>
            Our AI NFT project generator allows you to design and build your{' '}
            <br /> very own project from scratch, with unique characters,
            <br />
            backstories, and abilities.
          </HeroSubtitle>
          <div className="flex lg:justify-start md:justify-center md:items-center lg:gap-[24px] md:gap-[20px] gap-[16px]">
            <Button
              className="h-[52px] w-[161px] flex gap-[5px] font-bold items-center text-black justify-center bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </Button>
            <Button
              className="h-[52px] w-[161px] flex gap-[5px] font-bold items-center text-white justify-center border"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Button>
          </div>
        </div>
      </Hero>
      <div className="absolute top-0 lg:left-[60%] lg:block hidden w-full">
        <CardLine1 />
      </div>
      <div className="absolute top-0 lg:left-[78%] lg:block hidden w-full">
        <CardLine2 />
      </div>
    </div>
  );
}
