import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

type Props = {};

const VariantModal = ({ setOpenVariantModal }: Props) => {
  const [variants, setVariants] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const getVariants = async () => {
    axios
      .get("http://localhost:5000/api/v1/products/variants", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((result) => {
        setVariants(result.data.map((obj: { Variant: string }) => obj.Variant));
        setShowErr(false);
      });
  };
  useEffect(() => {
    getVariants();
  }, []);

  const variantRef = useRef();

  const addVariant = async () => {
    axios
      .post("http://localhost:5000/api/v1/products/addVariant", {
        token: localStorage.getItem("jwtToken"),
        Variant: variantRef.current.value,
      })
      .then((res) =>
        res.data === "Category Already Exists"
          ? setShowErr(true)
          : getVariants()
      )
      .catch((err) => console.log(err));
  };

  const removeVariant = async (Variant) => {
    axios
      .post("http://localhost:5000/api/v1/products/removeVariant", {
        token: localStorage.getItem("jwtToken"),
        Variant: Variant,
      })
      .then(getVariants())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        className="absolute w-screen h-screen bg-black bg-opacity-50 cursor-pointer"
        onClick={() => setOpenVariantModal(false)}
      ></div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[25vw] h-[50    vh] bg-white cursor-default rounded-lg">
        <div className="w-full h-full p-10 text-lg">
          <h1 className="text-3xl">Categories</h1>
          <div className="border-2 border-black rounded-md p-5">
            {variants.map((color, key) => (
              <div key={key} onClick={() => removeVariant(color)}>
                {color}
              </div>
            ))}
          </div>
          <div>
            <input ref={variantRef} type="text" />
            <input type="submit" value="Add" onClick={() => addVariant()} />
          </div>
        </div>
        {showErr ? <div>Color Already Exists</div> : ""}
      </div>
    </div>
  );
};

export default VariantModal;
