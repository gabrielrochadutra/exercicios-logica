
let nomes = ['João', 'Maria', 'Teresa', 'Carlos', 'Paulo']

let idades = [32, 21, 15, 23, 17]

let maior = idades[0]
let posMaior = 0


for (i = 1; i < idades.length; i++) {
    if ( idades[i] > maior ) {
        maior = idades[i]
        posMaior = i
    }
}
console.log(`Pessoa mais velha: ${nomes[posMaior]}`)