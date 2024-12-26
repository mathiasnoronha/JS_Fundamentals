{
   const txtEmail = document.getElementById("txtEmail")

   function editarEmail() {
    txtEmail.disabled = false
    txtEmail.focus()
   }

   function disableEmail() {
    txtEmail.disabled = true
}
}

//    const msgFeedback = document.getElementById("newsletterFeedback")

//    function cadastrarEmail() {
//     let email = txtEmail.value
//     console.log("cadastrarEmail")
//     msgFeedback.innerHTML = `O email ${email} foi castradado com sucesso`
//    }

// preciso mudar o ID do Button e também trocar para enviar e tirar o onblur
