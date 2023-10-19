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
        console.log("XP do " + heroi + " é " + xp + " [Radiante]")
        break

    case xp > 9000:
        console.log("XP do " + heroi + " é " + xp + " [Imortal]")
        break

    case xp > 8000:
        console.log("XP do " + heroi + " é " + xp + " [Ascendente]")
        break
    
    case xp > 7000:
        console.log("XP do " + heroi + " é " + xp + " [Platina]")
        break

    case xp > 5000:
        console.log("XP do " + heroi + " é " + xp + " [Ouro]")
        break

    case xp > 2000:
        console.log("XP do " + heroi + " é " + xp + " [Prata]")
        break

    case xp > 1000:
        console.log("XP do " + heroi + " é " + xp + " [Bronze]")
        break

    case xp === 0:
        console.log("Inicie o jogo.")
        break

    default:
        console.log("XP do " + heroi + " é " + xp + " [Ferro]")
}