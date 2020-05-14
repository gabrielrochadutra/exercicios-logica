
function calcular() {
    let a = Number(document.getElementById('txta').value)
    let b = Number(document.getElementById('txtb').value)
    let c = Number(document.getElementById('txtc').value)
    let resultado = document.getElementById('res')

    if ( a == 0 ) {
        resultado.innerHTML = `O "a" não pode ser igual a zero.`
    } else {    
        let delta = (b * b) - 4 * a * c
    
        if (delta < 0) {
            resultado.innerHTML = `Nâo existem raízes reais.<br>`
          
            } else if (delta == 0) {
            let raizDeDelta = Math.sqrt(delta)
            let x = ( -b + raizDeDelta ) / (2 * a )
            resultado.innerHTML = `O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>`
            resultado.innerHTML += `Portanto, X1 e X2 = ${x}<br>`
        } else {
            let raizDeDelta = Math.sqrt(delta)
            resultado.innerHTML = `delta = ${delta}<br>`
            resultado.innerHTML += `raiz de delta = ${raizDeDelta}<br>`
    
            let x1 = ( -b + raizDeDelta ) / (2 * a )
            let x2 = ( -b - raizDeDelta ) / (2 * a )
            resultado.innerHTML += `X1 = ${x1.toFixed(4)}<br>`
            resultado.innerHTML += `X2 = ${x2.toFixed(4)}<br>`
        }
    }
}