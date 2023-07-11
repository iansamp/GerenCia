import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import Form from "./Form";
import Delete from "./Delete";
import Message from "./Message";

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
  margin-left: 24.5em;
  width: 400px;

`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 13%;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 0em 1.5em 0em 1.5em;

  caption {
    font-size: 1.5em;
    font-weight: bolder;
    padding: 1em;
    text-transform: uppercase;
  }

  th {
    background-color: white;
  }

  th,
  td {
    border: 1px solid black;
    padding: 0.2em;
  }

  tr:nth-child(even) {
    background-color: white;
  }
`;

const ContentInput = styled.div`
  margin-left: 1.5em;

  input {
    padding: 0.5em;
    border-radius: 0;
    border: 1px solid black;
  }

  input::placeholder {
    color: #7b7b7b;
  }
`;

const Estoque = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleMsg, setIsVisibleMsg] = useState(false);
  const [listProduct, setListProduct] = useState();
  const [message, setMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleDeleteProduct = (productId) => {
    Axios.delete(`http://localhost:3001/estoque/${productId}`)
      .then((response) => {
        console.log("Produto deletado com sucesso!");
        setListProduct((prevList) =>
          prevList.filter((item) => item.id !== productId)
        );
        setMessage("Produto deletado com sucesso!");
        setIsVisibleMsg(true);
        setTimeout(() => {
          setIsVisibleMsg(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
      });
  };

  useEffect(() => {
    if (!listProduct) {
      Axios.get("http://localhost:3001/estoque")
        .then((response) => {
          setListProduct(response.data);
        })
        .catch((error) => console.error("Erro ao buscar dados:", error));
    }
  }, [listProduct]);

  useEffect(() => {
    fetchProductList();
  }, [searchValue]);

  const fetchProductList = () => {
    const searchQuery = searchValue ? `&search=${searchValue}` : "";
    Axios.get(`http://localhost:3001/estoque?${searchQuery}`)
      .then((response) => {
        setListProduct(response.data);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearchValue(value);
  };

  return (
    <Div>
      <Button onClick={handleClick}>{isVisible ? "fechar" : "Adiconar"}</Button>
      {isVisible && (
        <Content isVisible={isVisible}>
          <Form />
        </Content>
      )}

      <ContentInput>
        <input
          type="text"
          placeholder="Pesquisar por produto"
          values={searchValue}
          onChange={handleSearch}
        />
      </ContentInput>

      <Table>
        <caption>Estoque</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço Total</th>
            <th>Preço Und</th>
          </tr>
        </thead>
        <tbody>
          {typeof listProduct !== "undefined" &&
            listProduct.map((item) => {
              return (
                <tr key={item.produto}>
                  <td>{item.id}</td>
                  <td>{item.produto}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.preco_total}</td>
                  <td>{item.preco_und.toFixed(2)}</td>
                  <td>
                    <Delete
                      productId={item.id}
                      onDelete={handleDeleteProduct}
                      produto={item.produto}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {isVisibleMsg && <Message>{message}</Message>}
    </Div>
  );
};

export default Estoque;
