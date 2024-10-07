const {gets, print} = require('./salarioTransferirExp');

const salarioBrutoMes = parseFloat(gets());

const beneficios = 250.00;

const aliquota1 = 0.05;

const aliquota2 = 0.10;

const aliquota3 = 0.15;


if (salarioBrutoMes > 0.00 && salarioBrutoMes <= 1100.00){
    
    const valorParaTransferir = salarioBrutoMes - (salarioBrutoMes * aliquota1) + beneficios;

    print(valorParaTransferir.toFixed(2));

} 
else if (salarioBrutoMes > 1100.00 && salarioBrutoMes <= 2500.00){

    const valorParaTransferir = salarioBrutoMes - (salarioBrutoMes * aliquota2) + beneficios;

    print(valorParaTransferir.toFixed(2));

}
else if (salarioBrutoMes > 2500.00){

    const valorParaTransferir = salarioBrutoMes - (salarioBrutoMes * aliquota3) + beneficios;

    print(valorParaTransferir.toFixed(2));

}
else {
    print('Salário Inválido')
}