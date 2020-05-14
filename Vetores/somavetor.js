
let vetor = [8, 4, 10, 14]
let soma = 0
let media = 0

for (i = 0; i < vetor.length; i++) {
    console.log(`Vetor: ${vetor[i]}`)
}

for (i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i]
}
console.log(`Soma: ${soma}`)
media = soma / vetor.length
console.log(`Media: ${media}`)
