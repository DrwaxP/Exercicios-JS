function numb_btn() {

let num = document.querySelector('input#numb');
let sel = document.querySelector('select#list');
    
if(num.value.length === 0) {
    alert('[Error] Digite um valor a ser inserido.');
    return
}

let n = document.createElement('option');
    n.innerText = `${num.value}  foi inserido.`
    n.value = num.value;
    n.style.border = '2px solid black';
    n.style.padding = '5px';
    n.style.margin = '5px';

sel.appendChild(n);
    num.value = '';

}

function verif_btn() {
    let verif = document.querySelector('select#list');
    if(verif.length === 0) {
        alert('[Error] Nenhum valor inserido.');
        return;
    } else{

            let op = verif.options;
            let sum = 0;
                for(let i = 0; i < op.length; i++) {
                    sum += Number(op[i].value);
                };
            let div = 0;
                for(let d = 0; d < op.length; d++) {
                    div = sum / verif.length;
                }
            let aList = [];
                for(let b = 0; b < op.length; b++) {
                    aList.push(Number(op[b].value));
                }

            let maior = Math.max(...aList);
            let menor = Math.min(...aList);


            let result = document.querySelector('div.result');
                result.style.padding = '5px';
                
            let p1 = document.querySelector('p.p1');
            let p2 = document.querySelector('p.p2');
            let p3 = document.querySelector('p.p3');
            let p4 = document.querySelector('p.p4');
            let p5 = document.querySelector('p.p5');

            p1.innerHTML = `Ao todo foram inseridos ${verif.length} valores.`
            p2.innerHTML = `A soma entre os valores e ${sum}.`
            p3.innerHTML = `A media entre os valores e ${div}.`
            p4.innerHTML = `O maior valor da lista e ${maior}.`
            p5.innerHTML = `O menor valor da lista e ${menor}.`
    }
        
}