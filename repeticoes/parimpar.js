
let n = [ -5, 0, 3, -4]

for ( i = 0; i < n.length; i++) {
    if ( n[i] % 2 == 0 && n[i] < 0) {
        console.log(`${n[i]} Par negativo`)
    } else if ( n[i] % 2 == 0 && n[i] > 0) {
        console.log(`${n[i]} Par positivo`)
    }
    else if ( n[i] % 2 !== 0 && n[i] < 0) {
        console.log(`${n[i]} Ímpar negativo`)
    }
    else if ( n[i] == 0 ) {
        console.log('Nulo')
    }
    else {
        console.log(`${n[i]} Ímpar positivo`)
    }
}