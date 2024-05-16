# String


Strings são uma das estruturas de dados fundamentais em JavaScript. Elas representam e manipulam uma sequência de caracteres. Vamos explorar as principais características e funções das strings em JavaScript.

## Formas de criar uma String

Existem várias maneiras de criar uma string em JavaScript:

1. Usando aspas simples:
    ```javascript
    let str1 = 'Olá, mundo!';
    ```

2. Usando aspas duplas:
    ```javascript
    let str2 = "Olá, mundo!";
    ```

3. Usando crases (template strings):
    ```javascript
    let str3 = `Olá, mundo!`;
    ```

4. Usando o construtor `String`:
    ```javascript
    let str4 = new String('Olá, mundo!');
    ```

## Template String

As template strings permitem a inclusão de expressões dentro de strings, utilizando a sintaxe `${expressão}`. São delimitadas por crases.

```javascript
let nome = 'Maria';
let saudacao = `Olá, ${nome}!`;
console.log(saudacao); // Output: Olá, Maria!
```

## Imutabilidade em String

Strings em JavaScript são imutáveis. Isso significa que, uma vez criada, uma string não pode ser alterada. Qualquer operação que pareça modificar a string, na verdade, cria uma nova string.

```javascript
let str = 'Olá';
str[0] = 'A'; // Isso não altera a string
console.log(str); // Output: Olá
```

## Função Split 

A função split() divide uma string em um array de substrings, com base em um separador especificado

```javascript
let frase = 'Olá, mundo!';
let palavras = frase.split(' ');
console.log(palavras); // Output: ['Olá,', 'mundo!']
```

## Função Replace

A função replace() substitui parte de uma string por outra.

```javascript
let frase = 'Olá, mundo!';
let novaFrase = frase.replace('mundo', 'amigo');
console.log(novaFrase); // Output: Olá, amigo!
```

## Função Slice

A função slice() extrai uma seção de uma string e retorna uma nova string.

```javascript
let str = 'Olá, mundo!';
let subStr = str.slice(0, 5);
console.log(subStr); // Output: Olá,
```
## Funções indexOf() e lastIndexOf()

- indexOf() retorna o índice da primeira ocorrência de um valor em uma string.
- lastIndexOf() retorna o índice da última ocorrência de um valor em uma string.
```javascript
let str = 'Olá, mundo! Olá, universo!';
console.log(str.indexOf('Olá')); // Output: 0
console.log(str.lastIndexOf('Olá')); // Output: 14
```
# Conversões 
## String para Number e vice-versa
- Convertendo String para Number:
```javascript
let numStr = '123';
let num = Number(numStr);
console.log(num); // Output: 123
```
- Convertendo Number para String:
```javascript
let num = 123;
let numStr = String(num);
console.log(numStr); // Output: '123'
```
## String para Float e vice-versa
- Convertendo String para Float:
```javascript
let floatStr = '123.45';
let floatNum = parseFloat(floatStr);
console.log(floatNum); // Output: 123.45
```
- Convertendo Float para String:
```javascript
let floatNum = 123.45;
let floatStr = String(floatNum);
console.log(floatStr); // Output: '123.45'
```
<BR>

# Objeto

Objetos são uma das principais estruturas de dados em JavaScript. Eles permitem agrupar dados e funcionalidades relacionadas usando pares de chave-valor.

## Criando um objeto

Existem várias maneiras de criar um objeto em JavaScript:

1. Usando a notação literal:
    ```javascript
    let pessoa = {
        nome: 'João',
        idade: 30
    };
    ```

2. Usando o construtor `Object`:
    ```javascript
    let pessoa = new Object();
    pessoa.nome = 'João';
    pessoa.idade = 30;
    ```

## Definindo atributo com a notação ponto (.)

A notação ponto é usada para acessar e definir propriedades de um objeto.

```javascript
let carro = {};
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
console.log(carro); // Output: { marca: 'Toyota', modelo: 'Corolla' }
```

## **Definindo atributo com a notação chave-valor**

A notação chave-valor é útil quando a chave é dinâmica ou não é um identificador válido.

```jsx
let livro = {};
livro['título'] = 'JavaScript: O Guia Definitivo';
livro['autor'] = 'David Flanagan';
console.log(livro); // Output: { 'título': 'JavaScript: O Guia Definitivo', 'autor': 'David Flanagan' }

```

## **Operador de desestruturação em um objeto**

A desestruturação permite extrair valores de objetos e atribuí-los a variáveis de forma concisa.

```jsx
let usuario = {
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo'
};

let { nome, idade, cidade } = usuario;
console.log(nome);  // Output: Ana
console.log(idade); // Output: 25
console.log(cidade);// Output: São Paulo

```

A desestruturação também permite renomear variáveis e definir valores padrão.

```jsx
let usuario = {
    nome: 'Ana',
    idade: 25
};

let { nome: nomeUsuario, idade, cidade = 'Desconhecida' } = usuario;
console.log(nomeUsuario); // Output: Ana
console.log(idade);       // Output: 25
console.log(cidade);      // Output: Desconhecida

```

