import React, { Component } from "react";

const SearchForm = props => (
  <form onSubmit={props.onRequest}>
    <input type="text" name="findNIM" placeholder="Insert NIM or Name" />
  </form>
);

export default SearchForm;
