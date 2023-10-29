import React, { useState, useEffect, useMemo } from "react";
import Table from "react-bootstrap/Table";
import ControleLivro from "../controle/ControleLivros";
import ControleEditora from "../controle/ControleEditora";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayLivros } from "../controle/ControleLivros";

function LinhaLivro({ livro, excluir }) {
  const handleDelete = () => {
    excluir(livro.codigo);
  };
  return (
    <tr>
      <td>
        {livro.titulo}
        <br />
        <button className="btn btn-danger" onClick={handleDelete}>
          {" "}
          Excluir{" "}
        </button>
      </td>
      <td className="resumo-coluna">{livro.resumo}</td>
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

export function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => { return new ControleLivro(arrayLivros); }, []);
  const controleEditora = useMemo(() => { return new ControleEditora(); }, []);

  useEffect(() => {
    if (!carregado) {
      const dadosLivros = controleLivro.obterLivros();
      const livrosComNomeEditora = dadosLivros.map((livro) => {
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
        return { ...livro, nomeEditora };
      });

      setLivros(livrosComNomeEditora);
      setCarregado(true);
    }
  }, [carregado, controleLivro, controleEditora]);

  const excluir = (codigo) => {
    controleLivro.excluirLivro(codigo);
    const dadosLivros = controleLivro.obterLivros();
    const livrosComNomeEditora = dadosLivros.map((livro) => {
      const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
      return { ...livro, nomeEditora };
    });
    setLivros(livrosComNomeEditora);
  };

  return (
    <main className="d-flex flex-column h-100 w-100 px-5">
      <h1>Catálogo de Livros</h1>
      {carregado ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="bg-dark text-white">Título</th>
              <th className="bg-dark text-white">Resumo</th>
              <th className="bg-dark text-white">Editora</th>
              <th className="bg-dark text-white">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
