import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

type Props = {};

const CategoryModal = ({ setOpenCategoryModal }: Props) => {
  const [categories, setCategories] = useState([]);
  const [categoryPics, setCategoryPics] = useState([]);

  const [showErr, setShowErr] = useState(false);
  const getCategories = async () => {
    axios
      .get("http://localhost:5000/api/v1/products/categories")
      .then((result) => {
        setCategories(result.data);
        setShowErr(false);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  const categoryRef = useRef();
  const fileRef = useRef();

  const addCategory = async () => {
    axios
      .post("http://localhost:5000/api/v1/products/addCategory", {
        token: localStorage.getItem("jwtToken"),
        CategoryName: categoryRef.current.value,
      })
      .then((res) =>
        res.data === "Category Already Exists"
          ? setShowErr(true)
          : getCategories()
      )
      .catch((err) => console.log(err));
  };

  const removeCategory = async (CategoryName) => {
    axios
      .post("http://localhost:5000/api/v1/products/removeCategory", {
        token: localStorage.getItem("jwtToken"),
        CategoryName: CategoryName,
      })
      .then(getCategories())
      .catch((err) => console.log(err));
  };
  const handleChange = (e, category) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/v1/products/updateCategoryPic";
    const formData = new FormData();
    formData.append("profilePic", e.target.files[0]);
    formData.append("fileName", e.target.files[0].name);
    formData.append("CategoryName", category);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    };
    axios.post(url, formData, config).then((response) => {
      getCategories();
    });
  };

  return (
    <div>
      <div
        className="absolute w-screen h-screen bg-black bg-opacity-50 cursor-pointer"
        onClick={() => setOpenCategoryModal(false)}
      ></div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50vw] h-[90vh] bg-white cursor-default rounded-lg">
        <div className="w-full h-full p-10 text-lg">
          <h1 className="text-5xl text-center mb-5">Categories</h1>
          <h2 className="text-red-500 text-xl text-center mb-5">
            {showErr ? <div>Category Already Exists</div> : ""}
          </h2>
          <div className="border-2 border-black rounded-md p-5 h-[70%] overflow-y-scroll">
            {categories.map((category, key) => (
              <div key={key} className="flex items-center mb-10">
                <div className="border-2 border-black rounded-md overflow-hidden object-contain">
                  <img
                    src={`http://localhost:5000/${category.CategoryImg}.webp`}
                    alt=""
                    className="w-[70px]"
                  />
                </div>
                <div className="text-3xl mx-10 flex-1">
                  {category.CategoryName}
                </div>
                <form>
                  <input
                    hidden
                    ref={fileRef}
                    id="photo-upload"
                    type="file"
                    name="profilePic"
                    accept="image/x-png,image/webp,image/jpeg"
                    onChange={(e) => handleChange(e, category.CategoryName)}
                  />
                </form>
                <button
                  onClick={() => {
                    fileRef.current.click();
                  }}
                  className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-xl mx-10 hover:bg-black hover:text-white"
                >
                  Upload Image
                </button>
                <button
                  onClick={() => removeCategory(category.CategoryName)}
                  className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <input
              ref={categoryRef}
              type="text"
              className="border-2 border-black outline-none rounded-md px-2 py-1 text-2xl"
            />
            <input
              type="submit"
              value="Add"
              onClick={() => addCategory()}
              className="cursor-pointer px-3 py-1 bg-white text-black border-2 border-black rounded-[5px] text-2xl hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
