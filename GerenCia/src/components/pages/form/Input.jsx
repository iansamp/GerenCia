import styled from "styled-components";

  const Label = styled.label`
    font-weight: bold;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  `;
  const Inputt = styled.input`
      padding: 0.7em;
      border-radius: 0;
      border: 1px solid black;
      &::placeholder{
        color: #7b7b7b;
      }
  `

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleChangeValues,
  value,
}) {

  return (
    <Content>
      <Label htmlFor={name}>{text}</Label>
      <Inputt
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChangeValues}
        value={value}
      />
    </Content>
  );
}
