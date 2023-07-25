import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Card from "./Card";


const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabsWrapper = styled.div`
  display: flex;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#f1f1f1" : "transparent")};
  color: #000;
  border-radius: 10px 10px 0px 0px;
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;
`;

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(() => {
        const storedTab = localStorage.getItem("activeTab");
        return storedTab ? parseInt(storedTab, 10) : 0;
      });
  const [listProduct, setListProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/lanches")
      .then((response) => {
        setListProduct(response.data);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  useEffect(() => {
    // Filtrar os produtos com base na categoria da aba ativa
    const filtered = listProduct.filter(
      (item) => item.categoria.nome === tabs[activeTab].label
    );
    setFilteredProducts(filtered);

    // Armazena o valor da aba ativa no localStorage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab, listProduct, tabs]);
  

  return (
    <TabsContainer>
      <TabsWrapper>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsWrapper>
      <TabContent>
        {typeof listProduct !== "undefined" &&
          filteredProducts.map((item) => {
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
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
