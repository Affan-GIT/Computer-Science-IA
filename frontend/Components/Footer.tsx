import React from 'react';
import Logo from './Logo';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center text-3xl'>
      <div className='border-t-2 border-gray-500 flex items-center py-3'>
        <Logo />
        <div className='flex mx-10 gap-3'>
          <AiFillInstagram />
          <AiFillFacebook />
        </div>
        <div className='flex items-center'>
          <div className='mr-10 text-lg'>+7057523722</div>
          <div className='text-sm flex flex-col items-center'>
            <span>Kareem Hospital,</span>
            <span>Near Civil Hospital,</span>
            <span>Parbhani,</span>
            <span>Maharashtra</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
