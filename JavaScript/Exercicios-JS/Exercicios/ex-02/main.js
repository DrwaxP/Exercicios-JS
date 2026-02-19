let nome = prompt('Qual e seu nome?', undefined);
let code = prompt('Qual e seu codigo?', undefined);
alert(`Seu nome e ${nome} e seu codigo de acesso e ${code}`);

let id = confirm(`Você confirma essses dados?`);

if (id) {
    let open = confirm('Abrir sistema?')

    if (open) {
        alert(`Seja bem vindo ${nome}`);

    }
    else {
        alert(`Até mais, ${nome}`);
    }
}

/*
let conf = confirm("You must be at least 18 years old to view this content.");

if(conf){

let name = prompt("What's your name?");
let age = prompt("What's your age?");

if (age>=18) {
alert(`Welcome ${name}!`);
}
else {
alert(`Sorry ${name}, you must be at least 18 years old to view this content.`);

}

}

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.
Se for falsa, executa as afirmações dentro de else.
*/
