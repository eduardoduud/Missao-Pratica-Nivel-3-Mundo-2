import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros";

const controleLivro = new ControleLivro();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      const novoLivro = JSON.parse(req.body);
      controleLivro.incluir(novoLivro);
      res.status(200).json({ message: "Livro incluído com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