```jsx
const produto = {
    descricao: 'Notebook',
    preco: 1500,
    estoque: 50
};

const { descricao: desc, preco: valor, estoque: qtd } = produto;
console.log(desc);  // Output: Notebook
console.log(valor); // Output: 1500
console.log(qtd);   // Output: 50

```

# Funções

Funções são blocos de código projetados para realizar uma tarefa específica. Elas são definidas uma vez e podem ser chamadas (ou executadas) várias vezes durante o programa.

## Função como Declaração (Function Declaration)

Uma declaração de função define uma função com a palavra-chave `function`, seguida por um nome, uma lista de parâmetros entre parênteses e um bloco de código entre chaves.

### Sintaxe

```javascript
function nomeDaFuncao(param1, param2, ...) {
    // Corpo da função
    // Instruções a serem executadas
}

function soma(a, b){
	return a + b

}
```

## Função como Expressão (Function Expression)

Uma expressão de função define uma função como parte de uma expressão. Em JavaScript, funções podem ser atribuídas a variáveis, passadas como argumentos para outras funções, ou mesmo retornadas por outras funções.

### Sintaxe

```javascript
const nomeDaFuncao = function(param1, param2, ...) {
    // Corpo da função
    // Instruções a serem executadas
};
//EXEMPLO1
const soma = function(a, b){
	return a + b
}
//EXEMPLO2
const saudacao = function() {
    console.log('Olá, mundo!');
};

saudacao(); // Output: Olá, mundo!
````

## Arrow Function

As arrow functions são uma sintaxe mais concisa e moderna para criar funções em JavaScript. Elas oferecem uma maneira mais curta e elegante de escrever funções anônimas.

### Sintaxe

```javascript

const nomeDaFuncao = (param1, param2, ...) => {
    // Corpo da função
    // Instruções a serem executadas
};
//EXEMPLO1
const soma = (a, b) => return a + b
//Exemplo2
const saudacao = () => {
    console.log('Olá, mundo!');
};

saudacao(); // Output: Olá, mundo!

```

# Array 

Estrutura de dados em JavaScript que permite armazenar vários valores em uma única variável. Esses valores podem ser acessados ​​por meio de um índice, que representa a posição do valor no array. Ppode conter valores de qualquer tipo de dado, como números, strings, objetos, outras arrays, funções e assim por diante. A estrutura básica de uma array é uma lista ordenada de elementos, onde cada elemento tem uma posição numérica única, chamada de índice.

## Formas de criar uma Array

```javascript
// Criando um array vazio
let arrayVazio = [];

// Criando um array com elementos
let arrayElementos = [1, 2, 3, 4, 5];

// Criando um array com a função construtora Array
let arrayConstrutor = new Array(3); // cria um array com 3 elementos undefined

// Criando um array com valores específicos
let arrayValores = Array.of(1, 2, 3, 4, 5);

```

## Função push():
A função push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

```javascript
let array = [1, 2, 3];
array.push(4);
// Agora, array é [1, 2, 3, 4]

```

## Função pop():
A função pop() remove o último elemento de um array e retorna esse elemento.
```javascript
let array = [1, 2, 3];
let ultimoElemento = array.pop();
// Agora, array é [1, 2] e ultimoElemento é 3

```

## Função shift():
A função shift() remove o primeiro elemento de um array e retorna esse elemento.
```javascript
let array = [1, 2, 3];
let primeiroElemento = array.shift();
// Agora, array é [2, 3] e primeiroElemento é 1
```
## Função unshift():
A função unshift() adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.
```javascript
let array = [2, 3];
array.unshift(1);
// Agora, array é [1, 2, 3]

```

## Função splice():
A função splice() altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
```javascript
let array = ['maçã', 'banana', 'laranja', 'uva', 'morango'];

// Adicionando frutas com splice
array.splice(2, 0, 'pêssego', 'abacaxi');
// Agora, array é ['maçã', 'banana', 'pêssego', 'abacaxi', 'laranja', 'uva', 'morango']

// Removendo frutas com splice
array.splice(5, 1);
// Agora, array é ['maçã', 'banana', 'pêssego', 'abacaxi', 'laranja', 'morango']

```

## Operador delete:
O operador delete remove um elemento de um array, mas não reordena os índices do array.
```javascript
let array = [1, 2, 3];
delete array[1];
// Agora, array é [1, empty, 3]
```

## Função map():
A função map() cria um novo array com os resultados de uma função para cada elemento do array chamando essa função
```javascript
let array = [1, 2, 3];
let novoArray = array.map(x => x * 2);
// novoArray é [2, 4, 6]

```

## Função filter():
A função filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
```javascript
let array = [1, 2, 3, 4, 5];
let novoArray = array.filter(x => x % 2 === 0);
// novoArray é [2, 4]
```

## Função every():
A função every() verifica se todos os elementos de um array passam em um teste especificado.
```javascript
let array = [1, 2, 3, 4, 5];
let todosPares = array.every(x => x % 2 === 0);
// todosPares é false

