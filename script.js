//iniciando o canvas
var canvas = document.getElementById("carregamento");
var ctx = canvas.getContext("2d");

//configurações
var x = 0;
var y = 0;
var altura = 10;
var largura = 0;
var fator = 50;
var resolucao = 1280;

//cor da barra requisitada pela equipe
ctx.fillStyle = "#4169E1";

//função que anima a barra de progresso
function animacao(){
    ctx.fillRect(x, y, largura = largura+fator, altura);
    //CÓDIGO AVANÇADO: interrompe a função setInterval() para evitar carregamento excessivo
    if(largura > resolucao){
        clearInterval(atualiza);
    }
}

//atualiza a barra a cada 10 milissegundos
var atualiza = setInterval(animacao, 10);