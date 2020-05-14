
function calcular() {
    let base = Number(document.getElementById('txtb').value)
    let altura = Number(document.getElementById('txta').value)
    let area = base * altura
    let perimetro = 2 * (base + altura)
    let diagonal = Math.hypot(base, altura)
    let resultado = document.getElementById('res')
    resultado.innerHTML = `A área do retângulo é de ${area.toFixed(4)}.<br>`
    resultado.innerHTML += `O perímetro do retângulo é de ${perimetro.toFixed(4)}.<br>`
    resultado.innerHTML += `A diagonal do retângulo é de ${diagonal.toFixed(4)}.`
}