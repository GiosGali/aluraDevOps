alert("Bem vindo ao jogo.");

let myNumber = getRandom(10, 40)
let numbersList = []


let tentativa = prompt('Escolha um número entre 10 e 40')
console.log(tentativa)


while (parseInt(tentativa) != myNumber) {
    if (isNaN(Number(tentativa))) {
        console.log("entrada de string");
        tentativa = prompt("Texto não, um número!");
    } else if (tentativa < myNumber) {
        numbersList.push(tentativa);
        console.log(numbersList);
        tentativa = prompt("Tente um número maior.");
    } else if (tentativa > myNumber) {
        numbersList.push(tentativa);
        console.log(numbersList);
        tentativa = prompt("Tente um número menor");
    }
}

//myFuncions


function getRandom(min, max) { 
    return Math.floor( Math.random() * (max - min + 1)) + min;
}