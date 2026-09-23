const botao = document.getElementById("butao");
const texto = document.getElementById("texto");
const btncor = document.getElementById("btncor");
const btnTexto = document.getElementById("btnTexto"); 
const paragrafo = document.getElementById("paragrafo");

// Questão 4: Damos o nome 'btnEsconder' para a variável do botão
const btnEsconder = document.getElementById("btnEsconder"); 
const mensagem = document.getElementById("mensagem");

function trocarTexto() {
    if (texto.textContent === "Olá, mundo!") {
        texto.textContent = "Olá, JavaScript!";
    } else {
        texto.textContent = "Olá, mundo!";
    }
}

function trocarfundo() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

function trocarcor() {
    if (paragrafo.style.color === "blue") {
        paragrafo.style.color = "black";
    } else {
        paragrafo.style.color = "blue";
    }
}

// Mudei o nome da função para 'alternarMensagem' para não dar conflito
function alternarMensagem() {
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
}

botao.addEventListener("click", trocarTexto);
btncor.addEventListener("click", trocarfundo);
btnTexto.addEventListener("click", trocarcor);
btnEsconder.addEventListener("click", alternarMensagem);
