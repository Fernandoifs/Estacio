import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';

function LivroDados() {
    const controleLivro = new ControleLivro();

    const [opcoes, setOpcoes] = useState([]);

    useEffect(() => {
        const controleEditora = new ControleEditora();
        const editoras = controleEditora.getEditoras();
        const opcoes = editoras.map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));
        setOpcoes(opcoes);
    }, []);

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : null);

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
        <main className="d-flex flex-column h-100 w-100 px-5">
            <h1>Dados do Livro</h1>
            {/* combobox */}
            <label htmlFor="titulo" className="form-label w-100">Título:</label>
            <input
                id="titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="form-control"
            />
            <label htmlFor="resumo" className="form-label w-100">Resumo:</label>
            <textarea 
                id="resumo"
                type="text"
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                className="form-control"
            />
            <label htmlFor="editora" className="form-label w-100">Editora:</label>
            <select className="form-control" id="editora" onChange={tratarCombo}>
                {opcoes.map(opcao => (
                    <option key={opcao.value} value={opcao.value}>
                        {opcao.text}
                    </option>
                ))}
            </select>
            <label htmlFor="autores" className="form-label w-100">Autores(1 por linha):</label>
            <textarea 
                id="autores"
                type="text"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
                className="form-control"
            />
            <form onSubmit={incluir}>
                <button className="btn btn-primary mt-3" type="submit">Salvar Dados</button>
            </form>
        </main>
    );
}

export default LivroDados;
