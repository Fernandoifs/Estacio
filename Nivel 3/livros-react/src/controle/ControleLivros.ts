import { Livro } from '../modelo/Livro';

const livros = [
    {
        "codEditora": 1,
        "codigo": 1,
        "titulo": "nomelivro1",
        "resumo": "",
        "autores": [],
    },
    {
        "codEditora": 2,
        "codigo": 2,
        "titulo": "nomelivro2",
        "resumo": "",
        "autores": [],
    },
    {
        "codEditora": 3,
        "codigo": 3,
        "titulo": "nomelivro3",
        "resumo": "",
        "autores": [],
    }
];
const livros2 = livros.map(livros => new Livro(livros.codEditora, livros.codigo, livros.titulo, livros.resumo, livros.autores));

class ControleLivro {

    public livros2: Livro[];

    constructor(livros: Livro[]) {
        this.livros2 = livros;
    }

    obterLivros(): Livro[] {
        //console.log('Dados dos livros', livros2);
        return this.livros2;
    }

    incluirLivro(livro: Livro) {
        const proxCodigo = Math.max(...this.livros2.map(livro => livro.codigo), 0);//adiciona o proximo codigo do livro
        livro.codigo = proxCodigo + 1;
        this.livros2.push(livro);
    }

    excluirLivro(codigo: number) {
        const index = this.livros2.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            this.livros2.splice(index, 1);
        }
    }
}
export default ControleLivro;
