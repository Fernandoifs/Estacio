import { Editora } from '../modelo/Editora';

var editoras = [
    {
        "codEditora": 1,
        "nome": "Editora 1"
    },
    {
        "codEditora": 2,
        "nome": "Editora 2"
    },
    {
        "codEditora": 3,
        "nome": "Editora 3"
    },
    {
        "codEditora": 4,
        "nome": "Editora 4"
    },
];
const editoras2 = editoras.map(editoras => new Editora(editoras.codEditora, editoras.nome));

class ControleEditora {

    public editoras2: Editora[];

    constructor(editoras: Editora[]) {
        this.editoras2 = editoras;
    }

    getEditoras(): Editora[] {
        return editoras2;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editoraFilter = editoras2.filter(editora => editora.codEditora === codEditora);
        return editoraFilter.length > 0 ? editoraFilter[0].nome : undefined;
    }   
}

export default ControleEditora;