import React from "react";
import { removeFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

type Props = {
  product: {
    ProductName: string;
    ProductVariant: string;
    price: number;
    previewImg: string;
  };
  key: number;
};

const CartItem = ({ product, key }: Props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(
      removeFromCart({
        ProductName: product.ProductName,
      })
    );
  };
  return (
    <div
      key={key}
      className="w-full py-10 px-5 border-2 border-black rounded-[10px] mb-5 flex text-3xl items-center"
    >
      <div className="flex flex-1 items-center">
        <div className="mr-10">
          {product.ProductImg ? (
            <div>
              <img
                src={`http://localhost:5000/${product.ProductImg}.webp`}
                alt=""
              />
            </div>
          ) : (
            <div className="w-[75px] h-[75px] bg-black"></div>
          )}
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div>{product.ProductName}</div>
            <div className="text-xl">{product.ProductVariant}</div>
          </div>
          <div className="mr-10">
            <span className="text-2xl mr-[-5px]">₹</span> {product.price}
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl"
        onClick={() => {
          removeHandler();
        }}
      >
        Remove
      </div>
    </div>
  );
};

export default CartItem;
