// Fazer um programa para ler o nome e idade de duas pessoas.
// Ao final, mostrar uma mensagem com os nomes e a media de idade entre essas pessoas.

let nome1 = 'Maria'
let nome2 = 'João'
let idade1 = 19
let idade2 = 20

let media = (idade1 + idade2) / 2

console.log(`A média de idade entre ${nome1} e ${nome2} é de ${media}`)

// Usando objetos

let pessoa1 = {
    nome: 'Maria',
    idade: 19
}
let pessoa2 = {
    nome: 'João',
    idade: 20
}

let media2 = (pessoa1.idade + pessoa2.idade) / 2

console.log(`A média de idade entre ${pessoa1.nome} e ${pessoa2.nome} é de ${media2}`)

// Usando vetores

let pessoas = [
    {
    nome: 'Maria',
    idade: 19
    },
    {
    nome: 'João',
    idade: 20
    }
]

let media3 = (pessoas[0].idade + pessoas[1].idade) / 2

console.log(`A média de idade entre ${pessoas[0].nome} e ${pessoas[1].nome} é de ${media3}`)
