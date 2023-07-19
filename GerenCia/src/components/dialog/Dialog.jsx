import * as React from "react";
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
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    name: props.name,
    descricao: props.descricao,
    valor: props.valor,
  });
  const [isEdited, setIsEdited] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const handleEditProd = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      descricao: editValues.descricao,
      valor: editValues.valor,
    })
      .then(() => setIsEdited(true))
      .catch((error) => console.error(error));
    handleClose();
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/del/${editValues.id}`)
      .then(() => setIsEdited(true))
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
