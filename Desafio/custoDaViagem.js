//                                                                                                   ISMAEL CARVALHO.

//variáveis necessárias para calculos.
let valorGpl = 0.84; // insira o valor atual do GPL que irá abastecer.
let valorGasolina = 1.58; // insira o valor atual da gasolina que irá abastecer.
let valorGasoleo = 1.48; //insira o valor atual do gasóleo que irá abastecer.
let consumoVeiculoNaCidade = 11.8; //insira o consumo médio do seu veículo na cidade.
let consumoVeiculoNaEstrada = 15.9; //insira o consumo médio do seu veículo na estrada.
let distanciaTotalDaViagemEmKm = 41; //insira quantos Km totais irá percorrer.
let distanciaParcialNaCidade = distanciaTotalDaViagemEmKm - 29; //insira quantos km fará dentro da estrada.
let distanciaParcialNaEstrada = distanciaTotalDaViagemEmKm - 12; //insira quantos km fará dentro da cidade.
let tipoDeCombustivel = "Gpl"; //digite o tipo de combustível que abasteceu ( Gasóleo, §Gasolina ou GPL. ).
let valorCombustivel; //variável para receber o combustível. 

//constante para calcular quantos litros de gasoleo será gasto no percurso.
const consumoViagemSoEmEstrada = distanciaTotalDaViagemEmKm / consumoVeiculoNaEstrada;
const consumoViagemSoEmCidade = distanciaTotalDaViagemEmKm / consumoVeiculoNaCidade;
const consumoViagemEmEstradaECidade = ((distanciaParcialNaEstrada / consumoVeiculoNaEstrada) + (distanciaParcialNaCidade / consumoVeiculoNaCidade));


if (tipoDeCombustivel === "Gasolina" ){
    valorCombustivel = valorGasolina;
} else if (tipoDeCombustivel === "Gasóleo" ){
    valorCombustivel = valorGasoleo;
} else if (tipoDeCombustivel === "Gpl" ){
    valorCombustivel = valorGpl;
} else {
    console.log('Tipo de combustível inválido, escolha entre Gasolina, Gasóleo ou Gpl.');
}

// se o combustível for válido os calculos para saber quanto se gastou em euro.
if (valorCombustivel){
const custoViagemSoEmEstrada = consumoViagemSoEmEstrada * valorCombustivel;
const custoViagemSoEmCidade = consumoViagemSoEmCidade * valorCombustivel;
const CustoViagemCidadeEEstrada = consumoViagemEmEstradaECidade * valorCombustivel;

//print
console.log(`Quanto irá gastar se a viagem for só em estrada sem pedágio:  ${custoViagemSoEmEstrada.toFixed(2)} €`);
console.log("___________________________________________________");
console.log(`Quanto irá gastar se a viagem for só dentro de cidade: ${custoViagemSoEmCidade.toFixed(2)} €`);
console.log("___________________________________________________");
console.log(`Quando passado por dentro de cidade e estrada: ${CustoViagemCidadeEEstrada.toFixed(2)} €`);
//aqui o .toFixed(2) é uma função do java Script para arredondar os números. Neste caso pedi para arredondar para 2. Ex.: se a saída for "4.23451", ficará "4.23" . 
}