//imprimir um programa que dado um número ele imprima a sua tabuada.

const tabuada = 8;
//Tabuada de 0 à 10 pela constante tabuada atribuida por 8.
for (let i = 0; i < 11; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}
console.log('______________');
// números pares
for (let i = 0; i < 11; i+=2 ) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}
console.log('______________');
// números ímpares
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0){
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
    }
}