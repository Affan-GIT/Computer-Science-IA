import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import DisplayItem from "../Components/DisplayItem";

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
          <div>No results found</div>
        ) : (
          <div>
            {results.map((result) => (
              <DisplayItem product={result} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
