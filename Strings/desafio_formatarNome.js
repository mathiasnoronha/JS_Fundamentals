function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.lastIndexOf(" ")
    if(primeiroEspaco < 0) {
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobreNome + ", " + primeiroNome

}

console.log(formatarNome("Mathias"))
console.log(formatarNome("Mathias Noronha"))
console.log(formatarNome("Mathias Noronha Rodrigues"))

console.log("abcdefghf".split("e"))
