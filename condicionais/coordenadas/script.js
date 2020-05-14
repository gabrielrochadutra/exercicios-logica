
function determinar() {
    let x = Number(document.getElementById('txtx').value)
    let y = Number(document.getElementById('txty').value)
    let resposta = document.getElementById('res')

    if (x > 0 && y > 0) {
        let quadrante = 'Q1'
        resposta.innerHTML = `${quadrante}`
    }
    else if (x < 0 && y > 0) {
        let quadrante = 'Q2'
        resposta.innerHTML = `${quadrante}`
    }
    else if (x < 0 && y < 0) {
        let quadrante = 'Q3'
        resposta.innerHTML = `${quadrante}`
    }
    else if (x > 0 && y < 0) {
        let quadrante = 'Q4'
        resposta.innerHTML = `${quadrante}`
    }
    else if ( x == 0 && y == 0 ) {
        let quadrante = 'Origem'
        resposta.innerHTML = `${quadrante}`
    }
    else if ( x = 0) {
        let quadrante = 'Eixo Y'
        resposta.innerHTML = `${quadrante}`
    } else {
        let quadrante = 'Eixo X'
        resposta.innerHTML = `${quadrante}`
    }
}