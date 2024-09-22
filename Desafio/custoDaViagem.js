//                                                                                                   ISMAEL CARVALHO.

//variáveis necessárias para calculos.
let valorGasoleo = 1.48; //insira o valor atual do combustível que irá abastecer.
let consumoVeiculoNaCidade = 11.8; //insira o consumo médio do seu veículo na cidade.
let consumoVeiculoNaEstrada = 15.9; //insira o consumo médio do seu veículo na estrada.
let distanciaTotalDaViagemEmKm = 41; //insira quantos Km totais irá percorrer.
let distanciaParcialNaCidade = distanciaTotalDaViagemEmKm - 29; //insira quantos km fará dentro da estrada.
let distanciaParcialNaEstrada = distanciaTotalDaViagemEmKm - 12; //insira quantos km fará dentro da cidade.

//constante para calcular quantos litros de gasoleo será gasto no percurso.
const consumoViagemSoEmEstrada = distanciaTotalDaViagemEmKm / consumoVeiculoNaEstrada;
const consumoViagemSoEmCidade = distanciaTotalDaViagemEmKm / consumoVeiculoNaCidade;
const consumoViagemEmEstradaECidade = ((distanciaParcialNaEstrada / consumoVeiculoNaEstrada) + (distanciaParcialNaCidade / consumoVeiculoNaCidade));

//Calculos para saber quanto se gastou em euro
const custoViagemSoEmEstrada = consumoViagemSoEmEstrada * valorGasoleo;
const custoViagemSoEmCidade = consumoViagemSoEmCidade * valorGasoleo;
const CustoViagemCidadeEEstrada = consumoViagemEmEstradaECidade * valorGasoleo;

//print
console.log(`Quanto irá gastar se a viagem for só em estrada sem pedágio:  ${custoViagemSoEmEstrada} €`);
console.log("___________________________________________________");
console.log(`Quanto irá gastar se a viagem for só dentro de cidade: ${custoViagemSoEmCidade} €`);
console.log("___________________________________________________");
console.log(`Quando passado por dentro de cidade e estrada: ${CustoViagemCidadeEEstrada} €`);


