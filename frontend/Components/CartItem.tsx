import React from 'react';

type Props = {
  product: string;
  key: number;
};

const CartItem = ({ product, key }: Props) => {
  return (
    <div
      key={key}
      className='w-full py-10 px-5 border-2 border-black rounded-[10px] mb-5'
    >
      {product}
    </div>
  );
};

export default CartItem;
