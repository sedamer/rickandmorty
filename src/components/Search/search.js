import React from "react";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex align-items-center justify-content-center ">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        className="rounded-2  w-25 h-100 p-1 m-2"
        placeholder="Search"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="btn btn-primary m-2 rounded-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
