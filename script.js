//  PRATICA GUIADA I
// const idadeDependente = Number(prompt('Qual a idade do dependente?'))
// if aninhado
// if (idadeDependente >= 13) {
//     if(idadeDependente < 18) {
//         console.log('Cartao aprovado!')
//     } else {
//         console.log('Cartao reprovado, proucure outras opcoes na labank')
//     }

// } else {
//     console.log('Cartao reprovado, procure outras opcoes na labank')
// } 
// // if + operadores logicos
// if (idadeDependente >= 13 && idadeDependente < 18) {
//     console.log('Cartao aprovado!')
// } else {
//     console.log('Cartao reprovado')
// }
// PRATICA GUIADA II
// if ternario
// idadeDependente === 13 ? console.log('aprovadasso eh nos') : console.log('tenta depois irmao')
//switch case
// const tipoCartao = Number(prompt('Digite o numero do tipo de cartao escolhido'))
// switch(tipoCartao) {
//     case 1:
//         console.log('cartao facil')
//     break
//     case 2:
//         console.log('cartao black')
//     break
//     case 3:
//         console.log('cartao platinum')
//     break
//     case 4:
//         console.log('cartao master gold')
//     break
//     default:
//         console.log('Opcao nao encontrada, escolha uma das acima')                
// }

// EXERCICIO DE FIXACAO
const numero = Number(prompt('Digite aqui um numero'))
//if aninhado
// if (numero % 2 === 0) {
//     if(numero % 3 === 0) {
//         console.log('numero divisivel')
//     } else {
//         console.log('divisivel por um mas nao por outro')
//     }

// } else {
//     console.log('nao eh divisivel')
// }
// if + operador logico
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('Numero eh divisivel')
    // numero === 30 ? console.log('UFA ACERTEI') : console.log('NAO FOI DESSA VEZ')
    switch(numero) {
        case 6:
            console.log('o numero eh 6 doidao')
            break
        case 12:
            console.log('eh 12 maluco, eh 12');
            break
        case 18:
            console.log('18 tu ja vai em cana otario')
            break
        case 24:
            console.log('24 e 30nois pula')
            break
         case 30:
            console.log('30? ja ta veio')
            break
        default:
            console.log('maior que 30 ou menor que 6, da uma checada ai')
            break
    }
} else {
    console.log('Numero nao eh divisivel');
}