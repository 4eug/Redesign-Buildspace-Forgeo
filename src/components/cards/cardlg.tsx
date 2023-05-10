import React from 'react';
import { Bookmark } from '../icons/bookmark';
import Image from 'next/image';

interface CardLgProps {
  imageSrc: string;
  text: string;
}

export default function CardLg({ imageSrc, text }: CardLgProps) {
  return (
    <div className="w-[240px] h-[300px] rounded-[24px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="group">
          <Image
            src={imageSrc}
            width={240}
            height={300}
            alt="Background Image"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
        </div>
      </div>
      <div className="relative flex justify-end pr-[24px] pt-[16px]">
        <div className="flex rounded-full h-[40px] items-center justify-center w-[40px] bg-black/70">
          <Bookmark />
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6">
        <div className="flex justify-center items-center px-[12px] py-[12px] bg-black/70 h-[52px] w-[172px] rounded-[14px]">
          <h1 className="text-center overflow-hidden overflow-ellipsis">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}
