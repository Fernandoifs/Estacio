import ControleLivro from "@/classes/controle/ControleLivros";
import { arrayLivros } from "@/classes/controle/ControleLivros";
//import controleLivro from '.'
import { NextApiRequest, NextApiResponse } from "next";

const controleLivro = new ControleLivro(arrayLivros);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === "POST") {
      const livro = req.body;
      await controleLivro.incluirLivro(livro);
      res.status(200).json({ mensagem: "Sucesso" });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }

  try {
    if (req.method === "DELETE") {
      const { cod } = req.query;
      if (typeof cod === "string") {
        const codigo = parseInt(cod);
        await controleLivro.excluirLivro(codigo);
        res.status(200).json({ mensagem: "Sucesso" });
      } else {
        res.status(400).json({ mensagem: "Código inválido" });
      }
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).end();
  }
};
