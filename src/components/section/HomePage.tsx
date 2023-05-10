import React from 'react';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { Button } from '../button';
import CardLine1 from './Desktop Cards/CardLine1';
import CardLine2 from './Desktop Cards/CardLine2';
import CardLine3 from './Tablet Cards/CardLine3';
import CardLine4 from './Tablet Cards/CardLine4';

export default function HomeHero() {
  return (
    <div className="grid">
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
      {/* Desktop Cards */}
      <div className="absolute top-0 lg:left-[60%] lg:block hidden w-full">
        <CardLine1 />
      </div>
      <div className="absolute top-0 lg:left-[78%] lg:block hidden w-full">
        <CardLine2 />
      </div>

      {/* Tablet Cards */}
      <div className="relative mt-10 right-[20%] lg:hidden md:block hidden">
        <CardLine3 />
      </div>
      <div className="absolute top-[800px] right-[-21%] lg:hidden md:block hidden">
        <CardLine4 />
      </div>
    </div>
  );
}
