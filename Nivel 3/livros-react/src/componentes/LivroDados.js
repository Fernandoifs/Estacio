import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';

//verificar erro no console//

function LivroDados() { 

    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : null); // Inicia com a primeira opção

    function tratarCombo(event) {
        const valorSelecionado = Number(event.target.value);
        setCodEditora(valorSelecionado);
    }

    function incluir(event) {
        event.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            codEditora: codEditora,
            autores: autores.split('\n'),
        };

        controleLivro.incluirLivro(novoLivro);
        navigate('/');
    }

    return (
        <main>
            <h1>Dados do Livro</h1>
            {/* combobox */}
            <label for="titulo">Título:</label>
            <input
                id="titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <label for="resumo">Resumo:</label>
            <input
                id="resumo"
                type="text"
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
            />
            <label for="editora">Editora:</label>
            <select id="editora" onChange={tratarCombo}>
                {opcoes.map(opcao => (
                    <option key={opcao.value} value={opcao.value}>
                        {opcao.text}
                    </option>
                ))}
            </select>
            <label for="autores">Autores:</label>
            <input
                id="autores"
                type="text"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
            />
            <form onSubmit={incluir}>
                <button className="btn btn-primary" type="submit">Salvar Dados</button>
            </form>
        </main>
    );
}

export default LivroDados;
