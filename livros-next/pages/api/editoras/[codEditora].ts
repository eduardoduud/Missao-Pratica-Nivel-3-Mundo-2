import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { codEditora } = req.query;
      const codEditoraNumber = Number(codEditora);
      if (isNaN(codEditoraNumber)) {
        res.status(400).json({ error: "Invalid editor code" });
      } else {
        const nomeEditora = controleEditora.getNomeEditora(codEditoraNumber);
        if (nomeEditora) {
          res.status(200).json({ nome: nomeEditora });
        } else {
          res.status(404).json({ error: "Editor not found" });
        }
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
