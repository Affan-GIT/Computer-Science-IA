import React from "react";
import Link from "next/link";

type Props = {
  totalQuantity: number;
  totalPrice: number;
};

const CartCard = ({ totalQuantity, totalPrice }: Props) => {
  return (
    <div className="flex flex-col border-2 border-black w-max px-40 py-10 text-3xl rounded-[10px] items-center gap-5">
      <div>Products: {totalQuantity}</div>
      <div>
        Total: <small className="mr-1">₹</small>
        {totalPrice}
      </div>
      <Link href="/Checkout">
        <button className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5">
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default CartCard;
