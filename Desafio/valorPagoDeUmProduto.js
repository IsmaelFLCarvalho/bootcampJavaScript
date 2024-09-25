/* Elaborar um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

        Código de condição de pagamento:
            - À vista debito, recebe 10% de desconto;
            - À vista no MBway ou dinheiro, recebe 15% de desconto;
            - Em duas vezes preço normal da etiqueta sem juros;
            - Acima de duas vezes preço normal mais acrécimo de juros de 10%.
*/

const valorProdutoLoja1 = 15.00;
const tipoDePagamento = 'MBway';
const pgtoDebito = valorProdutoLoja1 - (valorProdutoLoja1 * 0.10);
const pgtoMbayEDinheiro = valorProdutoLoja1 - (valorProdutoLoja1 * 0.15);
const pgtoComAcrescimo = valorProdutoLoja1 * 1.15;

if (tipoDePagamento === 'debito'){
    console.log(`Pagamento em débito. Valor à pagar do produto com desconto de 10% é de ${pgtoDebito.toFixed(2)}.`);
} else if (tipoDePagamento === 'MBway' || tipoDePagamento === 'dinheiro'){

    console.log(`Pagamento por MBway. Valor à pagar do produto com desconto de 15% é de ${pgtoMbayEDinheiro.toFixed(2)}.`);

} else if (tipoDePagamento === '2x'){
    console.log(`Pagamento em 2 vezes. Valor à pagar é de ${valorProdutoLoja1.toFixed(2)}.`);

} else {
    console.log(`Pagamento em ${tipoDePagamento}. O produto terá um acréscimo de 15%. O valor total a pagar é de ${pgtoComAcrescimo.toFixed(2)}.`);

}
