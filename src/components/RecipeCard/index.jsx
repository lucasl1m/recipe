import React from "react";
import {
  CaloriesWrapper,
  Container,
  ImageWrapper,
  Ingredient,
  IngredientsContent,
  Label,
  RecipeName,
} from "./styles";

export function RecipeCard({ title, calories, image, ingredients }) {
  return (
    <Container>

      <ImageWrapper>
        <RecipeName>{title}</RecipeName>
        <img src={image} alt="" />
      </ImageWrapper>

      <CaloriesWrapper>
        <Label>Calories: </Label>
        <span>{calories} Kcal</span> 
      </CaloriesWrapper>

      <IngredientsContent>
        <Label>Ingredients</Label>
          {ingredients.map((ingridient, index) => (
            <Ingredient key={index}>
              {ingridient.text}
            </Ingredient>
          ))}
      </IngredientsContent>
    </Container>
  );
}
