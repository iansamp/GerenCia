import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import Axios from "axios";

const Div = styled.div`
  width: 23.5px;
`;

export default function Delete({ productId, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/estoque/${productId}`)
      .then((response) => {
        console.log("Produto deletado com sucesso!");
        onDelete(productId);
        handleClose();
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
        handleClose();
      });
  };

  return (
    <Div>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deletar produto!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja deletar este produto?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </Div>
  );
}
