import React from "react";
import Link from "next/link";

type Props = {
  product: { ProductName: string };
  key: number;
};

const DisplayItem = ({ product, key }: Props) => {
  return (
    <div>
      {!product.ProductName ? (
        <Link href={`../../Categories/${product.CategoryName}`}>
          <div
            key={key}
            className="w-[200px] p-[0px] overflow-hidden rounded-[10px] cursor-pointer flex flex-col box-border hover:scale-[105%] transition-all duration-[200ms]"
          >
            <img
              src={`http://localhost:5000/${product.CategoryImg}.webp`}
              alt=""
              className="object-contain block align-top border-4 border-black rounded-t-[10px]"
            />
            <div className="text-2xl py-3 text-center border-b-4 border-l-4 border-r-4 border-black rounded-b-[10px]">
              {product.CategoryName}
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`../../Product/${product.ProductName}`}>
          <div
            key={key}
            className="w-[200px] p-[0px] overflow-hidden rounded-[10px] cursor-pointer flex flex-col box-border hover:scale-[105%] transition-all duration-[200ms]"
          >
            <img
              src={`http://localhost:5000/${product.ProductImg}.webp`}
              alt=""
              className="object-contain block align-top border-4 border-black rounded-t-[10px]"
            />
            <div className="text-2xl py-3 text-center border-b-4 border-l-4 border-r-4 border-black rounded-b-[10px]">
              {product.ProductName}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default DisplayItem;
