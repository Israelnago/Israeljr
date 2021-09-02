const listaDePecas = ["comprossor, injeção, bateria"]

console.log(listaDePecas)

if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
}
else { console.log("Não há mais espaço na lista") }

var peso = 100;

if (peso >= 100) {
    console.log("Peso da peça está adequado")

} else { "Peso insuficiente" }

let nomePeca = "Disco de freio";

if (nomePeca.length > 3) {
    console.log("Nome adequado")

}
else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
}
else {
    console.log("O nome deve possuir mais de 3 caracteres")
}




