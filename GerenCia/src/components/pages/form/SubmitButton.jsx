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
  margin-bottom: 0.5em;
  width: 100px;
  &:hover {
    color: #f26b0c;
  }
`;

export default function SubmitButton({ text, onClick, submit }) {
  return (
    <div>
      <Button onClick={onClick} onSubmit={submit} >{text}</Button>
    </div>
  );
}
