import Editora from "../modelo/Editora";

// Definir a variável editoras com pelo menos três elementos no formato JSON
const editoras: Array<Editora> = [
  new Editora(1, "Alta Books"),
  new Editora(2, "Pearson"),
  new Editora(3, "Addison Wesley"),
];

class ControleEditora {
  // Método para retornar o vetor de editoras
  getEditoras(): Array<Editora> {
    return editoras;
  }

  // Método para obter o nome da editora com base no codEditora
  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );

    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    }

    return undefined; // Retorna undefined se a editora não for encontrada
  }
}

export default ControleEditora;
