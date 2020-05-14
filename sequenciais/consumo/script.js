
function calculaConsumo() {
    let distancia = Number(document.getElementById('txtd').value)
    let combustivel = Number(document.getElementById('txtc').value)
    let consumo = distancia / combustivel
    let resultado = document.getElementById('res')
    resultado.innerHTML = `O consumo médio do veículo foi de ${consumo.toFixed(3)} km por litro.`
}