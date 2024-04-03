let v1=[1, 2, 3]
let v2= new Array(1, 2, 3)
let v3= new Array(3)
let v4= Array.from ("abcd")
let v5= Array.from({length:5})

console.log("v1:", v1)
console.log("v2:", v2)
console.log("v3:", v3)
console.log("v4:", v4)
console.log("v5:", v5)

console.log("v1[1]:", v1)
console.log("v2[1]:", v2)
console.log("v3[1]:", v3)

//Inserção
v1.push(4)
v1.unshift(0)
v1[10] = 5
console.log("v1:", v1)

//Remoção
v1.shift()
v1.pop()
delete v1[1]
console.log("v1:", v1)

let copai1= v2
copia1[0]=100
console.log("v2:", v2)
console.log("copia:", copia1)
