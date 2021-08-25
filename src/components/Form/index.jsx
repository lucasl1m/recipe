import React from "react";
import { Input } from "../Input";
import { Container } from "./style";

export function Form({ onSubmit, onChange }) {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="searchQueryTemp"
          placeholder="Search"
          onChange={onChange}
        />
        <button>Search</button>
      </form>
    </Container>
  );
}
