import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="wrapper">
      <div className="column">
        <div className="title-container__title">
          <h1>Stalk your friends here!</h1>
          <p>React NIM Finder</p>
          <h3>-----------------------------------------------</h3>
          <h4>Though you have to login first</h4>
          <h5>(or register if you haven't)</h5>
        </div>
      </div>
    </div>
  );
};

export default Title;
