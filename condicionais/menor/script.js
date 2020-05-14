
function descobrir() {
    let n1 = Number(document.getElementById('txt1').value)
    let n2 = Number(document.getElementById('txt2').value)
    let n3 = Number(document.getElementById('txt3').value)
    let resultado = document.getElementById('res')

    if (n1 < n2 && n1 < n3) {
        let menor = n1
        resultado.innerHTML = `${menor}`
    }
    else if (n2 < n3) {
        let menor = n2
        resultado.innerHTML = `${menor}`
    }
    else {
        let menor = n3
        resultado.innerHTML = `${menor}`
    }
}