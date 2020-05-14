
function avaliar() {
    let aluno = document.getElementById('txta').value
    let nota1 = Number(document.getElementById('txtn1').value)
    let nota2 = Number(document.getElementById('txtn2').value)
    let media = (nota1 + nota2) / 2
    let resultado = document.getElementById('res')
    if (media >= 60) {
        resultado.innerHTML = `O aluno ${aluno} obteve média ${media} (APROVADO) 👍`
    } else {
        resultado.innerHTML = `O aluno ${aluno} obteve média ${media} (REPROVADO) 👎`
    }
}