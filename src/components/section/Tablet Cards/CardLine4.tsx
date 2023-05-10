import React from 'react';
import { Cardline2 } from '@/data/data';
import CardMd from '@/components/cards/cardmd';

export default function CardLine3() {
  return (
    <div className="">
      <div className="marquee4 flex gap-6">
        {Cardline2.map((item, index) => (
          <CardMd key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
}
