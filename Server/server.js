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
  const { produto, quantidade, preco_und } = req.body;

  // Inserir os dados no banco de dados
  const sql =
    "INSERT INTO estoque (produto, quantidade, preco_und) VALUES (?, ?, ?)";
  const values = [produto, quantidade, preco_und];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      res.status(500).send("Erro ao adicionar pruduto");
    } else {
      res.send("Produto adicionado com sucesso!");
    }
  });
});

// Rota para buscar os dados da tabela estoque
app.get("/estoque", (req, res) => {
  const sql = "SELECT id, produto, quantidade, preco_und FROM estoque";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = result.map((row) => ({
        id: row.id,
        produto: row.produto,
        quantidade: row.quantidade,
        preco_und: row.preco_und,
        preco_total: row.preco_und * row.quantidade,
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

// Rota para buscar as categorias da tabela categorias
app.get("/categorias", (req, res) => {
  const sql = "SELECT tipo_no, nome_tipo FROM categorias";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = result.map((row) => ({
        id: row.tipo_no,
        name: row.nome_tipo,
      }));
      res.send(data);
    }
  });
});

// Rota para inserir lanches no banco de dados
app.post("/registerLanches", (req, res) => {
  const { nome, descricao, valor, tipo_no } = req.body;

  const sql =
    "INSERT INTO lanches (nome, descricao, valor, tipo_no) VALUES (?, ?, ?, ?)";
  const values = [nome, descricao, valor, tipo_no];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir lanche:", err);
      res.status(500).send("Erro ao inserir lanche");
    } else {
      console.log("Lanche inserido com sucesso!");
      res.send("Lanche inserido com sucesso!");
    }
  });
});

// Rota para pegar os dados da tabela lanches
app.get("/lanches", (req, res) => {
  const sql = `
  SELECT l.*, nome_tipo AS nome_categoria
  FROM lanches l
  JOIN categorias c ON l.tipo_no = c.tipo_no;
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = result.map((row) => ({
        id: row.idLanches,
        name: row.nome,
        descricao: row.descricao,
        valor: row.valor,
        categoria: {
          id: row.categoria,
          nome: row.nome_categoria,
        },
      }));
      res.send(data);
    }
  });
});

// Rota para editar os dados do lanche
app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { descricao } = req.body;
  const { valor } = req.body;

  let sql =
    "UPDATE lanches SET nome = ?, descricao = ?, valor = ? WHERE (idLanches = ?);";

  db.query(sql, [name, descricao, valor, id], (err, result) => {
    if (err) {
      console.error("Erro ao editar lanche:", err);
      res.status(500).send("Erro ao editar lanche");
    } else {
      res.send("Lanche editado com sucesso!");
    }
  });
});

//Rota para deletar um lanche
app.delete("/del/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM lanches WHERE idLanches = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao deletar lanche:", err);
      res.status(500).send("Erro ao deletar lanche");
    } else {
      res.send("Lanche deletado com sucesso!");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
