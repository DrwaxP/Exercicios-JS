
let contador = prompt('Digite um valor.');

if (contador) {

    if (contador >= 20){
    alert(`Seu numero e aceitavel, seja bem vindo. SEU NUMERO: ${contador}`);
    }

    else {
    alert('E menor que a quantidade minima, desculpe.');
    }
}





let id =  parseInt(prompt('Digite seu codigo de acesso:'));
  if (Number.isNaN(id)) {
        alert(`Sua resposta não pode ser String.`);

    }
    else {
        let nome = prompt('Digite seu nome:');

        if (id == 8520 || id == 7412 || id == 9632)  {

       
            alert(`Seja bem vindo, ${nome}.`);
    
        }
 
        else {
         
         alert("Você não possui acesso.");
        }


    }





console.log(id == NaN);

 
//  

//A parseInt função converte seu primeiro argumento em uma string , analisa essa string e, em seguida, retorna um número inteiro ou nulo NaN.