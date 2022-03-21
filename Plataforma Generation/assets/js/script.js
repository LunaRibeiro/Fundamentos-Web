/* 
var - global
let - local
const - constante

Por boas praticas, normalmente se usa o let.

Case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClass()
por seletor: querySelector()

*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //# por ser id - .  se for classe
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){         //-1 = Não tem
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length <= 100){
        txtAssunto.innerHTML = 'Precisa de no mínimo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}


function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    } else{
        alert ("Preencha o formulário corretamente antes de enviar")
    }
}

function zoom(){
    mapa.style.width = '800px'
    mapa.style.width = '600px'
}

function normal(){
    mapa.style.width = '400px'
    mapa.style.width = '250px'
}