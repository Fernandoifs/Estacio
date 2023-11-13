
const baseURL = "http://localhost:3030/livros";
interface LivroMongo {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}
class ControleLivro {
  async obterLivros(): Promise<Livro[]> {
    try {
      const resposta = await fetch(baseURL, { method: "GET" });

      if (resposta.ok) {
        const livrosMongo = (await resposta.json()) as LivroMongo[];

        return livrosMongo.map((livroMongo: LivroMongo) => {
          const id = livroMongo._id ?? "";
          return new Livro(
            id,
            livroMongo.codEditora,
            livroMongo.titulo,
            livroMongo.resumo,
            livroMongo.autores
          );
        });
      } else {
        console.error("Erro ao buscar os livros:", resposta.status);
        return [];
      }
    } catch (error) {
      console.error("Erro de rede ou servidor:", error);
      return [];
    }
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

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
}

export default ControleLivro;
