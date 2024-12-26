let numero = 1234567.890

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5))

console.log(numero.toPrecision(8))
console.log(typeof numero.toPrecision(8))

console.log(123 .toPrecision(6))

numero = 12.34567
console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString(2))
console.log(typeof numero.toString(2))

// 0 - 0, 1 - 1, 2 - 10 , 3 - 11, 4 - 100
// numeros binários

console.log(0 .toString(2) )
console.log(1 .toString(2) )
console.log(2 .toString(2) )
console.log(3 .toString(2) )
console.log(4 .toString(2) )
console.log(5 .toString(2) )
console.log(7 .toString(2) )

// 10 - a, 11 - b, 12 .... 15- f

console.log(15 . toString(16))
console.log(16 . toString(16))

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("en-US"))
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("en-US", {style: "currency", currency: "USD"}))
console.log(numero.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}))

console.log(Number.MAX_VALUE, Number.MIN_VALUE)

// MAX_VALUE O maior número positivo representável.
// MIN_VALUE O menor número positivo representável, ou seja, o número positivo mais próximo de zero (sem realmente ser zero).

let numeroAsString = "a3.456a"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))