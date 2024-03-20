# Variáveis em JavaScript 

As variáveis são containers para armazenar dados. Elas são declaradas através do `const`, `let`, e o `var`.

## Como usar as variáveis em JavaScript?

1. Para utilizar as variáveis em JavaScript, primeiro você precisa declará-las, para isso você pode utilizar o `const`, o `let` e o `var`. Veja os exemplos abaixo:

   - **CONST**: Seu valor é fixo, utilizada especialmente para leitura, aquelas que não serão retribuídas.
   
        ```javascript
        // Exemplo do uso do const:
        const nome = 'Luana';
        console.log(nome);
        ```

   - **LET**: Tem escopo de bloco, ou seja, elas são visíveis apenas dentro do bloco que foi declarada ou em bloco "filho".
   
        ```javascript
        // Exemplo do uso do let:
        let contador = 0;
        console.log(contador);
        ```

   - **VAR**: Tem escopo de função ou global, ela permite a reatribuição e redeclaração em um mesmo escopo.
   
        ```javascript
        // Exemplo do uso do var:
        var x = 10;
        console.log(x);
        ```

# Escopos 

## O que é escopo?

1. O escopo se refere à visibilidade das variáveis e funções de um JavaScript. Existem 3 tipos de escopos, sendo eles global, bloco e função.

2. Veja exemplos de escopo:

   - **Bloco**: Área do código onde uma variável é acessível e visível. Como dito na definição da variável `let`, ela é visível no escopo de bloco, por exemplo:
   
        ```javascript
        // Escopo de bloco:
        function exemploEscopo() {
            let a = 10; // variável 'a' está dentro da função exemploEscopo
    
            if (true) {
                let b = 20; // variável 'b' está dentro deste bloco if
                console.log(a); // 10
                console.log(b); // 20
            }
    
            console.log(a); // 10
            // console.log(b); // b não está acessível aqui, resultaria em erro
        }
    
        exemploEscopo();
        ```
    - **Global**: Diferente do escopo de bloco, no escopo global é possivel acessar uma variavel em qualquer lugar do script, dentro de funções, blocos ou outros escopos;
        ```javascript
        // Escopo global
        var nome = "João";

        function saudacao() {
            // A variável 'nome' pode ser acessada aqui dentro
            console.log("Olá, " + nome + "!");
        }

        saudacao(); // Saída: Olá, João!
        console.log(nome); // Saída: João
        ```

    - **Função**: É a area do código onde as variáveis declaradas dentro de uma função são acessíveis. Quando uma variável é declarada dentro de uma função, ela só pode ser acessada dentro dessa função, não sendo visível fora dela;
    ```javascript
        // Escopo de função
        function exemploEscopo() {
        let a = 10; // variável 'a' está dentro da função exemploEscopo
        console.log(a); // 10
        }

        exemploEscopo();
        // console.log(a); // a não está acessível aqui, resultaria em erro
    ```

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






