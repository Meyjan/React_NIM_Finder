import React from "react";

const SearchPart = ({ props }) => {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.nim_tpb}</p>
      <p>{props.nim_jur}</p>
      <p>{props.prodi}</p>
    </React.Fragment>
  );
};

export default SearchPart;
