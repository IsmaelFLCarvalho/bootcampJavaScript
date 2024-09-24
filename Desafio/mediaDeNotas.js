/*Este desafio consiste em fazer um algorítimo que dado  as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passa de semestre.

*/

 
let nota1 = 4.3; // Valor da primeira nota.
let nota2 = 8.2; // Valor da sugunda nota.
let nota3 = 8.5; // Valor da terceira nota.
let suaMedia = (nota1 + nota2 + nota3) / 3; // Calculo de média de notas.


// condicional para mostrar as notas. ( se passou, se vai a recuperação ou se vai repetir o semestre.)
if (suaMedia < 5){
    console.log(`infelizmente sua média final foi ${suaMedia.toFixed(2)} e você não passou de semestre.`);

} else if (suaMedia >=5 && suaMedia<7 ){
    console.log(`infelizmente sua média final foi ${suaMedia.toFixed(2)} e você precisa fazer uma prova de recuperação.`);
} else if (suaMedia >= 7){
    console.log(`Sua média final foi ${suaMedia.toFixed(2)}, você passou de semestre, parabéns.`);
} else {
    console.log('Calculo invaládio, verificar nota de aluno.')
}