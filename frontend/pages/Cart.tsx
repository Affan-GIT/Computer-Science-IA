import React from "react";
import CartCard from "../Components/CartCard";
import CartItem from "../Components/CartItem";
import Logo from "../Components/Logo";
import {
  selectCartState,
  selectTotalPrice,
  selectTotalQuantity,
} from "../store/cartSlice";
import { useSelector } from "react-redux";

type Props = {};

const Cart = (props: Props) => {
  const cartState = useSelector(selectCartState);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="max-w-[90vw] mx-auto flex h-screen flex-col py-5 px-10">
      <div className="flex items-center w-1/2">
        <div className="flex-1">
          <Logo />
        </div>
        <h1 className="text-7xl">Cart</h1>
      </div>
      <div className="flex h-full items-center">
        <div className="flex-1 h-full p-10">
          <div className="w-full h-[80vh] border-2 border-black rounded-[10px] p-10 overflow-y-scroll">
            {cartState.map((product, id) => (
              <CartItem product={product} key={id} />
            ))}
          </div>
        </div>
        <CartCard totalQuantity={totalQuantity} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
