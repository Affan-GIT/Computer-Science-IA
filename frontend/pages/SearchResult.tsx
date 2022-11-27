import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import DisplayItem from "../Components/DisplayItem";
import Footer from "../Components/Footer";

type Props = {};

const SearchResult = (props: Props) => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/products/allProducts?query=${localStorage.getItem(
          "query"
        )}`
      )
      .then((result) => {
        setSearch(false);
        setResults(result.data);
      });
  }, [search]);
  return (
    <div>
      <Header
        searchInitialVal={localStorage.getItem("query")}
        setSearch={setSearch}
      />
      <div>
        {results.length === 0 ? (
          <div className="text-center my-5 bold text-3xl">No results found</div>
        ) : (
          <div className="flex justify-center my-10">
            <div className="grid grid-cols-3 ">
              {results.map((result) => (
                <DisplayItem product={result} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
