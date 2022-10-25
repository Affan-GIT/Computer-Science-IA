import React from 'react';

type Props = {
  product: { ProductName: string };
  key: number;
};

const DisplayItem = ({ product, key }: Props) => {
  return (
    <div
      key={key}
      className='w-max h-max p-5 border-2 border-black rounded-[10px] m-5 cursor-pointer'
      onClick={() => {
        window.location.assign(`../../Product/${product.ProductName}`);
      }}
    >
      {product.ProductName}
    </div>
  );
};

export default DisplayItem;
