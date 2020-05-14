
function verificar () {
    let n1 = Number(document.getElementById('txt1').value)
    let n2 = Number(document.getElementById('txt2').value)
    let resultado = document.getElementById('res')

    if ( n1 % 2 == 0 && n2 % 2 == 0) {
        resultado.innerHTML = 'São múltiplos'
    } else {
        resultado.innerHTML = 'Não são múltiplos'
    }
}