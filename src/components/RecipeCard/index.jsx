import React from "react";
import {
  CaloriesWrapper,
  Container,
  Ingredient,
  IngredientsContent,
  Label,
  Name,
  ImageWrapper,
} from "./styles";

export function RecipeCard({ title, calories, image, ingredients }) {
  return (
    <Container>
      <ImageWrapper
        style={{
          background: `url(${image})`,
          backgroundSize: `cover`,
        }}
      >
        <Name>{title}</Name>
      </ImageWrapper>

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
