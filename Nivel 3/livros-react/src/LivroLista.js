import React, { useState, useEffect, useMemo } from 'react';
//import Table from 'react-bootstrap/Table';
import ControleLivro  from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const handleDelete = () => { excluir(livro.codigo); }
  return (
    <tr>
  <td>
    {livro.titulo}
    <br />
    <button class="btn btn-danger" onClick={handleDelete}> Excluir </button>
  </td>
  <td>{livro.resumo}</td>
  <td>{livro.nomeEditora}</td>
  <td>
    <ul>
      {livro.autores.map((autor, index) => (
        <li key={index}>{autor}</li>
      ))}
    </ul>
  </td>
</tr>

  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => { return new ControleLivro(livros); }, [livros]);
  const controleEditora = useMemo(() => { return new ControleEditora(); }, []);

  useEffect(() => {
    if (!carregado ) {

      const dadosLivros = controleLivro.obterLivros();
      console.log('Dados dos livros no componente:', dadosLivros);
      const livrosComNomeEditora = dadosLivros.map(livros => {
        const nomeEditora = controleEditora.getNomeEditora(livros.codEditora);  
        return { ...livros, nomeEditora };
      });

      setLivros(livrosComNomeEditora);
      setCarregado(true);
    }
  }, [carregado, controleLivro, controleEditora]);

  const excluir = (codigo) => {
    controleLivro.excluirLivro(codigo);
    setLivros(controleLivro.obterLivros());
  }

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      {carregado ? (
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col" >Título</th>
              <th scope="col" >Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}

export default LivroLista;