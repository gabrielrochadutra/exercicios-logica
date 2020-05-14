
function calculaArea() {
    let largura = Number(document.getElementById('txtl').value)
    let comprimento = Number(document.getElementById('txtc').value)
    let valorMetro = Number(document.getElementById('txtv').value)
    let area = largura * comprimento
    let valorTerreno = valorMetro * area
    let resultado = document.getElementById('res')
    resultado.innerHTML = `Área do terreno: ${area.toFixed(2)} m².<br>`
    resultado.innerHTML += `Valor do terreno: R$ ${valorTerreno.toFixed(2)}.`
}