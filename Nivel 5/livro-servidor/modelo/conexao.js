const banco = require("mongoose");
const url = "mongodb://localhost:27017";

banco.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar:", err);
  });

module.exports = { banco };
