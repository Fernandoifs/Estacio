import { Livro } from "../modelo/Livro";

export const baseURL = "http://localhost:3030/livros";
export interface LivroMongo {
  _id: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}
class ControleLivro {
  public livrosCarregados: Livro[];
  constructor(livros: Livro[]) {
    this.livrosCarregados = livros;
  }

  async obterLivros() {
    try {
      const response = await fetch(baseURL);
      const livrosMongo: LivroMongo[] = await response.json();

      this.livrosCarregados = livrosMongo.map(
        (livro) =>
          new Livro(
            livro.codEditora,
            parseInt(livro._id),
            livro.titulo,
            livro.resumo,
            livro.autores
          )
      );

      return this.livrosCarregados;
    } catch (error) {
      console.error("Erro ao obter livros do servidor:", error);
      throw error; 
    }
  }

  async incluirLivro(livro: Livro) {
    try {
      const livroMongo: LivroMongo = {
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };

      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livroMongo),
      });

      return response.ok;
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
      return false;
    }
  }

  async excluirLivro(codigo: string) {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });

      return response.ok;
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      return false;
    }
  }
}

export const arrayLivros = livros.map(
  (livro) =>
    new Livro(
      livro.codEditora,
      livro.codigo,
      livro.titulo,
      livro.resumo,
      livro.autoreses
    )
);
export default ControleLivro;
