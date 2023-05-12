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
          <div className="flex-row space-x-3 lg:justify-start md:justify-center md:items-center">
            <Button
              className="lg:h-[52px] lg:w-[161px] md:h-[48px] md:w-[131px] h-[48px] w-[141px] flex  font-bold items-center text-black justify-center bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </Button>
            <Button
              className="lg:h-[52px] lg:w-[161px] md:h-[48px] md:w-[131px] h-[48px] w-[141px] flex  font-bold items-center text-white justify-center border"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Button>
          </div>
        </div>
      </Hero>
      {/* Desktop Cards */}
      <div className="fixed top-0 left-0  lg:left-[60%] lg:block hidden w-full">
        <CardLine1 />
      </div>
      <div className="fixed top-0 left-0  lg:left-[78%] lg:block hidden w-full">
        <CardLine2 />
      </div>
    </div>
  );
}
