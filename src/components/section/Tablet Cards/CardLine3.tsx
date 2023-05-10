import React from 'react';
import { Cardline1 } from '@/data/data';
import CardMd from '@/components/cards/cardmd';

export default function CardLine3() {
  return (
    <div className="marquee-container">
      <div className="marquee3 flex gap-6">
        {Cardline1.map((item, index) => (
          <CardMd key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
}
