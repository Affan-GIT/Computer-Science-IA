import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState({});
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    setProduct({
      productName: window.location.pathname
        .split("/")[2]
        .replaceAll("%20", " "),
    });
  }, []);
  useEffect(() => {
    product.productName &&
      axios
        .get(
          `http://localhost:5000/api/v1/products/Product/${product.productName}`
        )
        .then((result) => {
          setProduct(result.data[0]);
          result.data[0].Variants.split("|").forEach((variant) =>
            Object.keys(variants).includes(`${variant.split("_")[1]}`)
              ? variants[`${variant.split("_")[1]}`].push(variant.split("_")[0])
              : (variants[`${variant.split("_")[1]}`] = [variant.split("_")[0]])
          );
        });
  }, [product]);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      addToCart({
        ProductName: product.ProductName,
        ProductVariant: selectedVariant.split("_").join(", "),
        price: product.ProductPrice,
        ProductImg: product.ProductImg,
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="flex w-screen h-full items-center px-40 mt-10">
        {product.ProductImg ? (
          <div>
            <img
              src={`http://localhost:5000/${product.ProductImg}.webp`}
              alt=""
            />
          </div>
        ) : (
          <div className="w-[30vw] h-[80vh] bg-black"></div>
        )}

        <div className="flex h-[80vh] flex-col ml-40">
          <h1 className="text-7xl mb-2">{product.ProductName}</h1>
          <h2 className="text-3xl mb-5">
            <small className="mr-1">₹</small>
            {product.ProductPrice || 0}
          </h2>
          <p className="max-w-xl mb-5">{product.ProductDescription}</p>
          <div className="flex gap-5 items-center mb-5">
            <h3>Sizes: </h3>
            {Object.keys(variants).map((size, key1) => (
              <div key={key1}>
                <h3>{size}</h3>
                <div>
                  {variants[size].map((color, key2) => (
                    <div
                      key={key2}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => {
                        setSelectedVariant(color + "_" + size);
                      }}
                    >
                      <div
                        className={"w-[30px] h-[30px] rounded-full"}
                        style={{
                          backgroundColor: color,
                          border:
                            selectedVariant.split("_")[0] === color &&
                            selectedVariant.split("_")[1] === size
                              ? "3px solid black"
                              : "",
                        }}
                      ></div>
                      <small
                        className="text-lg"
                        style={{
                          color:
                            selectedVariant.split("_")[0] === color &&
                            selectedVariant.split("_")[1] === size
                              ? "black"
                              : color,
                        }}
                      >
                        {color}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5"
              onClick={() => {
                addHandler();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
