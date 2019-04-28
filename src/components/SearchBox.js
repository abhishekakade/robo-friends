import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        style={{ marginBottom: "20px" }}
        className="pa3 ma2 ba b--green bg-lightest-blue tc"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        aria-label="Search for robot friends here"
      />
    </div>
  );
};

export default SearchBox;
