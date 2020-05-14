
let pessoas = [
    {
        nome: 'João',
        idade: 15,
        altura: 1.82,
    },
    {
        nome: 'Maria',
        idade: 16,
        altura: 1.60,
    },
    {
        nome: 'Teresa',
        idade: 14,
        altura: 1.58,
    },
    {
        nome: 'Carlos',
        idade: 21,
        altura: 1.65,
    },
    {
        nome: 'Paulo',
        idade: 17,
        altura: 1.78,
    }
]

let soma = 0

for ( i = 0; i < pessoas.length; i++) {
    soma = soma + pessoas[i].altura
}
let media = soma / pessoas.length

console.log(`Média de altura: ${media.toFixed(2)}`)

let menores = 0
let porcentagemMenores = 0

for ( i = 0; i < pessoas.length; i++) {
    if ( pessoas[i].idade < 16 ) {
        menores = menores + 1
    }
    porcentagemMenores = menores * 100 / pessoas.length
}
console.log(`Porcentagem de menores de 16 anos: ${porcentagemMenores}%`)

for ( i = 0; i < pessoas.length; i++) {
    if ( pessoas[i].idade < 16 ) {
        console.log(pessoas[i].nome)
    }
}