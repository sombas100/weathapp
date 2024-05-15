import React from "react";
import Form from "react-bootstrap/Form";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <Form.Control
          className="search-input"
          placeholder="Search for a city..."
          type="search"
          id="search"
        />
      </div>
    </>
  );
};

export default Search;
