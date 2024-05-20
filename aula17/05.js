let json1 = "{'nome': 'João', 'telefone': 99104480}"
let json2 = `{
    "nome" : "Maria"
    "telefone" : 99148505
}`

let contato1 = {
    nome: "João",
    telefone: 99525689
}

let contato2 = {
    nome: "Maria",
    telefone: 9552565655
}

// contato1.nome = "José"
// json1.replace("João", "José")
// contato1.cpf='19201921029102'
// contato1["cpf"] = '032323'
// console.log(contato1)
// console.log(json1)

// .........................

// Conversão de texto para objeto:
let contato = {
    nome:"João",
    telefone: 99400145,
    cpf: "000.000.000-00"
}

let texto = JSON.stringify(contato)
console.log(texto)