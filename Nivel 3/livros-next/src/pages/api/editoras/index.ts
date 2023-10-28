import ControleEditora from '../../../classes/controle/ControleEditora';
import { arrayEditoras } from '../../../classes/controle/ControleEditora';
import { NextApiRequest, NextApiResponse } from 'next'

const controleEditora =  new ControleEditora(arrayEditoras);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = await controleEditora.getEditoras()
      res.status(200).json(editoras)
    } else {
      res.status(405).end() // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end() // Erro interno no servidor
  }
}
