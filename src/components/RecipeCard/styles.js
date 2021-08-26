import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 240px;
    flex-direction: column;
    box-shadow: 0px 4px 16px 0px rgba(92, 92, 92, 0.15);
    border-radius: 16px;
    padding: 24px;
    height: 100%;
`

export const RecipeName = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 240px;
    height: 240px;
    color: #ffff;
    margin: 0;
    border-radius: 16px;
    background-color: rgba(0,0,0,0.4);
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 120%;
`

export const Label = styled.label`
    color: #242424;
    font-size: 1rem;
    font-weight: 700;
`

export const CaloriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
    margin-top: 8px;
`

export const ImageWrapper = styled.div`
    & > img {
        width: 100%;
        border-radius: 16px
    }
`

export const IngredientsContent= styled.div`
    margin-top: 8px;
`

export const Ingredient = styled.p`
    color: #242424;
    font-size: 0.875rem;
`