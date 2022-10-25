import React from 'react';

type Props = {};

const Logo = (props: Props) => {
  return (
    <div
      className='text-5xl cursor-pointer'
      onClick={() => {
        window.location.assign('../Landing');
      }}
    >
      Logo
    </div>
  );
};

export default Logo;
