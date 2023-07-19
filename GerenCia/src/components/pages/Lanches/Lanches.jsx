import styled from "styled-components";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import Axios from "axios";
import FormLanches from "./FormLanches";
import Card from "./Card";
=======
import FormLanches from "./FormLanches";
import { useState, useEffect } from "react";
import Axios from "axios";
>>>>>>> f19e8018babc6708b17c84774f40c5bdc5a7aa8e

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 13%;
<<<<<<< HEAD
  h1 {
    margin: 0em 0em 0em 0.7em;
  }
=======

  h1 {
    margin: 0em 0em 0em 0.7em;
  }

>>>>>>> f19e8018babc6708b17c84774f40c5bdc5a7aa8e
  @media (max-width: 1024px) {
    margin-left: 11em;
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
  max-width: 100px;
  margin: 1em 1em 1em 1.8em;
  &:hover {
    color: #f26b0c;
  }
`;
const Content = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background-color: #f9f9f9;
  padding: 0.5em;
  margin-left: 1.5em;
<<<<<<< HEAD
  margin-bottom: 1.5em;
  width: 400px;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`;

export default function Lanches() {
  const [listProduct, setListProduct] = useState();
  const [isVisible, setIsVisible] = useState(false);
=======
  width: 400px;
`;
const Cards = styled.div`
  margin-left: 1em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 275px;
  height: 275px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
  background-color: #999999;

  span {
    padding-left: 1em;
    font-weight: bold;
  }

  h2 {
    padding: 0.5em 0em 0.5em 0.6em;
    border-top: 1px solid black;
  }

  h3 {
    padding: 0.5em 0em 0.5em 0.6em;
    border-bottom: 1px solid black;
  }
  p {
    padding: 1em 0em .5em 0.6em;
    span {
      padding-left: 0em;
    }
  }

  div {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0.5em 0em 0.5em 0.5em;
    p {
      padding: 0em 0em 0em 0.5em;
    }
  }
`;

export default function Lanches() {
  const [isVisible, setIsVisible] = useState(false);
  const [listProduct, setListProduct] = useState();
>>>>>>> f19e8018babc6708b17c84774f40c5bdc5a7aa8e

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (!listProduct) {
      Axios.get("http://localhost:3001/lanches")
        .then((response) => {
          setListProduct(response.data);
        })
        .catch((error) => console.error("Erro ao buscar dados:", error));
    }
  }, [listProduct]);

  return (
    <Div>
      <h1>Lanches</h1>
      <Button onClick={handleClick}>{isVisible ? "fechar" : "Adiconar"}</Button>
      {isVisible && (
        <Content isVisible={isVisible}>
          <FormLanches />
        </Content>
      )}
<<<<<<< HEAD
      <Wrap>
        {typeof listProduct !== "undefined" &&
          listProduct.map((item) => {
            return (
              <Card
                key={item.id}
                listProduct={listProduct}
                setListProduc={setListProduct}
                id={item.id}
                name={item.name}
                descricao={item.descricao}
                valor={item.valor}
                categoria={item.categoria.nome}
              />
            );
          })}
      </Wrap>
=======

      <Cards>
        {typeof listProduct !== "undefined" &&
          listProduct.map((item) => {
            return (
              <Card key={item.id}>
                <span>ID: {item.id}</span>
                <h2>{item.name}</h2>
                <div>
                  Descrição:
                  <p>{item.descricao}</p>
                </div>
                <h3>R$ {item.valor}</h3>
                <p>
                  Categoria: <span>{item.categoria.nome}</span>
                </p>
              </Card>
            );
          })}
      </Cards>
>>>>>>> f19e8018babc6708b17c84774f40c5bdc5a7aa8e
    </Div>
  );
}
