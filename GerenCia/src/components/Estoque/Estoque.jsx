import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";
import styled from "styled-components";

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
  margin: 1em;
  &:hover {
    color: #f26b0c;
  }
`;

const Content = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background-color: #f9f9f9;
  padding: 0.5em;
  margin-left: 24.5em;
  width: 400px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  caption {
    font-size: 1.5em;
    font-weight: bolder;
    padding: 1em;
    text-transform: uppercase;
  }

  th{
    background-color:white;
  }

  th,
  td {
    border: 1px solid black;
    padding: .2em;
  }

  tr:nth-child(even) {
    background-color: white;
  }
`;

const ToggleButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Div>
      <Button onClick={handleClick}>{isVisible ? "fechar" : "Adiconar"}</Button>
      {isVisible && (
        <Content isVisible={isVisible}>
          <Form />
        </Content>
      )}

      <Table>
        <caption>Estoque</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Qnt</th>
            <th>Preço Total</th>
            <th>Preço Und</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>cebola</td>
            <td>280</td>
            <td>320</td>
            <td>1</td>
          </tr>
          <tr>
            <td>02</td>
            <td>pão</td>
            <td>500</td>
            <td>500</td>
            <td>1</td>
          </tr>
          <tr>
            <td>03</td>
            <td>sal</td>
            <td>100</td>
            <td>50</td>
            <td>0.50</td>
          </tr>
          <tr>
            <td>01</td>
            <td>cebola</td>
            <td>280</td>
            <td>320</td>
            <td>1</td>
          </tr>
          <tr>
            <td>01</td>
            <td>cebola</td>
            <td>280</td>
            <td>320</td>
            <td>1</td>
          </tr>
          <tr>
            <td>01</td>
            <td>cebola</td>
            <td>280</td>
            <td>320</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </Div>
  );
};

export default ToggleButton;
