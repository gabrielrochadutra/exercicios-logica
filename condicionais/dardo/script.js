
function verificar() {
    let a1 = Number(document.getElementById('txt1').value)
    let a2 = Number(document.getElementById('txt2').value)
    let a3 = Number(document.getElementById('txt3').value)
    let resultado = document.getElementById('res')

    if (a1 > a2 && a1 > a3) {
        maior = a1.toFixed(2)
        resultado.innerHTML = `O arremesso mais longo foi de ${maior} metros.`
    } else if (a2 > a3) {
        maior = a2.toFixed(2)
        resultado.innerHTML = `O arremesso mais longo foi de ${maior} metros.`
    } else {
        maior = a3.toFixed(2)
        resultado.innerHTML = `O arremesso mais longo foi de ${maior} metros.`
    }
}