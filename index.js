//VARIÁVEIS

let heroi = ""

let xpInicial = 0    

let xpConquistado = 0

//OPERADORES

let xp = xpInicial + xpConquistado


//ESTRUTURA DE REPETIÇÃO

if(heroi.length === 0){
    console.log("Escolha um herói.")
}


//LAÇO DE REPETIÇÃO

switch(true){
    case xp > 10000:
        console.log("O Herói de nome " + heroi + " está no nível Radiante.")
        break

    case xp > 9000:
        console.log("O Herói de nome " + heroi + " está no nível Imortal")
        break

    case xp > 8000:
        console.log("O Herói de nome " + heroi + " está no nível Ascendente")
        break
    
    case xp > 7000:
        console.log("O Herói de nome " + heroi + " está no nível de Platina")
        break

    case xp > 5000:
        console.log("O Herói de nome " + heroi + " está no nível de Ouro")
        break

    case xp > 2000:
        console.log("O Herói de nome " + heroi + " está no nível de Prata")
        break

    case xp > 1000:
        console.log("O Herói de nome " + heroi + " está no nível de Bronze")
        break

    case xp === 0:
        console.log("Inicie o jogo.")
        break

    default:
        console.log("O Herói de nome " + heroi + " está no nível de Ferro")
}