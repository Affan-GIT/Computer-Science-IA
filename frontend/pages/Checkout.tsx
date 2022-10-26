import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

type Props = {};

const Checkout = (props: Props) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
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
  const checkout = () => {};
  return (
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
        onClick={() => checkout()}
      >
        Checkout
      </div>
    </div>
  );
};

export default Checkout;
