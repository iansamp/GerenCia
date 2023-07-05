import styled from "styled-components";

export default function Home() {

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    p {
      font-size: 15px;
    }
  `;

  const Title = styled.h1`
    font-size: 60px;
    font-weight: 400;
    text-transform: uppercase;
  `;

  return (
      <Div>
        <Title>Bem-vindo</Title>
        <p>Ao seu mais novo gerenciador</p>
      </Div>
  );
}
