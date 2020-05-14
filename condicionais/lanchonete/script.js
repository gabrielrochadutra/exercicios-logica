
function calcular() {
    let cod = document.getElementById('txtc').value
    let quant = Number(document.getElementById('txtq').value)
    let resultado = document.getElementById('res')

    if (cod == 'p1') {
        let total = 5.00 * quant
        resultado.innerHTML = `Valor a pagar R$ ${total.toFixed(2)}`
    }
    if (cod == 'p2') {
        let total = 3.50 * quant
        resultado.innerHTML = `Valor a pagar R$ ${total.toFixed(2)}`
    }
    if (cod == 'p3') {
        let total = 4.80 * quant
        resultado.innerHTML = `Valor a pagar R$ ${total.toFixed(2)}`
    }
    if (cod == 'p4') {
        let total = 8.90 * quant
        resultado.innerHTML = `Valor a pagar R$ ${total.toFixed(2)}`
    }   
    if (cod == 'p5') {
        let total = 7.32 * quant
        resultado.innerHTML = `Valor a pagar R$ ${total.toFixed(2)}`
    } 
}