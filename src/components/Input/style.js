import styled from "styled-components";

export const Container = styled.div`
    width: auto;

    & > input{
        width: 216px;
        height: 32px;
        border-radius: 50px;
        padding: 8px 16px;
        font-size: 0.875rem;
        border: 1px solid #FEFEFE;
        box-shadow: 0 0 2px 0 #00000040;
        outline: none;

 
        &:focus {
            border: none;
            box-shadow: none;
            border: 1px solid #6495ED
        }
    }
`