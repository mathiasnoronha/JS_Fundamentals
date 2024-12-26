
let str1 = "minha string!"
// console.log(str1.replace("i", "o"))
// console.log(str1)

// console.log(str1.indexOf("asdasdas"))
// console.log(str1.includes("string"))
// console.log(str1.indexOf("minha"))
// console.log(str1.indexOf("minha") >= 0)

// console.log(str1.slice(2, 7))
// console.log(str1.substring(2, 7))

// console.log(str1.slice(-5))
// console.log(str1.substring(-5))

// console.log(str1.slice(8, 1))
// console.log(str1.substring(8, 1))

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1)

let strAsObj = new String("minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())
console.log("===========================")

// str1 = `
//          teste            
// `
// console.log(str1)
// console.log("===========================")
// console.log(str1.trim())
// console.log("===========================")
// console.log(str1.trimEnd())
// console.log("===========================")
// console.log(str1.trimStart())
// console.log("===========================")
// console.log(str1)

str1 = "0123456789"
console.log(str1.padStart(20))
console.log(str1.padStart(20, "*"))
console.log(str1.padEnd(20, "*"))
console.log(str1.padEnd(20, "*").length)
console.log(str1)

let telefone1 = "91234-2345"
let telefone2 = "1234-2345"
function mascararTelefone(numero) {
    let hifenPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifenPosicao)
    let numeroFinal = numero.slice(hifenPosicao + 1)
    let doisUltimosNumero = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length,"*" )}-${doisUltimosNumero.padStart(numeroFinal.length, "*")}` 
}

console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

let str2 = "Hoje é sabado"
console.log(str2.startsWith("Hoje", 0))
console.log(str2.endsWith("sabado"))


let str3 = "abcdefgh"
console.log(str3.charAt(1))
console.log(str3[1])
console.log(str3.charCodeAt(0))
console.log(str3.charCodeAt(1))