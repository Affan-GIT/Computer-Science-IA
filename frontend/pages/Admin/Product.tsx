import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  key: number;
  product: {};
  setOpenProductModal: Function;
  setProductToChange: Function;
};

const Product = ({
  key,
  product,
  setAllProducts,
  setOpenProductModal,
  setProductToChange,
}: Props) => {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const temp = [];
    product.Variants.split("|").map((variant) => {
      !temp.includes(variant.split("_")[0])
        ? temp.push(variant.split("_")[0])
        : "";
    });
    setColors(temp);
    temp = [];
    product.Variants.split("|").map((variant) => {
      !temp.includes(variant.split("_")[1])
        ? temp.push(variant.split("_")[1])
        : "";
    });
    setSizes(temp);
  }, []);

  const removeProduct = () => {
    axios
      .post("http://localhost:5000/api/v1/products/removeProduct", {
        token: localStorage.getItem("jwtToken"),
        ProductName: product.ProductName,
      })
      .then(setAllProducts([]))
      .catch((err) => console.log(err));
  };
  return (
    <div
      key={key}
      className="w-full py-10 px-5 border-2 border-black rounded-[10px] mb-5 flex text-3xl items-center"
    >
      <div className="flex flex-1 items-center">
        <div className="mr-10">
          {product.ProductImg ? (
            <img src={`http://localhost:5000/${product.ProductImg}.webp`} />
          ) : (
            <div className="w-[75px] h-[75px] bg-black"></div>
          )}
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div>{product.ProductName}</div>
          </div>
          <div className="mr-10 flex items-center">
            <small className="text-xl mr-1">₹</small> {product.ProductPrice}
          </div>
        </div>
      </div>
      <div className="text-xl">
        {product.ProductDescription.substr(0, 200) + "..."}
      </div>
      <div className="whitespace-nowrap mx-10">{product.CategoryName}</div>
      <div className="flex flex-col mr-10 gap-1">
        <div className="text-lg flex">
          {colors.map((color, key) => (
            <div
              key={key}
              className={`rounded-full border-2 border-black w-[30px] h-[30px] flex items-center justify-center p-5`}
              style={{
                backgroundColor: color.toLowerCase(),
              }}
            ></div>
          ))}
        </div>
        <div className="flex">
          {sizes.map((size, key) => (
            <div
              key={key}
              className={`rounded-full border-2 border-black w-[30px] h-[30px] flex items-center justify-center p-5`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div
        className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mr-5"
        onClick={() => removeProduct()}
      >
        Remove
      </div>
      <div
        className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl"
        onClick={() => {
          setOpenProductModal(true);
          setProductToChange(product);
        }}
      >
        Change
      </div>
    </div>
  );
};

export default Product;
