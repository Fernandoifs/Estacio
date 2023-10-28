import ControleLivro from "@/classes/controle/ControleLivros";
import { arrayLivros } from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

const controleLivro = new ControleLivro(arrayLivros);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno no servidor
  }
};
