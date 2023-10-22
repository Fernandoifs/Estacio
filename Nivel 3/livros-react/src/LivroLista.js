import React, { useState, useEffect } from 'react';
import ControleLivro  from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const handleDelete = () => { excluir(livro.codigo); }

  return (
    <tr>
      <td> <button onClick={handleDelete}> Excluir </button> </td>
      <td>{livro.titulo}</td>
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

  const controleLivro = new ControleLivro(livros);
  const controleEditora = new ControleEditora();

  useEffect(() => {
    if (!carregado && controleLivro.livros2.length > 0) {
      const dadosLivros = controleLivro.obterLivros();
      //console.log('Dados dos livros no componente:', dadosLivros);
      const livrosComNomeEditora = dadosLivros.map(livro => {
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);  
        return { ...livro, nomeEditora };
      });

      setLivros(livrosComNomeEditora);
      setCarregado(true);
    }
  }, [carregado, controleLivro, controleEditora]);

  const excluir = (codigo) => {
  }

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      {carregado ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
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