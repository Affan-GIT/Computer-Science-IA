import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DisplayItem from "./DisplayItem";

type Props = {};

const LandingProducts = (props: Props) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products/allProducts")
      .then((result) => setAllProducts(result.data));
  }, []);
  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-3 max-w-7xl">
        {allProducts.map((product, key) => (
          <DisplayItem product={product} key={key} />
        ))}
      </div>
    </div>
  );
};

export default LandingProducts;
