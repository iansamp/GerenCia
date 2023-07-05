import styled from "styled-components";
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";





export default function Form() {
  
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
      };
  
    return (
    <form onSubmit={submit} >
      <Input
        text="Produto:"
        type="text"
        placeholder="Insira o tipo de produto"
      />

      <Input
        text="Quantidade:"
        type="number"
        placeholder="Insira a quantidade"
      />

      <Input
        text="Valor total:"
        type="number"
        placeholder="Insira o valor total"
      />

      <Button onSubmit={submit} text='enviar'/>
    </form>
  );
}
