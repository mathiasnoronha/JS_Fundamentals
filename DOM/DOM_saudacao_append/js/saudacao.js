(function () {
    const nomeUsuario = "Mathias"
    
    if(nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`
        // tipo HTML

        // elementoPai.insertBefore(novoElemento, elementoReferencia)
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento,elementoPai.firstElementChild)
    }

})()

// document.querySelector(".top-bar p").textContent = "Bem-vindo(a), " + nomeUsuario
// elemento.textContent += nomeUsuario