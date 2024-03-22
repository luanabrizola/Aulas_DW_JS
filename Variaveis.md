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


