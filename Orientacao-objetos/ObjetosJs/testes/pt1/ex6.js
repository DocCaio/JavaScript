//6 - Crie um objeto livro com as 
//seguintes propriedades: título, autor, 
//ano de publicação, gênero, idade de publicação. Em seguida, exclua 
//a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do 
//livro no console, verificando se as informações atualizadas, sem a avaliação,
 //são exibidas corretamente.

 // livro.js
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
};

// Excluir a propriedade 'avaliacao' do objeto livro
delete livro.avaliacao;

// Exibir detalhes do livro no console sem a avaliação
console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`)
