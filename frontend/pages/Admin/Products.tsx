import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import ProductModal from "./ProductModal";
import CategoryModal from "./CategoryModal";
import VariantModal from "./VariantModal";
import Link from "next/link";

type Props = {};

const Products = (props: Props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [productToChange, setProductToChange] = useState({});
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openVariantModal, setOpenVariantModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products/allProducts")
      .then((result) => setAllProducts(result.data));
  }, [openProductModal, allProducts]);
  return (
    <div>
      {openProductModal ? (
        <ProductModal
          setOpenProductModal={setOpenProductModal}
          productToChange={productToChange}
        />
      ) : openCategoryModal ? (
        <CategoryModal setOpenCategoryModal={setOpenCategoryModal} />
      ) : openVariantModal ? (
        <VariantModal setOpenVariantModal={setOpenVariantModal} />
      ) : (
        ""
      )}
      <div>
        <div className="py-10 px-5 flex gap-5">
          <div className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white">
            <Link href="../../Landing">Go Back to Website</Link>
          </div>
          <button
            className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
            onClick={() => {
              setOpenProductModal(true);
              setProductToChange({
                ProductName: "",
                ProductPrice: 0,
                ProductDescription: "",
                Variants: "",
                CategoryName: "",
                previewImg: "",
              });
            }}
          >
            Add New Product
          </button>
          <button
            className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
            onClick={() => {
              setOpenCategoryModal(true);
            }}
          >
            Categories
          </button>
          <button
            className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
            onClick={() => {
              setOpenVariantModal(true);
            }}
          >
            Variations
          </button>
        </div>
        <div className="p-10">
          {allProducts.map((product, key) => (
            <Product
              key={key}
              product={product}
              setAllProducts={setAllProducts}
              setOpenProductModal={setOpenProductModal}
              setProductToChange={setProductToChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
