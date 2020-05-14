// Fazer um programa para ler dois valores inteiros X e Y
// e depois mostrar na tela o valor da soma entre eles

function somar() {
    let x = Number(document.getElementById('txtx').value)
    let y = Number(document.getElementById('txty').value)
    let soma = x + y
    let resultado = document.getElementById('res')
    resultado.innerHTML = `Você digitou ${x} e ${y}, e a soma deles é ${soma}.`
    document.getElementById('txtx').value = ''
    document.getElementById('txty').value = ''
    document.getElementById('txtx').focus()

}

