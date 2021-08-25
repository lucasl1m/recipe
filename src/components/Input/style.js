import styled from "styled-components";

export const Container = styled.div`
    width: auto;

    & > input{
        width: 196px;
        border-radius: 50px;
        padding: 8px 16px;
        font-size: 0.875rem;
        border: 1px solid #FEFEFE;
        box-shadow: 0 0 2px 0 #00000040;

        & ::focus {
            border: none;
            box-shadow: none;
        }
    }
`