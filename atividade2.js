// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require('prompt-sync')();

function jgadvinhacao() {
    // gera um número aleatório entre 1 e 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite; // Declaramos 'palpite' aqui para ter escopo no loop

    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");

    // iniciar o loop de advinhação
    while (palpite !== numeroAleatorio) {
        const palpiteStr = prompt('Adivinhe o número (entre 1 e 100): ');

        // verificar se o usuario cancelou o prompt
        if (palpiteStr === null) {
            console.log("Jogo Cancelado.");
            return;
        }

        palpite = parseInt(palpiteStr);

        //verificar se o palpite é um número valido
        if (isNaN(palpite)) {
            console.log("Digite um número válido.");
            continue; // Volta para a próxima iteração do loop
        }

        tentativas++;

        if (palpite < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (palpite > numeroAleatorio) {
            console.log("Mais baixo!");
        }
    }

    console.log(`Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
}

jgadvinhacao();

