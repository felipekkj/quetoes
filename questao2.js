// bloco 1
//questao 1
function distanciaRestante(distanciaTotal, distanciaPercorrida){
return distanciaTotal - distanciaPercorrida
}
//subtrai o valor percorrido pelo total

//questao 2
function calcularGorjeta(valorRefeicao){
    return valorRefeicao * 0.10
}
//pega o valor total da refeicao e multiplica por 10%

function polegadasParaCm(polegadas){
    return polegadas * 2,54 
}
//pega a quantidade de polegadas e transforma em centimetros

function IdadeEmDias(idadeAnos){
    return idadeAnos * 365
} 
//obtem o valor dos anos e multiplica por 365(todos os dias de um ano)

function precoUnitario(precoTotalPacote, numeroItens){
    return precoTotalPacote / numeroItens
}
//pega o valor total do pacote e divide pelo numero de itens para descobrir o preço de cada unidade

function minutosParaSegundos(minutos){
    return minutos * 60
} 
//tranforma minutos em segundos multiplicando vezes 60

function ehNumero(valor){
   if(typeof valor === "number") 
   return true

   else
   return false
}
//pega o valor e verifica se ele é um número ou nao 

let portaAberta = false;
function verificarPorta(){
    return portaAberta
}
//verifica se a porta está aberta ou fechada pela variavel que definimos

function criarEmail(nomeUsuario){
    return nomeUsuario + "@gmail.com"
}
//o usuario dá um nome e a função complementa com o @gmail.com

function paginasRestantes(totalPaginas, paginasLidas){
    return totalPaginas - paginasLidas
}
//pega o numero total de paginas e subtrai pelas as que ja foram lidas, obtendo entao assim as paginas restantes

//bloco 2
//primeira questao
function temperaturaAgradavel(temperatura){
    if(temperatura >=20 <=25) return true 
    else return false
}
//verifica se a temperatura esta agradavel caso esteja entre 2o e 25 graus

function checarAprovacao(nota){
    if(nota=>7) return true
    else return false
}
//ve a nota do aluno e verifica se foi maior que 7 ou se ele esta de recuperacao

function temEntradaGratuita(idade){
    if(idade=>65) return true
    else return false
}
//verifica se a idade do idoso é maior ou igual que 65 anos e se ele obtem ou nao a entrada gratuita

function ehZero(numero){
    if(numero == 0) return true
    else return false
}
//verifica se o numero apresentado é 0 ou nao

function tipoDeDia(diaSemana){
    if(String=="sabado" || "domingo") return "Fim de semana"
    else "Dia util"
}
//verifica se o dia escrito pela pessoa é um fim de semana ou um dia util

function simularElevador(){
    for(let andar = 1; andar < 5; andar++){
        console.log("subindo para o andar " + andar)
    }
}
//imita um elevador subindo, aumentando os valores do andar utilizando o for e imprimindo na tela o texto solicitado