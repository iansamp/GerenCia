import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormDialog from "../../dialog/Dialog";

const Cards = styled.div`
  margin-left: 1em;
  display: flex;
  flex-wrap: wrap;
`;
const CardContent = styled.div`
  width: 250px;
  min-height: 270px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
  background-color: #8bc6ec;
  background-image: linear-gradient(150deg, #8bc6ec 0%, #9599e2 100%);
  span {
    padding-left: 1em;
    font-weight: bold;
  }
  h2 {
    padding-left: 0.5em;
    border-top: 1px solid black;
  }
  h3 {
    padding-left: 0.5em;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  p {
    padding-left: 0.5em;
    span {
      padding-left: 0em;
    }
  }
  div {
    border-top: 1px solid black;
    padding: 0.5em 0em 0.5em 0.5em;
    p {
      padding: 0em 0em 0em 0.5em;
    }
  }
`;

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <Cards>
      <CardContent key={props.id}>
        <span>ID: {props.id}</span>
        <h2>{props.name}</h2>
        <div>
          Descrição:
          <p>{props.descricao}</p>
        </div>
        <h3>R$ {props.valor}</h3>
        <p>
          Categoria: <span>{props.categoria}</span>
        </p>
        <FormDialog
          open={open}
          setOpen={setOpen}
          name={props.name}
          descricao={props.descricao}
          valor={props.valor}
          listCard={props.listCard}
          setListCard={props.setListCard}
          onClick={() => handleClickCard()}
          id={props.id}
        />
      </CardContent>
    </Cards>
  );
}
