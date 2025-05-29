// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.
 const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
  const obj = {}
  for(const par of pares){
    const [chave,valor] = par// usando desestruturação de array 
    obj[chave] = valor
  }
  return obj
  }
// função para converter um objetoo {chave,valor,...} em um array de pares 
function objetoParaPares(obj){
  const pares = []
  for(const chave in obj){
    if(obj.hasOwnProperty(chave)){//Garante que a propriedade pertence diretamente ao objeto
      pares.push([chave,obj[chave]])
    }
  }
  return pares
}

// exemplo de uso 
// array de pares
const paresDeExemplo = [
  ['nome', 'Alice'],
  ['idade', 30],
  ['cidade', 'Sapucaia do Sul']
]

const objExemplo = paresParaObjeto(paresDeExemplo)
console.log(objExemplo)

const objOriginal = {
    profissão: 'Programadora',
    hobbies: ['ler', 'codar'],
    ativo: true
}
const parasResultantes = objetoParaPares(objOriginal)
console.log(parasResultantes)

