
function calculaArea() {
    let r = Number(document.getElementById('txtr').value)
    let a = 3.14159 * (r ** 2)
    let resultado = document.getElementById('res')
    resultado.innerHTML = `A área do círculo é de ${a.toFixed(3)}`
}