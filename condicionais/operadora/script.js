
function calcular () {
    let minutos = Number(document.getElementById('txtm').value)
    let franquiaM = 100
    let franquiaV = 50
    let excedenteV = 2
    let resultado = document.getElementById('res')

    if (minutos > franquiaM) {
        let excedenteM = minutos - franquiaM
        let total = franquiaV + (excedenteM * 2)
        resultado.innerHTML = `Você excedeu ${excedenteM} minutos da franquia.<br>`
        resultado.innerHTML += `O valor da conta é R$ ${total}.`
    } else {
        resultado.innerHTML = `Você utilizou apenas ${minutos} minutos da franquia.<br>`
        resultado.innerHTML += `O valor da conta é R$ ${franquiaV}.`
    }
}