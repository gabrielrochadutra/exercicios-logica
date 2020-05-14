
let tipo = ['c','r','s','c','r','c','r','s','c','r']
let quantidade = [10, 6, 15, 5, 14, 9, 6, 8, 5, 14]

let somaC = 0
let somaR = 0
let somaS = 0

let total = 0

for (i = 0; i < tipo.length; i++) {
    if (tipo[i] === 'c') {
        somaC += quantidade[i]
    }
    if (tipo[i] === 'r') {
        somaR += quantidade[i]
    }
    if (tipo[i] === 's') {
        somaS += quantidade[i]
    }
}

total = somaS + somaR + somaC

console.log(`Total de cobaias: ${total}`)
console.log(`Total de Ratos: ${somaR}`)
console.log(`Total de Sapos: ${somaS}`)
console.log(`Total de Coelhos: ${somaC}`)

console.log(`Percentual de Ratos: ${(somaR/total*100).toFixed(2)}`)
console.log(`Percentual de Sapos: ${(somaS/total*100).toFixed(2)}`)
console.log(`Percentual de Coelhos: ${(somaC/total*100).toFixed(2)}`)