import React from 'react';
import CardLg from '../../cards/cardlg';
import { Cardline1 } from '@/data/data';

export default function CardLine1() {
  return (
    <div className="marquee-container">
      <div className="marquee1 grid gap-6">
        {Cardline1.map((item, index) => (
          <CardLg key={index} imageSrc={item.image} text={item.text} />
        ))}
      </div>
    </div>
  );
}
