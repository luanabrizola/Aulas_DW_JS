# Dados 
Os dados são informações que podem ser armazenadas e manipuladas pelo programa. Os dados podem assumir diferentes formas e tipos.
### Tipos Primitivos
- **Boolean:** Representam valores lógicos true ou false.
```javascript
        // Declarando uma variável booleana
        let temChuva = true;

        // Verificando se há chuva
        if (temChuva) {
            console.log("Lembre-se de levar um guarda-chuva!");
        } else {
            console.log("O tempo está bom, aproveite!");
        }

```

- **Number:** Representam valores numéricos, podendo ser inteiros ou de ponto flutuante.
```javascript
     // Declarando e atribuindo valores numéricos
    let idade = 25;
    let peso = 70.5;

    // Realizando operações matemáticas com números
    let altura = 1.75;
    let imc = peso / (altura * altura);

    // Exibindo os resultados
    console.log("Idade:", idade);
    console.log("Peso:", peso);
    console.log("Altura:", altura);
    console.log("IMC:", imc);
```

- **String:** Sequências de caracteres delimitadas por aspas simples (') ou duplas (").
```javascript
    // Declarando e atribuindo valores de string
    let nome = "Alice";
    let sobrenome = 'Silva';

    // Concatenando strings
    let nomeCompleto = nome + " " + sobrenome;

    // Exibindo o resultado
    console.log("Nome completo:", nomeCompleto);
```

- **Undefined:** Valores não definidos 
```javascript
    // Declarando variáveis sem atribuir um valor
    let x;
    let y = undefined;

    // Exibindo os valores das variáveis
    console.log("Valor de x:", x); // Saída: undefined
    console.log("Valor de y:", y); // Saída: undefined
```

- **Null:** Ausencia de um valor
```javascript
    // Declarando uma variável e atribuindo o valor null
    let x = null;

    // Verificando se a variável tem o valor null
    if (x === null) {
        console.log("A variável 'x' possui o valor null.");
    } else {
        console.log("A variável 'x' não possui o valor null.");
    }
```

# Objeto 
Um objeto em JavaScript é uma estrutura de dados que permite armazenar pares chave-valor, onde a chave é uma string e o valor pode ser de qualquer tipo de dado, inclusive outro objeto. Eles podem ser criados, acessados, modificados e removidos dinamicamente durante a execução do código.

```javascript
    // Criando um objeto
    var pessoa = {
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
    };

    // Acessando propriedades do objeto
    console.log(pessoa.nome); // Saída: João
    console.log(pessoa.idade); // Saída: 30
    console.log(pessoa.cidade); // Saída: São Paulo

    // Alterando uma propriedade do objeto
    pessoa.idade = 31;
    console.log(pessoa.idade); // Saída: 31

    // Adicionando uma nova propriedade ao objeto
    pessoa.profissao = "Engenheiro";
    console.log(pessoa.profissao); // Saída: Engenheiro

    // Removendo uma propriedade do objeto
    delete pessoa.cidade;
    console.log(pessoa.cidade); // Saída: undefined
```

# Array 
A Array pode ser descrito como "lista de obejtos", eles são objetos que contém multiplos valores que estão guardados em uma lista. Um obejto array pode ser armazenado em variaveis, a diferença é que podemos acessar cada valor dentro de uma lista de forma individual. 
## Como criar um Array?
   ```javascript
    var mercado = ["pao", "cafe", "ovo", "arroz"];
    mercado;
   ```
Cada item na array é uma string, mas é possivel armazenar qualquer item em uma array, como numeros. 

- É possivel tambem acessar e modificar os intens de uma Array
  ```javascript
    //Acessando item
    mercado[0];
    //Irá retornar o primeiro intem, nesse caso, o pao
  ```
  ```javascript
    //Modificando item
    mercado[0]="feijao";
    mercado;
    //Agora, ao invés de retornar [pao, cafe, ovo arroz] irá retornar [feijao, cafe, ovo, arroz]
   ```
- Podemos também adicionar e remover itens
  ```javascript
    //Adicionando  
    mercado.push("leite");
   ```
   ```javascript
    //Removendo 
    mercado.splice(1,1);
    //O primeiro 1 se refere ao indice do elemento e o segundo 1 o numero de elementos que serão removidos 
    ```
