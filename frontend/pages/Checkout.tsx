import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { selectCartState, selectTotalPrice } from "../store/cartSlice";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

type Props = {};

const Checkout = (props: Props) => {
  const cartState = useSelector(selectCartState);
  const totalPrice = useSelector(selectTotalPrice);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [payment, setPayment] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/getUserAddresses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((result) => {
        setAddresses(result.data);
        setSelectedAddress(result.data[0]);
      });
  }, []);

  return (
    <>
      {payment ? (
        <div>
          <div className="text-3xl m-10 text-center">Payment</div>
          <div className="text-3xl m-10 text-center">
            <h2 className="mb-5">Products</h2>
            <div className="mx-auto w-[50vw] h-[40vh] border-2 border-black rounded-sm p-10 overflow-y-scroll">
              {cartState.map((product, id) => (
                <CartItem product={product} key={id} />
              ))}
            </div>
            <h3>Total Price: {totalPrice}</h3>
          </div>
          <div className="text-3xl m-10 text-center">
            <h2>Address</h2>
            <div className="border-2 border-black text-xl w-max mx-auto p-3 my-5 rounded-md">
              {selectedAddress.AddressLine + ", " + selectedAddress.PhoneNumber}
            </div>
          </div>
          <div className=" mx-auto w-max cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white">
            Pay
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="text-3xl m-10 text-center">Checkout</div>
          <div className="ml-10 text-3xl">Choose an Address:</div>
          <div className="flex p-5">
            {addresses.length === 0 ? (
              <div className="text-3xl text-center text-blue-500 underline">
                <Link href="/Profile">Add Addresses to Continue</Link>
              </div>
            ) : (
              ""
            )}
            {addresses.map((address, key) => (
              <div
                key={key}
                className="border-2 border-black p-5 rounded-lg cursor-pointer hover:bg-black hover:text-white  w-[300px] mx-5"
                style={{
                  backgroundColor:
                    selectedAddress.AddressID === address.AddressID
                      ? "black"
                      : "white",
                  color:
                    selectedAddress.AddressID === address.AddressID
                      ? "white"
                      : "black",
                }}
                onClick={() => setSelectedAddress(address)}
              >
                <div>{address.AddressLine}</div>
                <div>{address.PhoneNumber}</div>
              </div>
            ))}
          </div>
          <div
            className="cursor-pointer px-3 py-1 text-white rounded-lg text-2xl bg-black w-max"
            onClick={() => setPayment(true)}
          >
            Checkout
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
