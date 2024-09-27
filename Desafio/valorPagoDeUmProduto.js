/* Elaborar um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

        Código de condição de pagamento:
            - À vista debito, recebe 10% de desconto;
            - À vista no MBway ou dinheiro, recebe 15% de desconto;
            - Em duas vezes preço normal da etiqueta sem juros;
            - Acima de duas vezes preço normal mais acrécimo de juros de 10%.
*/

function calcularValorFinal (valorProduto, condicaoDePagamento){
    let valorFinal;
    
    if (condicaoDePagamento === "debito"){
        valorFinal = valorProduto * 0.90; // 10% de desconto
        console.log(`Pagamento em débito. Valor com 10% de desconto: €${valorFinal.toFixed(2)}`);
    } else if (condicaoDePagamento === "MBway" || condicaoDePagamento === "dinheiro"){
        valorFinal = valorProduto * 0.85; //15% de desconto
        console.log(`Pagamento em ${condicaoDePagamento}. Valor com 15% de desconto: €${valorFinal.toFixed(2)}`);
    } else if (condicaoDePagamento === "2x"){
        valorFinal = valorProduto; //Preço sem desconto por ser parcelado
        console.log(`Pagamento parcelado em 2 vezes. Valor do produto é total e sem descontos: €${valorFinal.toFixed(2)}`);
    } else {
        const parcelas = parseInt (condicaoDePagamento); //converte a condição de parcela para um número
        if (parcelas >2) {
            valorFinal = valorProduto * 1.10; //acrécimo de 10%.
            console.log(`Pagamento em ${parcelas}. Valor do produto acrescerá um montante de 10%, com o valor final de : €${valorFinal.toFixed(2)}`);
        }
    }
    return valorFinal;
}

calcularValorFinal(100, 'MBway');
