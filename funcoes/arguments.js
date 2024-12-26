// function soma (n1, n2) {
//     return n1 + n2
// }

// console.log(somar(1,2))

// function soma(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }

// console.log(soma([1, 2, 3]))

function soma() {
    console.log(arguments)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(soma([1, 2, 3]))