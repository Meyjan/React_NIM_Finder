import React, { Component } from "react";

class Search extends Component {
  state = {
    query: undefined,
    result: {
      name: undefined,
      nim_tpb: undefined,
      nim_jur: undefined,
      prodi: undefined
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>Search Component</h1>
      </React.Fragment>
    );
  }
}

export default Search;
