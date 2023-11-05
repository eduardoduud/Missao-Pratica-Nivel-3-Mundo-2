import { useState } from "react";
import { useRouter } from "next/router";
import ControleEditora from "../classes/controle/ControleEditora";
import "tailwindcss/tailwind.css";

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api/livros";

const LivroDados: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);

  const router = useRouter();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(e.target.value));
  };

  const incluir = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novoLivro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n").filter((autor) => autor.trim() !== ""),
    };

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoLivro),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Erro ao incluir o livro.");
      }
    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-gray-600">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resumo" className="block text-gray-600">
            Resumo
          </label>
          <textarea
            id="resumo"
            name="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="editora" className="block text-gray-600">
            Editora
          </label>
          <select
            id="editora"
            name="editora"
            value={codEditora}
            onChange={tratarCombo}
            className="w-full px-3 py-2 border rounded"
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="autores" className="block text-gray-600">
            Autores (um por linha)
          </label>
          <textarea
            id="autores"
            name="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Salvar Dados
        </button>
      </form>
    </div>
  );
};

export default LivroDados;
