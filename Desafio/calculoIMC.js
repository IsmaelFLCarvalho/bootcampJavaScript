/* O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.

    FORMULA PARA CALCULAR O IMC:
        IMC = PESO / ( ALTURA * ALTURA).
        
*/

let pesoKg = 97;
let alturaM = 1.75; 
const imcCalculo = pesoKg / (alturaM * alturaM);


if (imcCalculo <18.5){
    console.log(`você está abaixo do peso. Seu IMC é ${imc.Calculo.toFixed(1)}!`);
} else if (imcCalculo >=18.5 && imcCalculo <25){
    console.log(`Seu Peso está normal, parabéns. Seu IMC deu ${imcCalculo.toFixed(1)}!`);
} else if (imcCalculo>=25 && imcCalculo <30){
    console.log(`Você está acima do peso, atenção. Seu IMC é de ${imcCalculo.toFixed(1)}!`);
} else if (imcCalculo >=30 && imcCalculo <40){
    console.log(`Atenção você se encontra em nível de obesidade, isso pode acarretar vários tipos de problemas. seu IMC é de ${imcCalculo.toFixed(1)}!`);
} else if (imcCalculo >=40){
    console.log(`Procure um médico e um nutricionista. Seu IMC é de ${imcCalculo.toFixed(1)}, você está com obesidade grave!`);
} else{
    console.log('Verifique os dados inseridos.');
}
