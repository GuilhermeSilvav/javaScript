//var posso usar fora do escopo, é global
//const e let nao, somente dentro do escopo

document.write("<h2>Variavel var</h2>")

var nome = "Karize";
var idade = 51;
var cidade = "Blumenau";

document.write("nome" + nome + "idade" + idade + "mora em: " + cidade + "<br>")

nome = "José";
idade = 61;
cidade = "Gaspar";

//se usar o mesmo nome das variaveis acima nao vai aparecer
const nome1 ="maria";

document.write("nome "+nome1)