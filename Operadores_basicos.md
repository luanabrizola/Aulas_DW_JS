# Operadores Basicos
O javascript suporta diversos operadores, considerados simbolos "especiais" para realizar operções em variaveis. Iremos falar de 4 deles `aritimetico`, `de comparação`, `logicos` e `typeof`;
- Aritimetico: Tomam valores numericos como seus operandos e retornam apenas um valor numerico. Os operadores aritimeticos padrão é a soma `+`, subtração `-`, divisão `/` e multiplicação `*`;
    ```javascript
        //Exemplo:
        console.log(10/2) //Divisão
        console.log(10*2) //Multiplicação
        console.log(10+2) //Adição
        console.log(10-2) //Subtração
    ```
- Comparação: Compara seus operandos e retorna um valor lógico baseado se a comparação é verdadeira. Os operandos podem ser string e numeros;
  ```javascript
     //Exemplo:
     var op1 = 3;
     var op2 = 4; 

     3 == op1; "3" == op1; 3 == '3' //Igual
     op1 != 4; op2 != "3" //Diferente
     3 === op1 //Estritamente igual
     op1 !== "3" //Estritamente não igual
     op2 > op1 //Maior que
     op2 >= op1 //Maior ou igual
     op1 < op2 //Menor que 
     op1 <= op2 //Menor igual  

- Lógico: Utilizado com valores booleanos, ele combina os valores para determinar o resultados das expressões; 
  ```javascript
    //Operadores de negação
    
    let valorVerdadeiro = true;
    let valorFalso = false;

    console.log(!valorVerdadeiro); // Saída: false
    console.log(!valorFalso);      // Saída: true

    //Operação com "E" (&&)
    
    let temperatura = 25;
    let chovendo = true;

    // Se a temperatura for menor que 30 E estiver chovendo
    if (temperatura < 30 && chovendo) {
        console.log("Está chovendo e a temperatura é menor que 30 graus.");
    } else {
        console.log("Não está chovendo ou a temperatura é igual ou superior a 30 graus.");
    }

    //Operação "OU"
    // Exemplo de operação com OU lógico
    let diaDaSemana = "sábado";
    let clima = "ensolarado";

    // Se for sábado OU o clima estiver ensolarado
    if (diaDaSemana === "sábado" || clima === "ensolarado") {
    console.log("Vamos fazer um piquenique!");
    } else {
        console.log("Não é um bom dia para um piquenique.");
    }

  ```
- Typeof: Retorna uma strig indicando o tipo de operando, ou seja, se o operando é number, string, object etc...
  ```javascript
     //Exemplo:
     var op1 = 3;
     var op2 = new Date(); 

    typeof op1; //vai retornar number
    typeof op2; //vai retronar fuction
