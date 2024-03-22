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
