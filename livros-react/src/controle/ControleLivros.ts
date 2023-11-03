import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(1, 1, "Use a Cabeça: Java", "blablablabla", [
    "Bert Bates",
    "Kathy Sierra",
  ]),
  new Livro(2, 2, "Java, como Programar", "blablablabla", [
    "Paul Deitel",
    "Harvey Deitel",
  ]),
  new Livro(3, 1, "Core Java for the Impatient", "blablabla", [
    "Cay Horstmann",
  ]),
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = livros.reduce(
      (max, livro) => (livro.codigo > max ? livro.codigo : max),
      0
    );
    livro.codigo = codigoMaisAlto + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  }
}

export default ControleLivro;
