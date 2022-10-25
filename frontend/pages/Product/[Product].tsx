import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  useEffect(() => {
    setProduct({
      productName: window.location.pathname.split('/')[2].replace('%20', ' '),
    });
  }, []);
  return (
    <div>
      <Header />
      <div className='flex w-screen h-full items-center px-40 mt-10'>
        <div className='w-[30vw] h-[80vh] bg-black'></div>
        <div className='flex h-[80vh] flex-col ml-40'>
          <h1 className='text-7xl mb-2'>{product.productName}</h1>
          <h2 className='text-3xl mb-5'>{product.productPrice || 0}</h2>
          <p className='max-w-xl mb-5'>
            {product.productDescription} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusantium quas, nobis minima consectetur enim
            necessitatibus rerum sed voluptas id ullam sapiente, magni magnam.
            Distinctio voluptate quasi quod tempore cupiditate recusandae, dicta
            obcaecati, sint accusamus repellendus ipsa consectetur. Vel
            voluptatum consequatur voluptas! Neque ex hic aliquam corrupti
            deleniti eius sed adipisci.
          </p>
          <div className='mb-5'>
            <h3 className='text-3xl mb-2'>Colors:</h3>
            <div className='flex gap-5'>
              <div
                className='w-[50px] h-[50px] bg-red-500 rounded-full cursor-pointer'
                onClick={() => setColor('red')}
              ></div>
              <div
                className='w-[50px] h-[50px] bg-green-500 rounded-full cursor-pointer'
                onClick={() => setColor('green')}
              ></div>
              <div
                className='w-[50px] h-[50px] bg-blue-500 rounded-full cursor-pointer'
                onClick={() => setColor('blue')}
              ></div>
            </div>
          </div>
          <div className='mb-5'>
            <h3 className='text-3xl mb-2'>Sizes:</h3>
            <div className='flex gap-5'>
              <div className='w-[50px] h-[50px] border-2 border-black rounded-full flex items-center justify-center text-2xl cursor-pointer'>
                XL
              </div>
              <div className='w-[50px] h-[50px] border-2 border-black rounded-full flex items-center justify-center text-2xl cursor-pointer'>
                L
              </div>
              <div className='w-[50px] h-[50px] border-2 border-black rounded-full flex items-center justify-center text-2xl cursor-pointer'>
                M
              </div>
            </div>
          </div>
          <div>
            <button className='cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
