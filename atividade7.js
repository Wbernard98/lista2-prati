// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const prompt = require('prompt-sync')();

function obterNomesOrdenadosPorPreco(produtos) {  
    // ordena o aray de produtos com base no preço crescente
     const produtosOrdenados = produtos.slice().sort((produtoA, produtoB) => {
    return produtoA.preco - produtoB.preco;
    })

    // mapeia o array ordenado para obter apenas os nomes dos produtos
    const nomesOrdenados = produtosOrdenados.map(produto => produto.nome);

    return nomesOrdenados;
}


// exemplo de uso 
const produtos =[
    {nome: 'Camiseta', preco: 30.00},
    {nome: 'Calça', preco: 50.00},
    {nome: 'Tênis', preco: 80.00},
    {nome: 'Bolsa', preco: 40.00},
    {nome: 'Relógio', preco: 100.00},
    {nome: 'Óculos', preco: 20.00},
    {nome: 'Mochila', preco: 60.00}
]

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);