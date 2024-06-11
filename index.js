let biblioteca = [];
let livro = {
  nome: "",
  tamanho: "",
  autor: "",
  genero: ""
};

let opcao = 0;

console.log("Qual operação você deseja fazer?");
console.log("1. Inserir um livro");
console.log("2. Remover um livro");
console.log("3. Visualizar todos os livros");

process.stdin.on("data", function (data) {
  resposta = data.toString().trim();
  if (!opcao) {
    opcao = Number(resposta);
    process.stdout.write("Qual o nome do livro? \n");
  } else {
    switch (opcao) {
      case 1:
        if (!livro.nome) {
          livro.nome = resposta;
          process.stdout.write("Quantas páginas o livro possui? \n");
        } else if (!livro.tamanho) {
          livro.tamanho = Number(resposta);
          process.stdout.write("Qual o nome do autor do livro? \n");
        } else if (!livro.autor) {
          livro.autor = resposta;
          process.stdout.write("Qual o gênero do livro? \n");
        } else if (!livro.genero) {
          livro.genero = resposta;
          opcao = 0;
          console.log("Livro inserido com sucesso!");
          biblioteca.push({
            nome: livro.nome,
            tamanho: livro.tamanho,
            autor: livro.autor,
            genero: livro.genero
          });
          console.log(livro);

        }
        break;
      case 2:
        console.log("remover");
        break;
      case 3:
        console.log("visualizar");
        break;
    }
  }
});

