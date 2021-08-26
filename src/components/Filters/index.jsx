import React from 'react'
import { Container } from './style'

export function Filters({filterLogic}) {
    return(
        <Container>
            <ul>
                <li onClick={filterLogic}>Chicken</li>
                <li onClick={filterLogic}>Fish</li>
                <li onClick={filterLogic}>Meat</li>
                <li onClick={filterLogic}>Milk</li>
                <li onClick={filterLogic}>Bread</li>
            </ul> 
        </Container>
    )
}