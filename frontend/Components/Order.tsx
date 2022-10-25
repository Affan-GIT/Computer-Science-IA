import React from 'react';

type Props = {
  key: number;
  order: {
    ProductName: string;
    OrderTime: string;
    OrderID: string;
    TotalPrice: string;
  };
};

const Order = ({ key, order }: Props) => {
  return (
    <div
      className='flex items-center w-full p-10 border-2 border-black rounded-[10px] mb-5'
      key={key}
    >
      <div className='flex-1 flex items-center'>
        <div className='mr-5'>
          <div className='w-[100px] h-[100px] bg-black'></div>
        </div>
        <div className=''>
          <div className='text-3xl'>{order.ProductName}</div>
          <div>
            <span>Order Date: </span>
            <span>{order.OrderTime.split('T')[0]}</span>
          </div>
          <div>
            <span>Order Id: </span>
            <span>{order.OrderID}</span>
          </div>
          <div>
            <span>Total Price: </span> <span>{order.TotalPrice}</span>
          </div>
        </div>
      </div>
      <div>
        <button className='cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5'>
          View Invoice
        </button>
      </div>
    </div>
  );
};

export default Order;
