import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#000000",
    },
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    descricao: props.descricao,
    valor: props.valor,
  });
  const [isEdited, setIsEdited] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    // Atualiza o estado editValues sempre que as props mudarem
    setEditValues({
      id: props.id,
      name: props.name,
      descricao: props.descricao,
      valor: props.valor,
      tipo: props.tipo,
    });
  }, [props.id, props.name, props.descricao, props.valor, props.tipo]);

  const handleEditProd = () => {
    const { id, name, descricao, valor, tipo } = editValues;

    const editEndpoint =
      tipo === "lanche"
      ? "http://localhost:3001/editLanche"
      : "http://localhost:3001/editBebida";

    Axios.put(editEndpoint, {
      id,
      name,
      descricao,
      valor,
    })
      .then(() => setIsEdited(true))
      .catch((error) => console.error(error));
    handleClose();
  };

  const handleDelete = () => {
    const deleteEndpoint =
      props.tipo === "lanche"
        ? `http://localhost:3001/delLanche/${editValues.id}`
        : `http://localhost:3001/delBebida/${editValues.id}`;

    Axios.delete(deleteEndpoint)
      .then(() => setIsDeleted(true))
      .catch((error) => console.error(error));
    handleClose();
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  React.useEffect(() => {
    if (isEdited || isDeleted) {
      window.location.reload();
    }
  }, [isEdited, isDeleted]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Editar
        </Button>
      </ThemeProvider>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do produto"
            defaultValue={props.name}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeValues}
          />
          {props.descricao && (
            <TextField
              autoFocus
              margin="dense"
              id="descricao"
              label="Descrição do produto"
              defaultValue={props.descricao}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChangeValues}
            />
          )}
          <TextField
            autoFocus
            margin="dense"
            id="valor"
            label="Valor do produto"
            defaultValue={props.valor}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete}>Excluir</Button>
          <Button onClick={handleEditProd}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
