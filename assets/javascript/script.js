//VARIÁVEIS:

//Nome:
let nome = document.querySelector('#nome')
let nomeErro = document.querySelector('#nomeErro')
let nomeOk = false
nome.addEventListener('keyup', validaNome)

//Email:
let email = document.querySelector('#email')
let emailErro = document.querySelector('#emailErro')
let emailOk = false
email.addEventListener('keyup', validaEmail)

//Assunto:
let assunto = document.querySelector('#assunto')
let assuntoErro = document.querySelector('#assuntoErro')
let assuntoOk = false
assunto.addEventListener('keyup', validaAssunto)

//Botão:
let botao = document.querySelector('#botao')
botao.addEventListener('click', enviar)


//FUNÇÕES:

function validaNome(){
    if(nome.value.length <= 3){
        nomeErro.innerHTML = 'Nome inválido'
    } else {
        nomeErro.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail(){
    if(email.value.indexOf == -1 || email.value.indexOf('.') == -1){
        emailErro.innerHTML = 'Email inválido'
    } else {
        emailErro.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto(){
    if(assunto.value.length > 100){
        assuntoErro.innerHTML = 'Quantidade de carácteres excedida(Limite máximo 100 carácteres).'
    }else {
        assuntoErro.innerHTML = ''
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk && emailOk && assuntoOk){
        alert('Email enviado com sucesso !')
    } else {
        alert('Preencha os campos corretamente.')
    }
}