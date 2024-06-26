function pedirPizza(tempo = 2000, saborDisponivel = true) {
    console.log("Iniciando o pedido da pizza")
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saborDisponivel) {
                resolve("Pizza A caminho")
            } else {
                reject("Não será possivel entregar a pizza")
            }
        }, tempo)

    })
    return promessa;
}

function pedirRefrigerante(tempo = 2000, refriDisponivel = true) {
    console.log("Iniciando o pedido do refrigeratne")
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (refriDisponivel) {
                resolve("Refri A caminho")
            } else {
                reject(new Error("Não será possivel entregar o refrigerante"))
            }
        }, tempo)

    })
    return promessa;
}

function pedirUber(tempo = 2000, motoristaDisponivel = true) {

    console.log("Iniciando a solicitação da corrida")

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (motoristaDisponivel) {
                resolve("Motorista a caminho")
            } else {
                reject(new Error("Não a motorista disponivel"))
            }
        }, tempo)

    })
    return promessa;
}

function pedirMaisComida(){
    Promise.all([pedirPizza(), pedirRefrigerante(10000, false)])
    .then(respostas=>{
        console.log(respostas)
    })
    .catch(erro=>console.log(erro))
}
pedirMaisComida()


function irConfraternizacao() {
    pedirPizza(100)
        .then((resposta) => {
            console.log(resposta);
            console.log("A pizza chegou");
            return pedirUber();
        })
        .then((resposta) => {
            console.log(resposta);
            console.log("Motorista chegou");
        })
        .catch((erro) => {
            console.log(erro);
        });
}
irConfraternizacao()


// Caso queira testar falhas
// pedirPizza(500, false)
//     .then((resposta) => console.log(resposta))
//     .catch((erro) => console.log(erro));

// pedirPizza(500, false)
//     .then((reposta) =>console.log(reposta))
//     .catch((erro)=>console.log(erro))