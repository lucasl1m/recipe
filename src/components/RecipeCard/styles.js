import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 272px;
    flex-direction: column;
    box-shadow: 0px 4px 16px 0px rgba(92, 92, 92, 0.15);
    border-radius: 16px;
    padding: 24px;
    height: 100%;
`

export const RecipeName = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 150%;
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 700;
`

export const CaloriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
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
    font-size: 0.875rem;
`