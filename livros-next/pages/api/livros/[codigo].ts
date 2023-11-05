import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros";

const controleLivro = new ControleLivro();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      const { codigo } = req.query;
      const codigoNumber = Number(codigo);
      if (isNaN(codigoNumber)) {
        res.status(400).json({ error: "Invalid book code" });
      } else {
        controleLivro.excluir(codigoNumber);
        res.status(200).json({ message: "Livro excluído com sucesso" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
