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
    }
];
const livros2 = livros.map(livros => new Livro(livros.codEditora, livros.codigo, livros.titulo, livros.resumo, livros.autores));
/*se der erro tem que usar o map na public e o this na const*/
class ControleLivro { 

    public livros2: Livro[];

    constructor(livros: Livro[]) { //recebe um map do livros.json//
        this.livros2 = livros
    }

    obterLivros(): Livro[] {
        return this.livros2;
    }

    incluirLivro(livro: Livro) {
        const proxCodigo = Math.max(...livros2.map(livro => livro.codigo), 0);//adiciona o proximo codigo do livro
        livro.codigo = proxCodigo + 1;
        livros2.push(livro);
    }

    excluirLivro(codigo: number) {
        const index = livros2.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros2.splice(index, 1);
        }
    }
}
export default ControleLivro;
