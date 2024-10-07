const { gets, print } = require('./maiorNumeroExp');

const numeros = gets();

let maiorNumeroPar = 0;
let menorNumeroImpar = Number.MAX_SAFE_INTEGER; // Inicializa com um valor alto

for (let i = 0; i < numeros.length; i++) {
    const numeral = numeros[i];

    // Verifica se é par
    if (numeral % 2 === 0) {
        if (numeral > maiorNumeroPar) {
            maiorNumeroPar = numeral;
        }
    }
    // Verifica se é ímpar
    else {
        if (numeral < menorNumeroImpar) {
            menorNumeroImpar = numeral;
        }
    }
}

print(`O maior número par: ${maiorNumeroPar}`);
print(`O menor número ímpar: ${menorNumeroImpar}`);
