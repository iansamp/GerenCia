import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import FormLanches from "./FormLanches";
import Card from "./Card";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 13%;
  h1 {
    margin: 0em 0em 0em 0.7em;
  }
  h1 {
    margin: 0em 0em 0em 0.7em;
  }
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
  margin-bottom: 1.5em;
  width: 400px;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`;
const Cards = styled.div`
  margin-left: 1em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export default function Lanches() {
  const [isVisible, setIsVisible] = useState(false);
  const [listProduct, setListProduct] = useState();

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
      <h1>Produtos</h1>
      <Button onClick={handleClick}>{isVisible ? "fechar" : "Adiconar"}</Button>
      {isVisible && (
        <Content isVisible={isVisible}>
          <FormLanches />
        </Content>
      )}
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
    </Div>
  );
}
