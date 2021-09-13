let inscricao = new Date("");
inscricao.setTime(Date.parse("September 12, 2021"));

let evento = new Date("September 15, 2021");


if (inscricao <= evento) {

    console.log("Bem vindo! Insira seu nome completo para inciar sua inscrição");

}

else {

    console.log("Inscrição não permitida, ultrapassou a data do evento.");

}

// Estabelecendo data para o evento.


let numParticipantes = 100;

let nomes = ("Jaqueline", "Inês", "Israel", "Maria", "Joana");
nomes.length = 100;
console.log(nomes);

let palestrantes = ("");
palestrantes.lengh = 3;
console.log(palestrantes);

if (nomes.length <= numParticipantes) {

    console.log("Insira a data de seu nascimento. Ex: Month dd, aaaa");

} else {

    console.log("Não é possivel realizar sua inscrição. Número de participantes excedeu o limite estabelecido para o evento.")

}

// Listanto participantes e palestrantes.


let dataAtual = new Date();
dataAtual.setTime(Date.parse("September 12, 2021"));

let dataNascimento = new Date("September 15, 1989");

if (dataAtual - dataNascimento >= 18) {

    console.log("Inscrição concluída com sucesso!")

}
else {
    console.log("Inscrição Cancelada. Participante menor de 18 anos.")

}


//Finalizando com a verificação de idade.














