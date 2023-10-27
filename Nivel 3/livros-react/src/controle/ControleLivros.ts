import { Livro } from '../modelo/Livro';

const livros = [
    {
        "codEditora": 1,
        "codigo": 1,
        "titulo": "nomelivro1",
        "resumo": "",
        "autores": ['Fernando','Maria'],
    },
    {
        "codEditora": 2,
        "codigo": 2,
        "titulo": "Use A Cabeça Java",
        "resumo": "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
        "autores": ['Kathy Sierra'],
    },
    {
        "codEditora": 3,
        "codigo": 3,
        "titulo": "nomelivro3",
        "resumo": "",
        "autores": [],
    },
    {
        "codEditora": 4,
        "codigo": 4,
        "titulo": "nomelivro4",
        "resumo": "",
        "autores": ['Gustavo'],
    }
];

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
