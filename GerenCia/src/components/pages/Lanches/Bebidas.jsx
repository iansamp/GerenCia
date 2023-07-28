import styled from "styled-components";
import { useState } from "react";
import FormBabidas from "./FormBabidas";
import BebidasTab from "./BebidasTab";

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

export default function Bebidas() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const tabs = [
    {
      label: "Água",
    },
    {
      label: "Cerveja",
    },
    {
      label: "Energético",
    },
    {
      label: "Refrigerante",
    },
    {
      label: "Suco",
    },
    {
      label: "Vinho",
    },
    {
      label: "Whisky",
    },
  ];

  return (
    <Div>
      <h1>Bebidas</h1>
      <Button onClick={handleClick}>{isVisible ? "fechar" : "Adiconar"}</Button>
      {isVisible && (
        <Content isVisible={isVisible}>
          <FormBabidas tipo="bebida" />
        </Content>
      )}
      <div>
        <h1>Menu</h1>
        <BebidasTab tabs={tabs} />
      </div>
    </Div>
  );
}
