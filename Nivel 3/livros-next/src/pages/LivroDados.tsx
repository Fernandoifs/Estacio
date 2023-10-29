import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import type { NextPage } from "next";
import styles from '../styles/Home.module.css'
import ControleEditora, { arrayEditoras } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

const controleEditora = new ControleEditora(arrayEditoras);

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
  try {
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });

    return resposta.ok;
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    return false;
  }
};

const LivroDados: NextPage = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);
  const router = useRouter();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  // restante do componente...

  return (
    <main>
      Olá Mundo
    </main>
  );
};

export default LivroDados;
