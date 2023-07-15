import styled from "styled-components";
import { useState, useEffect } from "react";
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
const SelectCat = styled.select`
  padding: 0.7em;
  border: 1px solid black;
  margin-bottom: 1em;
  margin-top: 1em;
  &::placeholder {
    color: #7b7b7b;
  }
`;

export default function FormLanches() {
  const [values, setValues] = useState({});
  const [categories, setCategories] = useState();
  const [estado] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!values.nome || !values.descricao || !values.valor || !values.tipo_no) {
      return;
    }

    Axios.post("http://localhost:3001/registerLanches", values)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  // Buscar categoria do DB
  useEffect(() => {
    if (!categories) {
      Axios.get("http://localhost:3001/categorias")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => console.error("Erro ao buscar dados:", error));
    }
  }, [categories]);


  return (
    <form>
      <Content>
        <SelectCat
          name="tipo_no"
          value={estado}
          onChange={handleChangeValues}
        >
          <option>Selecione uma categoria</option>
          {categories &&
            categories.map((option) => (
              <option value={option.id} key={option.name}>
                {option.name}
              </option>
            ))}
        </SelectCat>
        <Label htmlFor="produto">Nome do produto:</Label>
        <input
          name="nome"
          type="text"
          placeholder="Insira o tipo de produto"
          required
          onChange={handleChangeValues}
        />
        <Label htmlFor="Quantidade">Descrição do produto:</Label>
        <input
          name="descricao"
          type="text"
          placeholder="Insira a quantidade"
          required
          onChange={handleChangeValues}
        />
        <Label htmlFor="Valor unitário">Valor do produto:</Label>
        <input
          name="valor"
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
