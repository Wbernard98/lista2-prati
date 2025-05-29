// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.
const prompt = require('prompt-sync')();

function fatorialRecursivo(n){
    // tratar o caso de entrada invalida n<0
    if(n<0){
        throw new Error("Não é possivel calcular o fatorial de um número negativo.")
    }
    // fatorial de 0 e 1
    else if(n===0){
        return 1
    }else {
        return n*fatorialRecursivo(n-1)
    }
}

// exemplos de uso 
try{
    console.log(fatorialRecursivo(5))
    console.log(fatorialRecursivo(0))
    console.log(fatorialRecursivo(-1))
}catch(error){
    console.log(error.message )
}
