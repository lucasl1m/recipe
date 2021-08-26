import styled from "styled-components";
import '../../index.css';


export const Container = styled.div`
    display: flex;
    width: 224px;
    flex-direction: column;
    box-shadow: 0px 4px 16px 4px rgba(92, 92, 92, 0.15);
    border-radius: 24px;
    margin-top: 16px;
    padding: 24px;
    height: 100%;
    transition: all 0.4s ease;
    transform: translateY(0)
    cursor: pointer;

    &:hover {
        transform: translateY(-0.5rem)
    }
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 224px;
    margin: 0;
    border-radius: 16px;
`
export const Name = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0,0,0,0.5);
    border-radius: 16px;
    color: #ffff;
    font-family: 'Inter', sans-serif;
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