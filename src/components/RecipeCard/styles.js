import styled from "styled-components";

export const Container = styled.div`
    width: 272px;
    box-shadow: 0px 4px 16px 0px rgba(92, 92, 92, 0.15);
    border-radius: 8px;
    padding: 16px 24px;
`

export const RecipeName = styled.h1`
    font-size: 24px;
    text-align: center
`

export const Label = styled.label`
`

export const Calories = styled.p`
    & > span {
        font-weight: bold;
    }
`

export const ImageWrapper = styled.div`
    & > img {
        width: 100%;
        border-radius: 8px
    }
`

export const IngredientsContent= styled.div`
`

export const IngredientsWrapper = styled.div`
`

export const Ingredient = styled.p`
`