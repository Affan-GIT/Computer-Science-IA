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
        res.data === "Variant Already Exists" ? setShowErr(true) : getVariants()
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
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50vw] h-[90vh] bg-white cursor-default rounded-lg">
        <div className="w-full h-full p-10 text-lg">
          <h1 className="text-5xl text-center mb-5">Variants</h1>
          <h2 className="text-red-500 text-xl text-center mb-5">
            {showErr ? <div>Variant Already Exists</div> : ""}
          </h2>
          <div className="border-2 border-black rounded-md p-5 h-[70%] overflow-y-scroll">
            {variants.map((color, key) => (
              <div key={key} className="flex items-center justify-center mb-10">
                <div className="flex-1">{color}</div>
                <button
                  onClick={() => removeVariant(color)}
                  className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <input
              ref={variantRef}
              type="text"
              className="border-2 border-black outline-none rounded-md px-2 py-1 text-2xl"
            />
            <input
              type="submit"
              value="Add"
              onClick={() => addVariant()}
              className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantModal;
