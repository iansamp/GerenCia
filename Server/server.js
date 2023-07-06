/* const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestão',
});

app.get('/', (req, res) => {

    let query = "INSERT INTO (produto, quantidade, preco_total) VALUES ('detergente', 200, 150)";

});

app.listen(3001, ()=>{
    console.log('rodando server');
}); */

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestão",
});

// Verificar se a conexão com o banco de dados foi estabelecida
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  }
});

// Rota para criar uma nova conta
app.post("/register", (req, res) => {
    const { produto, quantidade, preco_total } = req.body;
  console.log(produto);

  // Calcular o preço por unidade
  const preco_und = preco_total / quantidade;

  // Inserir os dados no banco de dados
  const sql =
    'INSERT INTO estoque (produto, quantidade, preco_total, preco_und) VALUES ("dertegente", 256, 750.63, ?)';
  const values = [produto, quantidade, preco_total, preco_und];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      res.status(500).send("Erro ao adicionar pruduto");
    } else {
      console.log("Produto adicionado com sucesso!");
      res.send("Produto adicionado com sucesso!");
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
