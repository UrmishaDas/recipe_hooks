import React, { useState, useEffect } from "react";
import Header from "../header/Header";
//import LoginHeader from "../loginHeader/LoginHeader";
import SearchHeader from "../searchHeader/SearchHeader";
import Recipe from "../recipe/Recipe";

import "./Home.css";

export default function Home() {
  const APP_ID = "ff05dd39";
  const APP_KEY = "4323fed93a04417d1d6312aea6016a4a";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data)
  };

  const updateSearch = (receivedValue) => {
    setSearch(receivedValue);
    finalRecipes();
  };

  const finalRecipes = () => {
    setQuery(search);
  };

  return (
    <div>
      <Header />
      <SearchHeader getSearch={updateSearch} />

      <section className="content_section1">
        <div id="wrap1">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
