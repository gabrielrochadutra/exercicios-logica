
let notas = [10.0, 15.5, 13.2, 9.8]

let soma = 0
let media = 0

for (i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
    media = soma / notas.length
}
console.log(`A soma das notas é de: ${soma}`)
console.log(`A média das notas é de: ${media}`)

let abaixo = 0

for (i = 0; i < notas.length; i++) {
    if ( notas[i] < media) {
        abaixo = notas[i]
        console.log(`Notas abaixo da média: ${abaixo}`)
    }
}