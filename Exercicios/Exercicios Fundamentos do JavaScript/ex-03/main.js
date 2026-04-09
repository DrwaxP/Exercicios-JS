 let id = ("Aston" + "01" + '99');
 let ip = ("Aston Martin 01 99")
 alert(id);
 alert(ip);

 let age = Number('dezoito');
 alert(age);
 //Sempre vai dar NaN porque NUMBER esta recebendo uma STR e não um valor numerico.

alert(Number('123'));
/*Sendo definido o valor dentro da string como numero ele o lê com o tipo Number.
ex:
 alert(Number('123')); vai sair 123 mas como "foi lido" como tipo Number.
*/

alert(Number('Hello World 123'));
//E dado como NaN pois Number só recebe valor numerico.

alert(Number(true));
alert(Number(false));
//Ele entra no codigo 1 e 0; Onde 1 e true e 0 e False, assim como false e 0 e true e 1.


alert(Boolean(1));
//True
alert(Boolean(0));
//False
alert(Boolean('Hello'));
//True
alert(Boolean(''));
//False
/*Uma string não vazia e sempre true mesmo que tenha 0.
ex:
alert(Boolean('0')) vai dar true porque a string não esta vazia, mas isso e no JS.
Espaços tambem contam como true. 
*/