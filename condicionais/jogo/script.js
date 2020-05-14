
function calcular() {
    let inicio = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let resposta = document.getElementById('res')

    if ( fim > inicio ) {
        let duracao = fim - inicio
        resposta.innerHTML = `Duração: ${duracao} horas.`
    } else {
        let duracao = (24 - inicio) + fim
        resposta.innerHTML = `Duração: ${duracao} horas.`
    }
}