import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchPart from "./SearchPart";

const searchNIM = `https://api.stya.net/nim/byid?query=`;
const searchName = `https://api.stya.net/nim/byname?name=`;
const numRegex = new RegExp(/^\d+$/);

class Search extends Component {
  state = {
    found: 0,
    result: undefined,
    totalPage: 0
  };

  handleSearch = async e => {
    e.preventDefault();

    const searchQuery = e.target.elements.finder.value;

    let urlLink = numRegex.test(searchQuery) ? searchNIM : searchName;
    urlLink += searchQuery;
    urlLink += `&count=10`;

    let search_call = await fetch(urlLink, {
      method: "GET",
      headers: {
        "Auth-Token": this.props.authToken
      }
    });
    let data = await search_call.json();

    if (data.code <= 0) {
      this.setState({ found: -1 });
    } else {
      this.setState({ found: 1 });

      let temp = [];
      let resp = data.code;
      let i = 1;

      while (resp > 0) {
        for (const i in data.payload) {
          temp.push([
            data.payload[i].name,
            data.payload[i].nim_tpb,
            data.payload[i].nim_jur,
            data.payload[i].prodi
          ]);
        }
        let urlLink2 = urlLink + `&page=` + i;
        search_call = await fetch(urlLink2, {
          method: "GET",
          headers: {
            "Auth-Token": this.props.authToken
          }
        });
        data = await search_call.json();
        resp = data.code;
        i += 1;
      }

      this.setState({ result: temp });
      this.setState({ totalPage: resp === 0 ? i - 1 : i });
    }
  };

  handleView = () => {
    return <h3>Handle View...</h3>;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Search for NIM or Name</h1>
        <SearchForm onSearch={this.handleSearch} />
        {this.state.found === -1 && <p>Nothing Found...</p>}
        {this.state.found === 1 && <p>Results...</p>}
        {this.state.found === 1 && (
          /* Handling view of result state */ <p>Handler</p>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
