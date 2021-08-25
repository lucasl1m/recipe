import React from "react";
import { Container } from "./style";

export function Input({type, name, placeholder, onChange}){
    return(
        <Container>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    )
}