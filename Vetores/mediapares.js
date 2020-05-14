
let vetor = [8, 2, 11, 14, 13, 20]

let soma = 0
let pares = 0

for (i = 0; i < vetor.length; i++) {
    if ( vetor[i] % 2 == 0) {
        soma = soma + vetor[i]
        pares = pares + 1
    }
}

if ( pares == 0) {
    console.log('Nenhum par encontrado')
} else {
    let media = soma / pares
    console.log(`Número de pares encontrados: ${pares}`)
    console.log(`Soma dos pares encontrados: ${soma}`)
    console.log(`Média dos pares encontrados: ${media}`)
}
