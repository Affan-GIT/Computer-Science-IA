import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MultiSelect from "./MultiSelect";

type Props = { setopenProductModal: Function; productToChange: object };

const ProductModal = ({ setOpenProductModal, productToChange }: Props) => {
  const [variants, setVariants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    productToChange.CategoryName
  );
  const [file, setFile] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products/categories")
      .then((result) => {
        setCategories(
          result.data.map((obj: { CategoryName: string }) => {
            return { value: obj.CategoryName, label: obj.CategoryName };
          })
        );
      });
    axios
      .get("http://localhost:5000/api/v1/products/variants", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((result) => {
        setVariants(
          result.data.map((obj: { Variant: string }) => {
            return { value: obj.Variant, label: obj.Variant };
          })
        );
      });
  }, []);

  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const fileRef = useRef();

  const addProduct = () => {
    axios
      .post("http://localhost:5000/api/v1/products/addProduct", {
        token: localStorage.getItem("jwtToken"),
        ProductName: nameRef.current.value,
        ProductPrice: priceRef.current.value,
        ProductDescription: descRef.current.value,
        CategoryName:
          selectedCategory.length === 0
            ? categories[0].label
            : selectedCategory,
        Variants: selectedVariants.map((variant) => variant.label).join("|"),
      })
      .then(() => {
        setOpenProductModal(false);
        uploadImg();
      })
      .catch((err) => console.log(err));
  };
  const modifyProduct = () => {
    axios
      .post("http://localhost:5000/api/v1/products/modifyProduct", {
        token: localStorage.getItem("jwtToken"),
        OriginalName: productToChange.ProductName,
        ProductName: nameRef.current.value,
        ProductPrice: priceRef.current.value,
        ProductDescription: descRef.current.value,
        CategoryName:
          selectedCategory === ""
            ? categories[0].label
            : productToChange.CategoryName,
        Variants: selectedVariants.map((variant) => variant.label).join("|"),
      })
      .then(() => {
        window.location.reload();
        uploadImg();
      })
      .catch((err) => console.log(err));
  };

  const uploadImg = () => {
    const url = "http://localhost:5000/api/v1/products/updateProductPic";
    const formData = new FormData();
    formData.append("profilePic", file);
    formData.append("fileName", file.name);
    formData.append("ProductName", nameRef.current.value);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <div
        className="absolute w-screen h-screen bg-black bg-opacity-50 cursor-pointer"
        onClick={() => setOpenProductModal(false)}
      ></div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50vw] h-[75vh] bg-white cursor-default rounded-lg">
        <div className="w-full h-full py-10 px-20 b-5 flex flex-col text-3xl items-center justify-evenly text-xl">
          <div>
            <div
              onClick={() => {
                fileRef.current.click();
              }}
            >
              {productToChange.ProductImg ? (
                <img
                  src={`http://localhost:5000/${productToChange.ProductImg}.webp`}
                />
              ) : (
                <div className="w-[150px] h-[150px] bg-black"></div>
              )}
            </div>
            <form>
              <input
                hidden
                ref={fileRef}
                id="photo-upload"
                type="file"
                name="profilePic"
                accept="image/x-png,image/webp,image/jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </form>
            <div>
              <div className="flex gap-3">
                <span>Name:</span>
                <input
                  ref={nameRef}
                  className="w-[100px]"
                  defaultValue={productToChange.ProductName}
                />
              </div>
              <div className="flex gap-1 items-center">
                Price:<small className="text-xl">₹</small>
                <input
                  ref={priceRef}
                  className="w-[100px]"
                  defaultValue={productToChange.ProductPrice}
                />
              </div>
            </div>
          </div>
          <textarea
            ref={descRef}
            className="w-[80%] h-[300px] text-black text-xl"
            defaultValue={productToChange.ProductDescription}
          />
          <div>
            Category:{" "}
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              {categories.map((category) =>
                category.value === productToChange.CategoryName ? (
                  <option selected>{category.value}</option>
                ) : (
                  <option>{category.value}</option>
                )
              )}
            </select>
          </div>
          <div>
            <div className="flex items-center">
              <span> Color:</span>
              <MultiSelect
                options={variants}
                optionSelected={selectedVariants}
                setOptionSelected={setSelectedVariants}
              />
            </div>
          </div>
          {productToChange.ProductName === "" ? (
            <button
              className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl"
              onClick={() => addProduct()}
            >
              Add
            </button>
          ) : (
            <button
              className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl"
              onClick={() => modifyProduct()}
            >
              Change
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
