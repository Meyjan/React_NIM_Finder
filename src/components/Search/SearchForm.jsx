import React from "react";

const SearchForm = props => (
  <form onSubmit={props.onSearch}>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Query
        </span>
      </div>
      <input
        type="text"
        name="finder"
        className="form-control"
        placeholder="Query..."
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <button className="btn btn-secondary btn-sm">Stalk!</button>
  </form>
);

export default SearchForm;
