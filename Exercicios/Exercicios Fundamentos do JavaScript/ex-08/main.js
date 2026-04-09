//Qual o resultado de OU?
alert( null || 2 || undefined );
// 2

//Qual o resultado dos alertas com operador OR?
alert( alert(1) || 2 || alert(3) );
// 2

//Qual é o resultado de AND?
alert( 1 && null && 2 );
//null

//Qual o resultado dos alertas combinados com o operador AND?
alert( alert(1) && alert(2) );
//2?

//O resultado de OU E OU
alert( null || 2 && 3 || 4 );
//4?




//Correção
/*
1_ Resp: 2

2_ Resp: Primeiro 1 e depois 2. O segundo operando já e verdadeiro então ele n passa no alert(3);

3_ Resp: Null

4_ Resp: 1 e depois Undefined. A chamada para alert retorna Undefined, sendo exibido apenas uma mensagem. Um retorno não significativo.
Então ele le o da esquerda e depois retorna Undefined.

5_ Resp: O && tem prescedencia maior, ent ele e executado primeiro do que o OU. Então ele resolve 2 && 3 = 3.

 */
