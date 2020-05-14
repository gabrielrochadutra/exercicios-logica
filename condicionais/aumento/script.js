
function calcular() {
    let func = document.getElementById('txtf').value
    let salario = Number(document.getElementById('txts').value)
    let resultado = document.getElementById('res')

    if (salario <= 1000 ) {
        let aumento = salario * (20/100)
        let novoSalario = salario + aumento
        
        resultado.innerHTML = `Funcionário: ${func}<br>`
        resultado.innerHTML += `Percentual de aumento: 20%.<br>`
        resultado.innerHTML += `Aumento: R$ ${aumento.toFixed(2)}.<br>`
        resultado.innerHTML += `Novo salário: R$ ${novoSalario.toFixed(2)}.`
    }
    if (salario <= 3000 ) {
        let aumento = salario * (15/100)
        let novoSalario = salario + aumento
        
        resultado.innerHTML = `Funcionário: ${func}<br>`
        resultado.innerHTML += `Percentual de aumento: 15%.<br>`
        resultado.innerHTML += `Aumento: R$ ${aumento.toFixed(2)}.<br>`
        resultado.innerHTML += `Novo salário: R$ ${novoSalario.toFixed(2)}.`
    }
    if (salario <= 8000 ) {
        let aumento = salario * (10/100)
        let novoSalario = salario + aumento
        
        resultado.innerHTML = `Funcionário: ${func}<br>`
        resultado.innerHTML += `Percentual de aumento: 10%.<br>`
        resultado.innerHTML += `Aumento: R$ ${aumento.toFixed(2)}.<br>`
        resultado.innerHTML += `Novo salário: R$ ${novoSalario.toFixed(2)}.`
    }
    else {
        let aumento = salario * (5/100)
        let novoSalario = salario + aumento
        
        resultado.innerHTML = `Funcionário: ${func}<br>`
        resultado.innerHTML += `Percentual de aumento: 5%.<br>`
        resultado.innerHTML += `Aumento: R$ ${aumento.toFixed(2)}.<br>`
        resultado.innerHTML += `Novo salário: R$ ${novoSalario.toFixed(2)}.`
    }
}