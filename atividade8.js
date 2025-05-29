// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
const prompt = require('prompt-sync')();

function agruparTotalPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda
    
        // verificar se o clienter já é uma chave no acumulador
        if(acumulador[cliente]) {
            // se sim, adiciona o total da venda ao valor existente
            acumulador[cliente] += total
        } else {
            // se não, cria uma nova chave para o cliente com o total de venda 
            acumulador[cliente] = total
        }
        return acumulador
    }, {})// o valor inicial do acumulador é um objeto vazio

}
const vendas = [
  { cliente: 'Ana', total: 50 },
  { cliente: 'João', total: 100 },
  { cliente: 'Ana', total: 75 },
  { cliente: 'Pedro', total: 25 },
  { cliente: 'João', total: 120 },
  { cliente: 'Ana', total: 30 },
  { cliente: 'Pedro', total: 60 }
];

const resultado = agruparTotalPorCliente(vendas);
console.log(resultado); 