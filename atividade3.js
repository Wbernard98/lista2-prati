// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.
const prompt = require('prompt-sync')();

function encontrarPalavras(texto){

    const palavras = texto.split(' ')
    const palavrasUnicas = []
    const freqPalavras = {}

    // for para contar a frequencia de cada palavra 

    for(let i = 0; i<palavras.length; i++){
        const palavra = palavras[i]
        if(freqPalavras[palavra]){
            freqPalavras[palavra]++
        }else{
            freqPalavras[palavra] = 1
        }
    }
    // identificar e armazenar as palavras
    for(const palavra in freqPalavras){
        if(freqPalavras[palavra] === 1){
            palavrasUnicas.push(palavra)
        }
    }
    return palavrasUnicas
}

const exemplo = "óla óla mundo mundo javascript "
const palavrasEncontrada = encontrarPalavras(exemplo)
console.log("Palavras Únicas : " , palavrasEncontrada)

