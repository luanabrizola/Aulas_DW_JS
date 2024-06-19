function pedirPizza(tempo=2000){
    console.log("Iniciando o pedido da pizza")
    const promessa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (saborDIsponivel){
                resolve("Pizza A caminho")
            } else {
                reject("Não será possivel entregar a pizza")
            }
        }, tempo)
        
    })
    return promessa;
}

function pedirUber(tempo=2000, motoristaDisponivel=true){

    console.log("Iniciando a solicitação da corrida")

    const promessa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (saborDIsponivel){
                resolve("Motorista a caminho")
            } else {
                reject( new Error ("Não a motorista disponivel"))
            }
        }, tempo)
        
    })
    return promessa;
}


function irConfrartenização(){
    pedirPizza(100)
    .then((resposta)=>{
        console.log(resposta)
        console.log("A pizza chegou")
        return pedirUber()
        // .then(resposta =>{
        //     console.log(resposta)
        //     console.log("Motorista chegou")
        // })

    })
}
irConfrartenização()

// pedirPizza(500, false)
//     .then((reposta) =>console.log(reposta))
//     .catch((erro)=>console.log(erro))