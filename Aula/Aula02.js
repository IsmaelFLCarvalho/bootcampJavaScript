
// FUNÇÕES

function sayMyName(name){
    console.log(`your name is ${name}.`);
}

sayMyName('Ismael'); //assim se chama a function.
sayMyName('Jhersica'); 


/* Ou seja, quando chamamos a função e atribuimos a ela um valor, automaticamente damos a ela uma condição.
quando chamei a função "sayMyName()" e dentro do parenteses coloquei um valor neste caso o nome "ismael" e "jhersica", em cada momento ele assumiu como uma variável. ou seja name se tornou uma variável da function. */

function soma(a, b) {
    return a + b;  // A função retorna a soma de a e b
}
  
let resultado = soma(5, 9);  // resultado recebe o valor retornado, que é 8
console.log(resultado);  // Exibe 14



function verificaMaioridade(idade) {
    if (idade >= 18) {
        return "É maior de idade";
    }
    return "É menor de idade";
}
  
console.log(verificaMaioridade(31));  // Exibe "É maior de idade"
console.log(verificaMaioridade(13));  // Exibe "É menor de idade"


//outra forma de verificar idade.   
function verifiqueSeMaiorIdade(idade){
    if (idade<18){
        console.log("É menor de idade");
    } else {
        console.log("É maior de idade");
    }
}
verifiqueSeMaiorIdade(30);
  
  