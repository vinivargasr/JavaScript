/*
function parimp(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

var cmc = parimp(4)

console.log(cmc)


function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(5, 3))


var v = function(x) {
    return x * 2
}

console.log(v(5))
*/


function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
