
let altura = [1.70, 1.83, 1.54, 1.61, 1.75]

let sexo = ['F', 'M', 'M', 'F', 'F']

let maior = altura[0]
let menor = altura[0]

for (i = 0; i < altura.length; i++) {
    if ( altura[i] > maior) {
        maior = altura[i]
    }
    if ( altura[i] < menor) {
        menor = altura[i]
    }
}
console.log(`Maior altura: ${maior}`)
console.log(`Menor altura: ${menor}`)

let somaF = 0
let mediaF = 0
let contF = 0
let contM = 0

for (i = 0; i < sexo.length; i++) {
    if ( sexo[i] == 'F') {
        somaF = somaF + altura[i]
        contF += 1 
    }
    if ( sexo[i] == 'M') {
        contM += 1
    }
}
mediaF = somaF / contF

console.log(`Média de altura das mulheres: ${mediaF.toFixed(2)}`)
console.log(`Número de homens: ${contM}`)