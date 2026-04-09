/*for (let i = 0; i <= 10 ; i+= 2) {
        alert(i);
    
}

let id = 0;
while (id < 3) {
          alert( `number ${i}!` );
          id++;
}

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );...
}


let n = parseInt(prompt('Digite um valor maior que 100: '));

while (n < 100) {
        n = prompt('Por favor, digite um numero maior que 100!');
}
*/

let id = ePrimo(parseInt(prompt('Digite um numero: ')));

function ePrimo(n) {
        if (n <= 1) return alert('Este numero nao e primo.');
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                        return alert('Este numero nao e primo.');
                }
        }
        return alert('Este numero e primo.');
        
}





