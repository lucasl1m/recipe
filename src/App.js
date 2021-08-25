import React, { useState, useEffect } from "react";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchQueryTemp, setSearchQueryTemp] = useState("");

  const APP_KEY = "d85d015e2ab8dbdc1e547f1cb5316998";
  const APP_ID = "d4d6ae82";
  const API_URI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    if (query.length > 0) {
      fetch(API_URI).then((response) =>
        response.json().then((data) => {
        setRecipes(data.hits)
        console.log(data)
        }))
    }
  }, [query]);

  const handleChange = (event) => {
    setSearchQueryTemp(event.target.value);
    console.log(searchQueryTemp);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setQuery(searchQueryTemp);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name="searchQueryTemp" onChange={handleChange} />
        <button>Search</button>
      </form>
      
      <div>
        {recipes.map((recipe, index) => (
          <RecipeCard 
          key={index}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
