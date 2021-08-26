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
      <RecipeName
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {title}
      </RecipeName>

      <CaloriesWrapper>
        <Label>Calories: </Label>
        <span>{calories} Kcal</span>
      </CaloriesWrapper>

      <IngredientsContent>
        <Label>Ingredients</Label>
        {ingredients.map((ingridient, index) => (
          <Ingredient key={index}>{ingridient.text}</Ingredient>
        ))}
      </IngredientsContent>
    </Container>
  );
}
