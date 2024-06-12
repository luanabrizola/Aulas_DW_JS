// fetch('https://jsonplaceholder.typicode.com/todos/1') //é uma função, vai até o endereço e traz um JSON
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1') 
//     .then((resposta)=>{
//         console.log("resposta")
//         return resposta.json()
//     }).then((dados)=>{
//         console.log(dados)
//     })

// console.log("fim")

function funcaoAssincrona(sucesso=true){
    // console.log("Função assincrona")
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(sucesso)
                resolve("Operação concluida com sucesso")
            else
                reject("Erro na operação")
        }, 200)
        
    })
 }

funcaoAssincrona(false)
    .then((resposta=>{
        console.log("Deu certo")
        console.log("Resultado: " + resposta )
    }))
    .catch((erro)=>{
        console.log("Deu ruim")
        console.log("Resultado:"+erro)
    })
console.log("fim")