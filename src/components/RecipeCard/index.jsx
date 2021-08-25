import React from "react";
import {
  CaloriesWrapper,
  Container,
  ImageWrapper,
  Ingredient,
  IngredientsContent,
  IngredientsWrapper,
  Label,
  RecipeName,
} from "./styles";

export function RecipeCard({ title, calories, image, ingredients }) {
  return (
    <Container>
      <RecipeName>{title}</RecipeName>

      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>

      <CaloriesWrapper>
        <Label>Calories: </Label>
        <span>{calories} Kcal</span> 
      </CaloriesWrapper>

      <IngredientsContent>
        <Label>Ingredients</Label>
        <IngredientsWrapper>
          {ingredients.map((ingridient, index) => (
            <Ingredient key={index}>
              {ingridient.text}
            </Ingredient>
          ))}
        </IngredientsWrapper>
      </IngredientsContent>
    </Container>
  );
}
