import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 224px;
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
    font-family: 'Dancing Script'
    width: auto;
    height: 224px;
    color: #ffff;
    margin: 0;
    border-radius: 16px;
    font-size: 1.25rem;
    font-weight: bold;
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

export const IngredientsContent= styled.div`
    margin-top: 8px;
`

export const Ingredient = styled.p`
    color: #242424;
    font-size: 0.875rem;
`