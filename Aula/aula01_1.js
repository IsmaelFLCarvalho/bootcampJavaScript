let nomeDaVariavel = 'variável aqui!';

console.log(nomeDaVariavel);

//No meu terminal eu devo primir os seguintes comandos: node NomeDoArquivoASerExecutado.js
//Atenção: A pasta no terminal deve está selecionada. Caso o arquivo esteja em uma página diferente deve procurar com os comando ls e setar em cd.

//alterando a minha variável
nomeDaVariavel = 'Nova Variável!';

//primindo novamente
console.log(nomeDaVariavel);

//caso eu tente mudar sendo uma constante sempre dará erro: 
const nomeDaConstante = 'Constante aqui!';

console.log(nomeDaConstante);

//tentando atibuir uma nova constante
nomeDaConstante = 'Tentando modificar a constante!'; //aqui retornará um erro onde mostrará que estou tentando modificar uma constante e mostrará em que linha isso está acontecendo e qual const estou tentando modificar.

