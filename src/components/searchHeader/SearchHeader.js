import React, { useState, useEffect } from "react";
import "./SearchHeader.css";

const SearchHeader = ({getSearch}) => {

  const [search, setSearch] = useState("")

  /** Seeting the search value */
  const updateSearch = (e) => {
    setSearch(e.target.value)
    //getSearch(search)
  }

  const clickSubmit = e => {
    e.preventDefault()
    getSearch(search)
  }

  return (
    <div className="mainWrapper">
      <div className="aboutWrapper">
        <p>
          Want to craft your own creative meat-free meals? Get inspiration from
          other food lovers, or share your own masterpieces! Transform into a
          master chef now.
        </p>
      </div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            value={search} 
            onChange={updateSearch}
          />
          <button type="submit" className="searchButton" onClick={clickSubmit}>
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
