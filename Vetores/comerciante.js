
let produto = ['Feijão', 'Arroz', 'Óleo', 'Sal']

let compra = [10.00, 12.00, 5.00, 3.00]

let venda = [11.00, 12.80, 5.70, 4.00]

let lucro = 0
let totalCompra = 0
let totalVenda = 0
let lucroTotal = 0

let contLucroBaixo = 0
let contLucroMedio = 0
let contLucroAlto = 0

for (i = 0; i < produto.length; i++) {
    let lucro = (venda[i] - compra[i]) * 100 / compra[i]
        console.log(`O lucro do produto ${produto[i]} é de ${lucro.toFixed(2)}%.`)
    if (lucro < 10) {   
        contLucroBaixo += 1
    }
    else if (lucro >= 10 && lucro <= 20) {
        contLucroMedio += 1
    } else {
        contLucroAlto += 1
    }
}
console.log(`Produtos com lucro abaixo de 10%: ${contLucroBaixo}`)
console.log(`Produtos com lucro entre 10% e 20%: ${contLucroMedio}`)
console.log(`Produtos com lucro acima de 20%: ${contLucroAlto}`)

for (i = 0; i < compra.length; i++) {
    totalCompra += compra[i]
}
console.log(`Total de compras: ${totalCompra.toFixed(2)}`)

for (i = 0; i < venda.length; i++) {
    totalVenda += venda[i]
}
console.log(`Total de vendas: ${totalVenda.toFixed(2)}`)

lucroTotal = totalVenda - totalCompra
console.log(`Lucro Total: ${lucroTotal.toFixed(2)}`)