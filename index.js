const elementoResposta = document.querySelector("#resposta") 
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
    "Nao",
    "Provavelmente",
    "Sim",
    "Quem sabe",
    "Nao tenho certeza",
    "Pode tentar",
    "Pergunte Novamente"
]

//Clicar em fazer Pergunta
function fazerPergunta(){

if(inputPergunta.value==""){
    alert("Digite uma pergunta")
    return
}

buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

//Gerar umn numero aleatorio para respostas
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random()*totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

setTimeout(function(){
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
}, 3000)

}