import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    width: auto;
    overflow: auto;
    margin: 24px 32px;

    & > form {
        display: flex;
        margin-top: 24px;

        & > button {
            display: flex;
            border: none;
            border-radius: center;
            height: 40px;
            
        }
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40vh;
`

export const RecipesWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-wrap: wrap;
    grid-gap: 32px;
`

export const Title = styled.h1`
    font-size: 6vw;
    text-align: center;
    margin: 0px 0px 24px 0px;
`