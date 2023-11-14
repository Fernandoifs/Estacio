import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

class ControleLivro {
  async obterLivros(): Promise<Livro[]> {
    try {
      const resposta = await fetch(baseURL);
      const livrosMongo: LivroMongo[] = await resposta.json();

      return livrosMongo.map((livroMongo) => this.converterParaLivro(livroMongo));
    } catch (error) {
      console.error("Erro ao obter livros:", error);
      throw error;
    }
  }

  async excluirLivro(codigo: string): Promise<boolean> {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });

      return resposta.ok;
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
      return false;
    }
  }

  async incluirLivro(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = this.converterParaLivroMongo(livro);

    try {
      const resposta = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livroMongo),
      });

      return resposta.ok;
    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
      return false;
    }
  }

  private converterParaLivro(livroMongo: LivroMongo): Livro {
    return {
      codEditora: livroMongo.codEditora,
      codigo: livroMongo._id || "",
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores,
    };
  }

  private converterParaLivroMongo(livro: Livro): LivroMongo {
    return {
      _id: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
  }
}

export default ControleLivro;
