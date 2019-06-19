import React from "react";

const SearchForm = props => (
  <form onSubmit={props.onSearch}>
    <input type="text" name="finder" placeholder="Insert NIM or Name" />
    <button>Click to Search</button>
  </form>
);

export default SearchForm;
