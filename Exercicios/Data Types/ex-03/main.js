function sumImput() {
    let data = [];

    for(;;) {
        let value = +prompt('Digite um valor: ');

        if(value === null || value == '' || !isFinite(value)) break

        data.push(+value);
    }

    let sum = 0;
    for(let i = 0; i < data.length ; i++) {
        sum += data[i];
    }

    alert(`As Matrizes são: ${data} \nA soma é: ${sum}`)
}

sumImput();


/*
Solução

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );
*/