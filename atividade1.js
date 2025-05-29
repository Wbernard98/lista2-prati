// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.
 const prompt = require('prompt-sync')()

 function ehDataValida(dia,mes,ano){
    //verificar os limites básicos do mes e do dia 
    if(!(mes>=1 && mes<=12 && dia>0)){
        return false
    }
    // definir o número de dias em cada mês
    const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // verificar se o dia é valido para o mês
    if(dia>diasNoMes[mes]){
        return false
    }
    // verificar se é ano bissexto
    const anoBissexto = (ano %4 === 0 && ano % 100 !== 0 )||(ano % 400 === 0)
    if(anoBissexto & dia >29){
        return false
    }else if(!anoBissexto && dia >28){
        return false
    }

    return true
}

console.log(ehDataValida(29,2,2024))
console.log(ehDataValida(29,2,1900))
console.log(ehDataValida(30,13,2023 ))
console.log(ehDataValida(0,5,2023))
console.log(ehDataValida(23,4,1998))
    

    
