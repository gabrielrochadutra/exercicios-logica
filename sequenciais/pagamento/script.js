
function calcular() {
    let nome = document.getElementById('txtn').value
    let valorHora = Number(document.getElementById('txtv').value)
    let totalHoras = Number(document.getElementById('txtq').value)
    let pagamento = valorHora * totalHoras
    let resultado = document.getElementById('res')
    resultado.innerHTML = `O pagamento para ${nome} deve ser de R$ ${pagamento.toFixed(2)} 🤟`
    document.getElementById('txtn').value = ''
    document.getElementById('txtv').value = ''
    document.getElementById('txtq').value = ''
    document.getElementById('txtn').focus()
}