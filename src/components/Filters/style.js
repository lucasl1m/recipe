import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > ul {
        display: flex;
        align-items: center;
        grid-gap: 16px;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 24px 0px;
        padding: 0;

        & > li {
            display: inline-block;
            width: auto;
            min-height: 0;
            overflow: hidden;
            max-width: 100%;
            border: 1px solid rgba(170, 170, 170);
            padding: 8px 15px;
            border-radius: 80px;
            color: #111;
            font-size: 0.9rem;
            transition: all 0.2s ease;
            cursor: pointer;

            & :hover {
                background: #f9748f;
                color: #fff;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
              }
        }
    }
`