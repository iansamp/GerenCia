import styled from "styled-components";

export default function SubmitButton({ text }) {
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
      color: #F26B0C;
    }
  `;
  return (
    <div>
      <Button>{text}</Button>
    </div>
  );
}
