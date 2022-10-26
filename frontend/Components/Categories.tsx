import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    axios
      .get("http://localhost:5000/api/v1/products/categories")
      .then((result) => {
        setCategories(
          result.data.map((obj: { CategoryName: string }) => obj.CategoryName)
        );
      });
  };

  return (
    <div className="w-full max-w-7xl justify-items-center mx-auto grid grid-cols-3 lg:flex justify-evenly z-0 mt-10">
      {categories.map((category, index) => (
        <Link href={`/Categories/${category}`}>
          <span
            className="px-5 py-1 cursor-pointer whitespace-nowrap"
            key={index}
          >
            {category}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
