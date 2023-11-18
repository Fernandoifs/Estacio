import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Menu } from "@/classes/componentes/Menu";
import ControleEditora, { arrayEditoras,} from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
  try {
    const resposta = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });

    return resposta.ok;
  } catch (error) {
    console.error("Erro ao incluir o livro:", error);
    return false;
  }
};

interface Opcao {
  value: number;
  text: string;
}

const LivroDados: NextPage = () => {
  const [opcoes, setOpcoes] = useState<Opcao[]>([]);
  
  useEffect(() => {
    const controleEditora = new ControleEditora(arrayEditoras);
    const editoras = controleEditora.getEditoras();
    const opcoes = editoras.map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(opcoes);
  }, []);

  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

  const tratarCombo = (event: ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };
  const incluir = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro = new Livro(
      '',
      Number(codEditora),
      titulo,
      resumo,
      autores.split("\n")
    );
    const sucesso = await incluirLivro(livro);

    if (sucesso) {
      router.push("./LivroLista"); 
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroDados</title>
        <meta name="description" content="Inclusão de Livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="d-flex flex-column h-100 w-100 px-5">
        <h1>Novo Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label htmlFor="titulo" className="form-label w-100">Título:</label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="resumo" className="form-label w-100">Resumo:</label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="editora" className="form-label w-100">Editora:</label>
            <select className="form-control" id="editora" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="autores" className="form-label w-100">Autores:</label>
            <textarea
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Salvar Dados</button>
        </form>
      </main>
    </div>
  );
};
export default LivroDados;
