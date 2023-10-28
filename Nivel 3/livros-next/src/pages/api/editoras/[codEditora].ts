import { NextApiRequest, NextApiResponse } from 'next'
import ControleEditora from '../../../classes/controle/ControleEditora';
import { arrayEditoras } from '../../../classes/controle/ControleEditora';


const controleEditora =  new ControleEditora(arrayEditoras);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query
      const cod = parseInt(codEditora as string)
      const nomeEditora = await controleEditora.getNomeEditora(cod)
      res.status(200).json({ nome: nomeEditora })
    } else {
      res.status(405).end()
    }
  } catch (e) {
    res.status(500).end() 
  }
}
