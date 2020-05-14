
let n = [ 14, 35, 10, 131, 8, 9, 25, 32, 101, 2]

let somaFora = 0
let somaDentro = 0

for ( let i = 0; i < n.length; i++) {
    if ( n[i] >= 10 && n[i] <= 20) {
        somaDentro++
    } else {
        somaFora++
    }
}
console.log(`Dentro: ${somaDentro} Fora: ${somaFora}`)