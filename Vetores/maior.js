
let vetor = [8, 4, 10, 14, 13, 7]

let maior = vetor[0]
let posMaior = 0

for ( i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
        posMaior = i

    }
}
console.log(maior)
console.log(posMaior)