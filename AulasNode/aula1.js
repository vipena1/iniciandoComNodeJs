console.log("teste 2")

var num = 1 // VAR: Permite alterações ao longo do código e permite redeclaração 
let text = "text" // LET: Permite alterações ao longo do código porém não permite redeclaração
const boolean = true // CONST: Não permite alterações ao longo do código e não permite redeclaração

console.log(num)
console.log(text)
console.log(boolean)
console.log(num + text + boolean)
console.log(1 + boolean + "teste")
console.log("teste" + 1 + boolean)

{
    const boolean = false
    console.log(boolean) // CONST: Permite redeclara por estar dentro de um escopo
    let text = "Outro texto" // LET: Permite redeclara por estar dentro de um escopo
    console.log(text)
}

console.log(text) // LET: Retorna o valor declarado pela primera vez, pois o valor anterior só serve par o escopo
console.log(boolean) // CONST: Retorna o valor declarado pela primera vez, pois o valor anterior só serve par o escopo

console.log(boolean.toString()+5) // Convertendo o valor boolean para string

const print = _ => {
    console.log("Pena")
} // Definindo função "lambda"

print()

console.log(`A string é assim ${num}`) // Para definir uma variavel no meio da string