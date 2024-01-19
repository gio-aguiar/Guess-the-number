alert("Boas vindas ao jogo do número secreto");

let quantidade = 100;
let chute = prompt(`Escolha um número entre 1 e ${quantidade}`);
let numeroSecreto = parseInt(Math.random() * quantidade + 1);
let tentativas = 1;

while (chute != numeroSecreto) {
    if (chute > numeroSecreto) {
        alert ("O número secreto é menor que isso");
    } else if (chute < numeroSecreto) {
        alert ("O número secreto é maior que isso");
    } else { 
        alert ("Digite um número válido") 
    }

    chute = prompt(`Escolha um número entre 1 e ${quantidade}`);
    tentativas++;

}

while (isNaN(chute)) {
    alert(`Por favor, digite um número válido entre 1 e ${quantidade}`);
    chute = prompt(`Escolha um número entre 1 e ${quantidade}`);
}

if (tentativas > 1) {
    alert (`Você acertou o número secreto com ${tentativas} tentativas!`)
}
else {
    alert ("Você descobriu o número secreto logo na primeira tentativa! ")
}


