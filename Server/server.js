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
  database: "gestao",
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

// Rota para buscar os lanches da tabela categorias
app.get("/categorias", (req, res) => {
  const sql = `SELECT tipo_no, nome_tipo FROM categorias WHERE tipo_no LIKE "%T%" ORDER BY nome_tipo ASC`;

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

// Rota para buscar as bebidas da tabela categorias
app.get("/categoriasBebidas", (req, res) => {
  const sql = `SELECT tipo_no, nome_tipo FROM categorias WHERE tipo_no LIKE "%b%" ORDER BY nome_tipo ASC`;

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

// Rota para inserir bebidas no banco de dados
app.post("/registerBebidas", (req, res) => {
  const { nome, valor, tipo_no } = req.body;

  const sql = "INSERT INTO bebidas (nome, valor, tipo_no) VALUES ( ?, ?, ?)";
  const values = [nome, valor, tipo_no];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Erro ao inserir bebida:", err);
      res.status(500).send("Erro ao inserir bebida");
    } else {
      console.log("Bebida inserido com sucesso!");
      res.send("Bebida inserido com sucesso!");
    }
  });
});

// Rota para pegar os dados da tabela lanches
app.get("/lanches", (req, res) => {
  const sql = `
  SELECT l.*, nome_tipo AS nome_categoria
  FROM lanches l
  JOIN categorias c ON l.tipo_no = c.tipo_no
  ORDER BY idLanches ASC;
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

// Rota para pegar os dados da tabela bebidas
app.get("/bebidas", (req, res) => {
  const sql = `
  SELECT b.*, nome_tipo AS nome_categoria
  FROM bebidas b
  JOIN categorias c ON b.tipo_no = c.tipo_no
  ORDER BY idBebidas ASC;
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = result.map((row) => ({
        id: row.idBebidas,
        name: row.nome,
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

// Rota para editar um lanche
app.put("/editLanche", (req, res) => {
  const { id, name, descricao, valor } = req.body;

  const sql =
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

  // Rota para editar uma bebida
  app.put("/editBebida", (req, res) => {
    const { id, name, valor } = req.body;

    const sql = "UPDATE bebidas SET nome = ?, valor = ? WHERE (idBebidas = ?);";

    db.query(sql, [name, valor, id], (err, result) => {
      if (err) {
        console.error("Erro ao editar bebida:", err);
        res.status(500).send("Erro ao editar bebida");
      } else {
        res.send("Bebida editada com sucesso!");
      }
    });
  });

// Rota para deletar um lanche
app.delete("/delLanche/:id", (req, res) => {
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

// Rota para deletar uma bebida
app.delete("/delBebida/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM bebidas WHERE idBebidas = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao deletar bebida:", err);
      res.status(500).send("Erro ao deletar bebida");
    } else {
      res.send("Bebida deletada com sucesso!");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
