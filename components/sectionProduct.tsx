import { iconsBrand } from '@/public/icons/W300/Brands';
import Image from 'next/image';
import React from 'react';

const SectionProduct = () => {
  return (
    <div className='w-[25vw] h-[25vh]'>
      <Image
        src={iconsBrand.Apple.icon}
        alt={iconsBrand.Apple.alt}
        layout="responsive"
        objectFit="contain"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SectionProduct;
