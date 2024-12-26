(function () {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if (nomeUsuario) {
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else {
        // elemento.parentElement.style.display = "none"
        // elemento.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }

    console.log(elemento)

})()

// document.querySelector(".top-bar p").textContent = "Bem-vindo(a), " + nomeUsuario
// elemento.textContent += nomeUsuario