import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
  index: number;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  const autores = props.livro.autores.map((autor, index) => (
    <li key={index}>{autor}</li>
  ));

  const bgColorClass = props.index % 2 === 0 ? "bg-white" : "bg-slate-200";

  return (
    <tr>
      <td className={bgColorClass}>
        <div className="flex flex-col">
          <p className="w-full">{props.livro.título}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 w-16 rounded block"
            onClick={props.excluir}
          >
            Excluir
          </button>
        </div>
      </td>
      <td className={bgColorClass}>{props.livro.resumo}</td>
      <td className={bgColorClass}>{nomeEditora}</td>
      <td className={bgColorClass}>
        <ul>{autores}</ul>
      </td>
    </tr>
  );
};
