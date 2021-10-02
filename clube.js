var prompt = require("prompt-sync")()

// @author Pedro Jardel Lima

/* Método que consiste em preencher um vetor com o nome dos clubes brasileiros, e fazer um confronto sequencial, 1º x 2º, 3º x 4º
    assim por diante, ainda complementei com uma validação, para que os clubes sejam sempre preenchidos em pares, para haver confrontos
    exatos
*/
var clubes = []
var contador = 0
var espaco = " "
console.log("Informe o nome dos clubes, para encerrar o programa digite 'fim'")

do {
    contador++
    var tamanhoVetor = clubes.length
    var clube = prompt(`${contador}º Clube: `)

    if (clube.toUpperCase() == "FIM") {
        if (tamanhoVetor % 2 != 0) {
            console.log("Número de clubes deve ser par")
            continue
        } else {
            break
        }
    }
    clubes.push(clube)

} while (true)

console.log()
console.log("Jogos\n" + "-".repeat(40))
for (var i = 0; i < clubes.length; i++) {
    if (i % 2 == 0) {
        console.log(`${clubes[i].padEnd(15)} x ${espaco.padEnd(10)}${clubes[i + 1]}`)
    }
}
