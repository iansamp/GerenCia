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

// Rota para adicionar produtos no estoque
app.post("/register", (req, res) => {
  const { produto, quantidade, preco_total } = req.body;
  console.log(produto);

  // Inserir os dados no banco de dados
  const sql =
    'INSERT INTO estoque (produto, quantidade, preco_total) VALUES (?, ?, ?)';
  const values = [produto, quantidade, preco_total];

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

// Rota para buscar os dados da tabela estoque
app.get("/estoque", (req, res) => {
  const sql = "SELECT id, produto, quantidade, preco_total FROM estoque";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = result.map((row) => ({
        id: row.id,
        produto: row.produto,
        quantidade: row.quantidade,
        preco_total: row.preco_total,
        preco_und: row.preco_total / row.quantidade,
      }));
      res.send(data);
    }
  });
});


// Rota para deletar um produto do estoque
app.delete("/estoque/:id", (req, res) => {
  const productId = req.params.id;

  const sql = "DELETE FROM estoque WHERE id = ?";

  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error("Erro ao deletar produto:", err);
      res.status(500).send("Erro ao deletar produto");
    } else {
      console.log("Produto deletado com sucesso!");
      res.send("Produto deletado com sucesso!");
    }
  });
});

// ...



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
