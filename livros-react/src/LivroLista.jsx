import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LinhaLivro = ({ livro, excluir, index }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const autores = livro.autores.map((autor, index) => (
    <li key={index}>{autor}</li>
  ));

  const bgColorClass = index % 2 === 0 ? "bg-white" : "text-bg-secondary";

  return (
    <tr>
      <td className={bgColorClass}>
        {livro.título}
        <button
          className="btn btn-danger d-block mt-2"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td className={bgColorClass}>{livro.resumo}</td>
      <td className={bgColorClass}>{nomeEditora}</td>
      <td className={bgColorClass}>
        <ul>{autores}</ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivro();

  useEffect(() => {
    if (!carregado) {
      const livrosCarregados = controleLivro.obterLivros();
      setLivros(livrosCarregados);
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  let indexCounter = 0;

  const linhasLivros = livros.map((livro) => (
    <LinhaLivro
      key={livro.codigo}
      livro={livro}
      excluir={excluir}
      index={indexCounter++}
    />
  ));

  return (
    <main className="container">
      <h1 className="mt-5">Lista de Livros</h1>
      <table className="table table-bordered mt-3">
        <thead className="thead-light">
          <tr>
            <th className="text-bg-dark">Título</th>
            <th className="text-bg-dark">Resumo</th>
            <th className="text-bg-dark">Editora</th>
            <th className="text-bg-dark">Autores</th>
          </tr>
        </thead>
        <tbody>{linhasLivros}</tbody>
      </table>
    </main>
  );
};

export default LivroLista;
