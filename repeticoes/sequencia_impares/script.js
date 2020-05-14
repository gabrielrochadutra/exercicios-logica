
function verificar() {
    let n1 = Number(document.getElementById('txt1').value)
    let resposta = document.getElementById('res')
    
    resposta.innerHTML = ''

    for ( let i = 1; i <= n1; i++) {
        if ( i % 2 !== 0 ) {
            resposta.innerHTML += `<p>${i}</p>`
        }
    }
}