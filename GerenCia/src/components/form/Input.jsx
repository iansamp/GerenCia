import styled from "styled-components";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleChangeValues,
  value,
}) {
  const Label = styled.label`
    margin-bottom: 0.6em;
    font-weight: bold;
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    input {
      padding: 0.7em;
      border-radius: 0;
      border: 1px solid black;
    }

    input::placeholder {
      color: #7b7b7b;
    }
  `;

  return (
    <Content>
      <Label htmlFor={name}>{text}</Label>
      <input
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
