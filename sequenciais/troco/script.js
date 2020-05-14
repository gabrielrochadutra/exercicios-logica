
function calculaTroco() {
    let preco = Number(document.getElementById('txtp').value)
    let quant = Number(document.getElementById('txtq').value)
    let pag = Number(document.getElementById('txtpag').value)
    let total = preco * quant
    let troco = (total - pag) * -1
    let resultado = document.getElementById('res')
    resultado.innerHTML = `O total da compra é de R$ ${total}, a quantia recebida é de ${pag}, e o troco deve ser de R$ ${troco}.`
    document.getElementById('txtp').value = ''
    document.getElementById('txtq').value = ''
    document.getElementById('txtpag').value = ''
    document.getElementById('txtp').focus()
}