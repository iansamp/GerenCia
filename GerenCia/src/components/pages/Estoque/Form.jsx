import styled from "styled-components";
import { useState } from "react";
import Axios from "axios";

const Label = styled.label`
  margin-top: 0.6em;
  font-weight: bold;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  input {
    padding: 0.7em;
    border-radius: 0;
    border: 1px solid black;
  }

  input::placeholder {
    color: #7b7b7b;
  }
`;
const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 0.7em 1.2em;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  &:hover {
    color: #f26b0c;
  }
`;

export default function Form() {
  const [values, setValues] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!values.produto || !values.quantidade || !values.preco_und) {
      return;
    }
  
    Axios.post("http://localhost:3001/register", values)
      .then((res) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  
  return (
    <form>
      <Content>
        <Label htmlFor="produto">Produto:</Label>
        <input
          name="produto"
          type="text"
          placeholder="Insira o tipo de produto"
          required
          onChange={handleChangeValues}
        />
        <Label htmlFor="Quantidade">Quantidade:</Label>
        <input
          name="quantidade"
          type="number"
          placeholder="Insira a quantidade"
          required
          onChange={handleChangeValues}
        />
        <Label htmlFor="Valor unitário">Valor unitário:</Label>
        <input
          name="preco_und"
          type="number"
          placeholder="Insira o valor da unidade"
          step="0.01" 
          min="-9999"
          required
          onChange={handleChangeValues}
        />
      </Content>
      <Button onClick={() => handleSubmit()}>enviar</Button>
    </form>
  );
}
