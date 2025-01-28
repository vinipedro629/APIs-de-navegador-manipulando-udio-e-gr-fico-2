//inicia o canvas
var canvas = document.getElementById("detalhes");
var ctx = canvas.getContext("2d");

//colete o elemento do audio
var musica = document.getElementById("musica");

//exibe a duração da música
ctx.fillText("Duração:"+musica.duration+" segundos", 10, 10);