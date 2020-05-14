
function calculaMedidas() {
    let a = Number(document.getElementById('txta').value)
    let b = Number(document.getElementById('txtb').value)
    let c = Number(document.getElementById('txtc').value)
    let areaQuadrado = a * a
    let areaTriangulo = (a * b) / 2
    let areaTrapezio = ((a + b) * c) / 2
    let resultado = document.getElementById('res')
    resultado.innerHTML = `A área do quadrado é ${areaQuadrado.toFixed(4)}<br>`
    resultado.innerHTML += `A área do triangulo é ${areaTriangulo.toFixed(4)}<br>`
    resultado.innerHTML += `A área do trapézio é ${areaTrapezio.toFixed(4)}`
}