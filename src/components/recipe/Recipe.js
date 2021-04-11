import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="box1">
      <div className="innerContent1">
        <img className="imageCls" src={image} alt="" />
        <h1>{title}</h1>
        <p className="price">Cal : {calories}</p>
        <p>
          <button> View </button>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
