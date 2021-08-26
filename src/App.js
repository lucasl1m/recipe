import React, { useState, useEffect } from "react";
import { Filters } from "./components/Filters";
import { Input } from "./components/Input";
import { RecipeCard } from "./components/RecipeCard";
import { Container, Header, RecipesWrapper, Title } from "./style";
import './index'

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
          setRecipes(data.hits);
          console.log(data);
        })
      );
    }
  }, [query]);

  const handleChange = (event) => {
    setSearchQueryTemp(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setQuery(searchQueryTemp);
  };

  const filterLogic = event => {
    event.target.classList.toggle('active-filter')
    const li = event.target
    if(li.classList.contains('active-filter')){
      setQuery(li.innerText)
    }
  }

  return (
    <Container>
      <Header>
         <Title>Recipes Finder</Title>
        <form onSubmit={submitForm}>
          <Input
            type="text"
            name="searchQueryTemp"
            placeholder="Search recipes"
            onChange={handleChange}
          />
        </form>

        <Filters filterLogic={filterLogic}/>
      </Header>
 
      <RecipesWrapper>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </RecipesWrapper>
    </Container>
  );
}

export default App;
