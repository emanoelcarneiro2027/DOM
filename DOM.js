const botao = document.getElementById("butao");
const texto = document.getElementById("texto");
const btncor = document.getElementById("btncor");
const btnTexto = document.getElementById("btnTexto"); 
const paragrafo = document.getElementById("paragrafo");
const btnEsconder = document.getElementById("btnEsconder"); 
const mensagem = document.getElementById("mensagem");
const contagem = document.getElementById("contagem");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnMostrarnome = document.getElementById("btnMostranome");
const nome = document.getElementById("nome");
const resultado = document.getElementById("resultado");
const imagem = document.getElementById("imagem");
const btnImagem = document.getElementById("btnImagem");
const textoTamanho = document.getElementById("textoTamanho");
const btnAumentar = document.getElementById("btnAumentar");
const btnAdicionarItem = document.getElementById("btnAdicionarItem");
const lista = document.getElementById("lista");

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

function alternarMensagem() {
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }

}

let numero = 0;

function aumentar() {
    numero++;
    document.getElementById("contagem").innerText = numero;
}

function seunome() {
    document.getElementById("resultado").textContent = nome.value;
}

function trocarImagem() {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbrNn6T8IRB6aShdwjqa1M_sVOpmVvNgrfRRnIs6jBQ&s=10";
}

let tamanho = 16;

function aumentarTexto() {
    tamanho = tamanho + 2;
    textoTamanho.style.fontSize = tamanho + "px";
}

let numeroItem = 0;

function adicionarItem() {

    numeroItem++;
    let item = document.createElement("li");
    item.textContent = "Item " + numeroItem;
    lista.appendChild(item);
}


botao.addEventListener("click", trocarTexto);
btncor.addEventListener("click", trocarfundo);
btnTexto.addEventListener("click", trocarcor);
btnEsconder.addEventListener("click", alternarMensagem);
btnAdicionar.addEventListener("click", aumentar);
btnMostrarnome.addEventListener("click", seunome);
btnImagem.addEventListener("click", trocarImagem);
btnAumentar.addEventListener("click", aumentarTexto);
btnAdicionarItem.addEventListener("click", adicionarItem)
