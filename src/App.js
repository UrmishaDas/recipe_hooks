import React, {useState, useEffect} from "react"
import Recipe from './components/recipe/Recipe'
import Home from './components/home/Home'
import './App.css';

const App = () => {

  // const APP_ID = "ff05dd39"
  // const APP_KEY = "4323fed93a04417d1d6312aea6016a4a"

  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  // const [recipes, setRecipes] = useState([]) 
  // const [search, setSearch] = useState("")
  // const [query, setQuery] = useState("chicken")

  // useEffect(() => {
  //   getRecipes()
  // }, [query])

  //   const getRecipes = async () => {
  //     const response = await fetch(
  //       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  //     )

  //     const data = await response.json()
  //     setRecipes(data.hits)
  //     //console.log(data)
  //   }

  //   const updateSearch = e => {
  //     setSearch(e.target.value)
  //   }

  //   const onSubmit = e => {
  //     e.preventDefault()
  //     setQuery(search)
  //   }

  // return(
    
  //   <div className="App">
  //     <h1> Food Recipes </h1>
  //     <form className="search-form" onSubmit={onSubmit}>
  //       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
  //       <button className="search-button" type="submit" > Search </button>
  //     </form>
  //     {
  //       recipes.map(recipe => (
  //         <Recipe 
  //           key={recipe.recipe.label} 
  //           title={recipe.recipe.label}
  //           calories={recipe.recipe.calories}
  //           image={recipe.recipe.image} />
  //       ))
  //     }
  //   </div>
  
  // )
  return(
    <Home />
  )
}

export default App;
