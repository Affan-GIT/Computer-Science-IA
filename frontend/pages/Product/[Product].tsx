import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Footer";

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState([]);
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
          const temp = result.data[0].Variants.split("|");
          setVariants(temp);
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
      <div className="flex w-screen h-full items-center px-40 my-10">
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
          <div className="flex gap-5 items-center mb-5 cursor-pointer">
            {variants.map((variant, key1) => (
              <div
                key={key1}
                className="flex flex-col items-center p-1 rounded-md"
                style={{
                  backgroundColor: variant.split("_")[0].toLowerCase(),
                  border:
                    selectedVariant.split("_")[0] === variant.split("_")[0] &&
                    selectedVariant.split("_")[1] === variant.split("_")[1]
                      ? "2px solid black"
                      : "none",
                }}
                onClick={() => {
                  setSelectedVariant(variant);
                }}
              >
                {variant.split("_")[0][0] +
                  variant.split("_")[0].slice(1).toLowerCase() +
                  " " +
                  variant.split("_")[1]}
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
      <Footer />
    </div>
  );
};

export default Product;
