const banco = require("mongoose");
const url= 
//"mongodb://localhost:27017"
 "mongodb+srv://fernandoIfs:PrBruoiYg9tPhnPh@cluster0.g5zvbo1.mongodb.net/?retryWrites=true&w=majority";

banco.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar:", error);
  });

module.exports = { banco, url };
