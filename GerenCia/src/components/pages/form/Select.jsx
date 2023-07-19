import styled from "styled-components";
import { useState } from "react";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  select {
    padding: 0.7em;
    border-radius: 0;
    border: none;
  }
`;
const Label = styled.label`
  margin-bottom: 0.6em;
  font-weight: bold;
`;
const SelectCat = styled.select`
  padding: 0.7em;
  border-radius: 0;
  border: none;
`;

export default function Select({ text, name, tipo_no, options, handleChangeValues, value }) {
  const [estado] = useState();

  return (
    <Content>
      <Label htmlFor={name}>{text}</Label>
      <SelectCat
        name={tipo_no}
        id={name}
        onChange={handleChangeValues}
        value={value}
      >
        <option>Selecione uma opção</option>
        {options && options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </SelectCat>
    </Content>
  );
}
