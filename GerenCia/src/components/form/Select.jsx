import styled from "styled-components";

export default function Select({ text, name, options, handleOnChange, value }) {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label {
      margin-bottom: 0.6em;
      font-weight: bold;
    }

    select {
      padding: 0.7em;
      border-radius: 0;
      border: none;
    }
  `

  return (
    <Content>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
      </select>
    </Content>
  );
}
