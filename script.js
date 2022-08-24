let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.getElementById('mapa')


function validaNome() {
    let txtnome = document.querySelector("#txtnome")
    if(nome.value.length < 3) {
        txtnome.innerHTML = 'NOME INVÁLIDO'
    } else {
        txtnome.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail() {
    let txtemail = document.querySelector("#txtemail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtemail.innerHTML = 'E-mail INVÁLIDO'
    } else {
        txtemail.style.display = 'none'
        emailOk = true
    }
}

function validaAssunto() {
    let txtassunto = document.querySelector("#txtassunto")
    if(assunto.value.length > 100) {
        txtassunto.innerHTML = 'Digite no máximo 100 caracteres'
    } else {
        txtassunto.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Olá " + nome.value + ", Sua mensagem foi recebida com sucesso!")
} else {
    alert("Preencha os campos corretamente!")
}
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'
    mapa.style.borderRadius = '0%'

}

function mapaNormal(){
    mapa.style.width = '250px'
    mapa.style.height = '250px'
    mapa.style.borderRadius = '50%'
} 