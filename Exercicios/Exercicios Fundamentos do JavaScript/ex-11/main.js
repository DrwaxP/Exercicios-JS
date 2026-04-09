/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

--------------------------------------------------

function verifAge(age) {
    return (age > 18) ? true : confirm('Você tem autorização?');
    
}

verifAge();


function min(a, b) {
  if(a > b) {
    return b;
  }
  else {
    return a;
  }
}

alert(min(1, 3));
*/

function mult(x, n) {
  let result = x;
  
  for(let i = 1; i < n; i++) {
    result *= x;
  }
  return result;

}

let x = prompt('Digite um valor para X: ');
let n = prompt('Digite um valor a ser expoente do X: ');

if(n < 1){
  prompt('Digite um valor valido maior que 1: ')
}
else {
  alert(mult(x, n));
}

