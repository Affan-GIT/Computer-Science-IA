import React from 'react';

type Props = {
  products: number;
  total: number;
};

const CartCard = ({ products, total }: Props) => {
  return (
    <div className='flex flex-col border-2 border-black w-max px-40 py-10 text-3xl rounded-[10px] items-center gap-5'>
      <div>Products: {products}</div>
      <div>
        Total: <small>₹</small>
        {total}
      </div>
      <button className='cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5'>
        Check Out
      </button>
    </div>
  );
};

export default CartCard;
