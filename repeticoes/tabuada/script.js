
function tabuada() {
    let n = Number(document.getElementById('txtn').value)
    let resposta = document.getElementById('res')
    resposta.innerHTML = ''

    for (let i = 0; i <= 10; i++) {
    resposta.innerHTML += `<p>${n} x ${i} = ${n * i}</p>`
    }
}