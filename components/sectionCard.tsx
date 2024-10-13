import { iconsW300 } from '@/public/icons/W300';
import Image from 'next/image';
import { ReactNode } from 'react';

interface productCard {
  side: 'left' | 'right';
  cardName: ReactNode;
}

const SectionCard = ({ cardName, side }: productCard) => {
  const rightBtn = (
    <button className="flex-center">
      خرید
      <Image
        src={iconsW300.rightArrow.icon}
        alt="→"
      />
    </button>
  );
  const leftBtn = (
    <button className="flex-center">
      <Image
        src={iconsW300.leftArrow.icon}
        alt="←"
      />
      خرید
    </button>
  );

  return (
    <div className="w-[25vw] h-[25vh] p-6 flex flex-col justify-end">
      <p className="text-3xl mb-[50] flex-center">{cardName}</p>
      {side === 'right' ? rightBtn : leftBtn}
    </div>
  );
};

export default SectionCard;
