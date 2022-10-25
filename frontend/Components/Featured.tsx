import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className='w-[100vw] mx-auto max-w-7xl flex justify-center items-center text-3xl mt-5'>
      <div>
        <AiOutlineLeft />
      </div>
      <div className='mx-5 w-full'>
        <Image
          src='/images/featured/f1.jpg'
          sizes='100vw'
          width='100%'
          height='50%'
          layout='responsive'
        />
      </div>
      <div>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default Featured;
