import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15em;
    margin-left: 10em;
    p {
      font-size: 15px;
    }
  `;

  const Title = styled.h1`
    font-size: 60px;
    font-weight: 400;
    text-transform: uppercase;
  `;


export default function Home() {
  return (
      <Div>
        <Title>Bem-vindo</Title>
        <p>Ao seu mais novo gerenciador</p>
      </Div>
  );
}
