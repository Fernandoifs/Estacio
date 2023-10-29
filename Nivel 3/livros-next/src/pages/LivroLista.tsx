import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from '../styles/Home.module.css'
import { Menu } from "@/classes/componentes/Menu";
import Head from "next/head";
import { Livro } from "@/classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";
const obter = async () => {
  const resposta = await fetch(baseURL);
  const dados = await resposta.json();
  return dados;
};
const excluirLivro = async (codigo: number) => {
  const resposta = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE",
  });
  return resposta.ok;
};
export const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  const obterLivros = async () => {
    const livrosObtidos = await obter();
    setLivros(livrosObtidos);
    setCarregado(true);
  };

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  useEffect(() => {
    if (!carregado) {
      obterLivros();
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
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
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

const styless = {
  container: {},
};