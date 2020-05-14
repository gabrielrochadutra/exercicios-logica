
function registrar() {
    let precoProduto = Number(document.getElementById('txtpp').value)
    let quantidade = Number(document.getElementById('txtq').value)
    let pagamento = Number(document.getElementById('txtp').value)
    let resultado = document.getElementById('res')
    let totalCompra = precoProduto * quantidade

    if (totalCompra == pagamento) {
        let troco = 0
        resultado.innerHTML = `Total da compra: R$ ${totalCompra.toFixed(2)}<br>`
        resultado.innerHTML += `Total recebido: R$ ${pagamento.toFixed(2)}<br>`
        resultado.innerHTML += `Troco: R$ ${troco.toFixed(2)}<br>`
    } else if (totalCompra > pagamento) {
        let falta = totalCompra - pagamento
        resultado.innerHTML = `Total da compra: R$ ${totalCompra.toFixed(2)}<br>`
        resultado.innerHTML += `Total recebido: R$ ${pagamento.toFixed(2)}<br>`
        resultado.innerHTML += `Falta: R$ ${falta.toFixed(2)}<br>`
    } else {
        let troco = pagamento - totalCompra
        resultado.innerHTML = `Total da compra: R$ ${totalCompra.toFixed(2)}<br>`
        resultado.innerHTML += `Total recebido: R$ ${pagamento.toFixed(2)}<br>`
        resultado.innerHTML += `Troco: R$ ${troco.toFixed(2)}<br>`
    }
}