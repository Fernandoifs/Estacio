import { Livro } from '../modelo/Livro';

const livros = [
    {
        "codEditora": 1,
        "codigo": 1,
        "titulo": "O Senhor dos Anéis",
        "resumo": "Uma grande aventura na Terra Média",
        "autores": ["J.R.R. Tolkien"]
    },
    {
        "codEditora": 2,
        "codigo": 2,
        "titulo": "Dom Quixote",
        "resumo": "As aventuras do Cavaleiro da Triste Figura",
        "autores": ["Miguel de Cervantes"]
    },
    {
        "codEditora": 3,
        "codigo": 3,
        "titulo": "Harry Potter e a Pedra Filosofal",
        "resumo": "A história do jovem bruxo Harry Potter",
        "autores": ["J.K. Rowling"]
    }
]
class ControleLivro {
    public livrosCarregados: Livro[];

    constructor(livros: Livro[]) {
        this.livrosCarregados = livros;
    }

    obterLivros(livros: Livro[]): Livro[] {
        return livros;
    }

    incluirLivro(livro: Livro) {
        const proxCodigo = Math.max(...this.livrosCarregados.map(livro => livro.codigo), 0);
        livro.codigo = proxCodigo + 1;
        this.livrosCarregados.push(livro);
    }

    excluirLivro(codigo: number) {
        const index = this.livrosCarregados.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            this.livrosCarregados.splice(index, 1);
        }
    }
}

export const arrayLivros = livros.map(livro => new Livro(livro.codEditora, livro.codigo, livro.titulo, livro.resumo, livro.autores));
export default ControleLivro;
