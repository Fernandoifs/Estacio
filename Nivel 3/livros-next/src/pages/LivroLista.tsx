import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import { Menu } from "@/classes/componentes/Menu";
import Head from "next/head";
import Table from "react-bootstrap/Table";
import { Livro } from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/classes/componentes/LinhaLivro";


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

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    if (!carregado) {
      obter().then((livros) => {
        setLivros(livros);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className="d-flex flex-column h-100 w-100 px-5">
        <h1>Catálogo de Livros</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="bg-dark text-white ">Título</th>
              <th className="bg-dark text-white">Resumo</th>
              <th className="bg-dark text-white">Editora</th>
              <th className="bg-dark text-white">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                //editora={editora}
                excluir={excluir}
              />
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
};
export default LivroLista;
