
function converter() {
    let escala = document.getElementById('txte').value
    let temperatura = Number(document.getElementById('txtt').value)
    let resultado = document.getElementById('res')

    if (escala = 'F') {
        let celsius = 5 / 9 * (temperatura - 32)
        resultado.innerHTML = `Temperatura equivalente em Celsius: ${celsius.toFixed(2)}`
    } 
    if (escala = 'C') {
        let fahrenheit = 9 * temperatura / 5 + 32
        resultado.innerHTML = `Temperatura equivalente em Fahrenheit: ${fahrenheit.toFixed(2)}`
    }
}