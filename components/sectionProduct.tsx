import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

const SectionProduct = ({ src, alt, objPosition }: { src: StaticImport, alt: string, objPosition?: string }) => {
  return (
    <div className='w-[25vw] h-[25vh] flex flex-col'>
      <Image
        src={src}
        alt={alt}
        
        style={{ width: '100%', height: '100%', objectFit: "cover", objectPosition: objPosition }}
      />
    </div>
  );
};

export default SectionProduct;
