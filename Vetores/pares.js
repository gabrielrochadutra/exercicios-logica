
let vetor = [8, 2, 11, 14, 13, 20]

let qtdPares = 0

for (i = 0; i < vetor.length; i++) {
    if ( vetor[i] % 2 == 0) {
        console.log(`Números pares: ${vetor[i]}`)
        qtdPares = qtdPares + 1
    }
}
console.log(`Quantidade de pares: ${qtdPares}`)