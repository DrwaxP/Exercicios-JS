//Será exibido alert?
/*if ("0") {
  alert( 'Hello' );
}
*/

let nome = prompt('Qual é o nome do JavaScript?');

if (nome === "ECMAScript") {
    alert(`Correto, ${nome}.`);
     
}
else {
    alert('Errado, tente de novo :)');
}



let id = prompt('Digite um valor: ')

if (id > 0) {
    alert('E igual a 1.')
}else if (id < 0) {
    alert('E igual a -1')

}else {
    alert('E igual a 0')
}

 


 let a = parseInt(prompt('Escreva o valor para a: '));
 let b = parseInt(prompt('Escreva o valor para b: '));
 let resultado = a + b < 4 ? alert('below')  : alert('over');
 console.log(resultado);



 
let message;
let login = prompt('Escreva seu tipo de login: ');

login == 'funcionario' ? message = 'hello' :  
login == 'diretor' ? message = 'Greetings' : message = ''

alert(message);