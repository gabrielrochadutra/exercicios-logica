
function verificar() {
    let n1 = Number(document.getElementById('txt1').value)
    let n2 = Number(document.getElementById('txt2').value)
    let resposta = document.getElementById('res')

    let soma = 0
    let maior = 0
    let menor = 0

    if ( n1 < n2 ) {
        maior = n2
        menor = n1
    } else {
        maior = n1
        menor = n2
    }

    for ( let i = menor + 1; i < maior; i++) {
        if ( i % 2 !== 0) {
            soma += i 
        }
    }
    resposta.innerHTML = `Soma igual a: ${soma}`
}