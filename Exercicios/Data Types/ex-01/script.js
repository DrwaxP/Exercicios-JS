/* 
Para escrever números com muitos zeros:

Acrescente "e" zeros à quantidade de zeros ao número. Por exemplo: 123e6 é o mesmo que 123 com 6 zeros 123000000.
Um número negativo após um "e" ponto faz com que o número seja dividido por 1 com os zeros correspondentes. Exemplo: 123e-6significa 0.000123milionésimos 123.
Para diferentes sistemas numéricos:

É possível escrever números diretamente nos sistemas hexadecimal ( 0x), octal ( 0o) e binário ( 0b).
parseInt(str, base)Analisa a string stre a converte em um número inteiro no sistema numérico com base em base, 2 ≤ base ≤ 36.
num.toString(base)Converte um número em uma string no sistema numérico com o valor fornecido base.

Para testes numéricos regulares:
    isNaN(value)Converte seu argumento em um número e então testa se ele é verdadeiro.NaN
    Number.isNaN(value)verifica se o argumento pertence ao numbertipo e, em caso afirmativo, testa se ele éNaN
    isFinite(value)Converte seu argumento em um número e então testa se ele não é um número.NaN/Infinity/-Infinity
    Number.isFinite(value)Verifica se o argumento pertence ao numbertipo e, em caso afirmativo, testa se ele não é do tipo especificado.NaN/Infinity/-Infinity


Para converter valores como 12pte 100pxem um número:
    Use parseInt/parseFloatpara a conversão "suave", que lê um número de uma string e retorna o valor que poderia ser lido antes do erro.
 

Para frações:
    Arredonde usando Math.floor, Math.ceil, Math.trunc, Math.roundou num.toFixed(precision).
    Lembre-se de que há uma perda de precisão ao trabalhar com frações.
*/

let num_1 = parseInt(prompt('Digite um numero: ', ''));
let num_2 = parseInt(prompt('Digite outro numero: ', ''));

function calc() {
    if(Number.isNaN(num_1)) {
        alert('Tente Novamente');
    } else if(Number.isNaN(num_2)){
        alert('Tente Novamente')
    } else {
        sum = num_1 + num_2
        alert(`A soma é: ${sum}`);
    }
}

calc();


function readNumber() {
    for(let i = 0; i < 1; ) {
        let n = prompt('Digite um numero ou uma medida: ','');

        console.log(n);

        if( !isFinite(n) ) {
            alert('Por favor, digite um valor válido!');
        } else if(n === null || n === '') {
            i = 1
            return alert(n);
        } else {
            i = 1
            alert(`Seu numero: ${n}`);
        }
    }
}

readNumber();


function random(min, max) {
    min = parseInt(prompt('Digite um numero minimo: ', '1'));
    max = parseInt(prompt('Digite um numero maximo: ', '2'));

    if(Number.isNaN(min) || Number.isNaN(max)) {
        alert('Digite um valor válido!');
    } else {
        let i = min + Math.random() * (max - min);
        a = Math.round(i);
        alert(`Um numero aleatorio entre os valores e: ${a}`)
    }
}

random();


//Execute em partes, pois ira dar "bugs" se executar por completo. Pois existe multiplas variaveis de mesmo nome.W