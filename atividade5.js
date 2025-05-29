// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

const prompt = require('prompt-sync')();

function debounce(fn, delay) {
    let timer

    return function(...args){
        clearTimeout(timer)// limpa o anterior se a função for chamada novamente

        timer = setTimeout(() =>{ fn.apply(this,args)// iniciar um novo timer
        }, delay)
    }
}
function exempleFuncao(mensagem){
    console.log(`a função com a mensagem ${mensagem} foi chamada`)
}
const funcaoDebounce = debounce(exempleFuncao,1000)

funcaoDebounce("Primeira chamada ")
funcaoDebounce("Segunda chamada ")
funcaoDebounce("Terceira chamada ")

// apos 1 segundo ( da ultima chamada ) voce vera no console

setTimeout(()=>{
    funcaoDebounce("Quarta chamada ")},2000)

    
