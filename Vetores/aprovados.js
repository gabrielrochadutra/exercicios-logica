 
let nomes = ['João', 'Maria', 'Carlos', 'Teresa']

let notas1 = [7.0, 9.2, 5.0, 5.5]

let notas2 = [8.5, 6.5, 6.0, 6.5]

let media = 0

for (i = 0; i < nomes.length; i++) {
    media = (notas1[i] + notas2[i]) / 2
    if ( media >= 6) {
        console.log(`Aluno ${nomes[i]} teve média ${media} Aprovado`)
    }
}