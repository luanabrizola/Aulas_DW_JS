function soma(a,b){
    let total= a + b
    return total
} 

const funcaoSoma= function(a,b){
    return a+b
}

const funcaoMultiplicacao=(a,b) => a*b //dar prioridade para essa função

function operacaov1(a, b, op){
    
    if (op=="+"){
        return a + b
    } else if (op=="-"){
        return a - b
    } else if (op == "*"){
        return a*b
    } else if (op == "/"){
        return a/b
    }   
 
    return undefined
}


function operacaov2(a, b, op){
    let resultado = op(a,b)
    return resultado
}

//console.log(soma(10,20))
//console.log(funcaoSoma(50,50))
//console.log(funcaoMultiplicacao(2,3))
//let valor = operacaov1(10, 2, "+")
//console.log(valor)

//valor= operacaov2 (10,2, funcaoMultiplicacao)
//console.log(valor)

//console.log(operacaov2(10, 2, (a,b) => a/b))

let valor = operacaov2(10, 2, function(a,b){
    return a+b
})

console.log(valor)