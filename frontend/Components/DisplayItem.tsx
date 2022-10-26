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
            className="w-max h-max p-5 border-2 border-black rounded-[10px] m-5 cursor-pointer"
          >
            {product.CategoryName}
          </div>
        </Link>
      ) : (
        <Link href={`../../Product/${product.ProductName}`}>
          <div
            key={key}
            className="w-max h-max p-5 border-2 border-black rounded-[10px] m-5 cursor-pointer"
          >
            <div>
              <img
                src={`http://localhost:5000/${product.ProductImg}.webp`}
                alt=""
              />
            </div>
            <div>{product.ProductName}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default DisplayItem;
