
function classificar() {
    let glicose = Number(document.getElementById('txtg').value)
    let resultado = document.getElementById('res')

    if (glicose <= 100) {
        resultado.innerHTML = 'Classificação NORMAL.'
    } else if (glicose > 100 && glicose <= 140) {
        resultado.innerHTML = 'Classificação ELEVADO.'
    } else {
        resultado.innerHTML = 'Classificação DIABÉTES.'
    }
}