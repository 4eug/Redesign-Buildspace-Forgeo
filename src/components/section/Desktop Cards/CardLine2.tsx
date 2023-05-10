import React from 'react';
import CardLg from '../../cards/cardlg';
import { Cardline2 } from '@/data/data';

export default function CardLine2() {
  return (
    <div className="marquee-container">
      <div className="marquee2 grid gap-6">
        {Cardline2.map((item, index) => (
          <CardLg key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
}
