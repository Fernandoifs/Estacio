import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ControleLivro, { arrayLivros } from "../controle/ControleLivros";
import ControleEditora, { arrayEditoras } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro";

//const controleEditora = new ControleEditora(arrayEditoras);
//const controleLivro = new ControleLivro(arrayLivros);

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
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
};
