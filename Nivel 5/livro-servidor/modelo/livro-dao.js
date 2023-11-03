const Livro = require("Livro");

const obterLivros = async () => {
  return await Livro.find();
};
const incluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

module.exports = { Livro, obterLivros, incluir };
