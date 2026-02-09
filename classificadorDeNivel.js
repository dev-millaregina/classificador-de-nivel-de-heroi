// Desafio - Classificador de nível de Herói

// Regras (deve ser usado):
//  - variáveis
//  - operadores
//  - laços de repetição
//  - estruturas de decisão

let nomeHeroi = "Homem-aranha"
let xpHeroi = 8423

const nivel1 = "Ferro"
const nivel2 = "Bronze"
const nivel3 = "Prata"
const nivel4 = "Ouro"
const nivel5 = "Platina-Diamante"
const nivel6 = "Ascendente"
const nivel7 = "Imortal"
const nivel8 = "Radiante"

if(xpHeroi <= 1000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel1)
} else if(xpHeroi <= 2000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel2)
} else if(xpHeroi <= 5000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel3)
} else if(xpHeroi <= 7000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel4)
} else if(xpHeroi <= 8000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel5)
} else if(xpHeroi <= 9000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel6)
} else if(xpHeroi <= 10000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel7)
} else
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel8)