//Outro exemplo
let numeros = [2, 4, 6, 8, 10];

// Verificar se todos os números são pares
let saoPares = numeros.every(numero => numero % 2 === 0);
console.log(saoPares); // Saída: true

// Verificar se todos os números são maiores que 5
let saoMaioresQueCinco = numeros.every(numero => numero > 5);
console.log(saoMaioresQueCinco); // Saída: false

//Verificar o numero de um indice especifico
let numeros = [2, 4, 6, 8, 10];

// Verificar se o número no índice 2 é ímpar
let indiceDoisEImpar = numeros[2] % 2 !== 0;
console.log(indiceDoisEImpar); // Saída: false


```

## Operador de desestruturação em um array:
O operador de desestruturação permite extrair dados de arrays ou objetos em variáveis distintas.
```javascript
let array = [1, 2, 3];
let [a, b, c] = array;
// a é 1, b é 2, c é 3

```

# Operador Ternario
 É uma expressão condicional que permite tomar decisões com base em uma condição booleana. Ele é chamado de "ternário" porque envolve três partes: a própria condição, a expressão que é avaliada se a condição for verdadeira e a expressão que é avaliada se a condição for falsa.
```
condição ? expressão1 : expressão2
```
Se a condição fornecida for avaliada como verdadeira, a expressão1 é executada. Se a condição for avaliada como falsa, a expressão2 é executada
```javascript
let hora = 13;

// Usando o operador ternário para determinar se é manhã ou tarde
let periodo = (hora < 12) ? "Manhã" : "Tarde";

// Exibindo o resultado
console.log("Neste momento, é " + periodo); //Tarde

```


## Operador Spread - Espalha
é um operador que permite que os elementos de um objeto iterável, como um array ou uma string, sejam expandidos em elementos individuais. Representado por três pontos consecutivos (...), é uma característica poderosa que permite expandir elementos de um iterável, como um array ou um objeto, em locais onde múltiplos elementos são esperados. Ele é usado principalmente para fazer cópias superficiais de arrays e objetos, mesclar arrays ou objetos, passar argumentos de forma eficiente em funções e criar cópias modificadas de dados existentes.
```javascript
//Exemplo professor
function mostraSoma(a, b, c) {
    console.log(a + b + c);
}

let elementos = [2, 4, 6];

mostraSoma(1, 2, 3)      // 6
mostraSoma(...elementos) // 12

let itens = ["banana", "maça"]
let lista = ["pera", ...itens, "uva"]
console.log(lista) // ["pera", "banana", "maça", "uva"]

let vet1 = [1,2,3]
let vet2 = [4,5]
let vet3 = [...vet1, ...vet2]
console.log(vet3)  // [1,2,3,4,5]

//

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const objMesclado = { ...obj1, ...obj2 };
console.log(objMesclado); // Saída: { a: 1, b: 2, c: 3, d: 4 }

//

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayMesclado = [...array1, ...array2];
console.log(arrayMesclado); // Saída: [1, 2, 3, 4, 5, 6]

//

const objOriginal = { a: 1, b: 2 };
const objModificado = { ...objOriginal, b: 3 };
console.log(objModificado); // Saída: { a: 1, b: 3 }


````

## Operador Rest - Condensa

Permite que uma função aceite um número variável de argumentos. É representado por três pontos consecutivos (...), precedendo o nome de um parâmetro de função. Esses argumentos são então agrupados em um único array dentro da função, que pode ser acessado e manipulado conforme necessário. Isso oferece flexibilidade ao lidar com funções que podem receber diferentes quantidades de argumentos.

```javascript
//Exemplo do professor 
function testandoRest1(a, b, ...argumentos) {
    console.log(a, b, argumentos)  // 1, 2, [3,4,5]
}

function testandoRest2(...argumentos) {
    console.log(argumentos)        // [1,2,3,4,5]
}

testandoRest1(1,2,3,4,5)
testandoRest2(1,2,3,4,5)

//

// Usando o operador Rest para coletar argumentos em um array
function minhaFuncao(parametro1, ...outrosParametros) {
  console.log("Parametro 1:", parametro1);
  console.log("Outros Parâmetros:", outrosParametros);
}

// Chamando a função com diferentes quantidades de argumentos
minhaFuncao("a", "b", "c", "d");
// Saída:
// Parametro 1: a
// Outros Parâmetros: ["b", "c", "d"]

minhaFuncao(1, 2, 3);
// Saída:
// Parametro 1: 1
// Outros Parâmetros: [2, 3]

minhaFuncao("x");
// Saída:
// Parametro 1: x
// Outros Parâmetros: []

//

// Função que retorna o maior número de uma lista de números usando o operador Rest
function maiorNumero(...numeros) {
  return Math.max(...numeros);
}

// Chamando a função com diferentes quantidades de argumentos
console.log(maiorNumero(10, 5, 8, 20)); // Saída: 20
console.log(maiorNumero(100, 30, 50)); // Saída: 100
console.log(maiorNumero(7)); // Saída: 7
console.log(maiorNumero()); // Saída: -Infinity

````