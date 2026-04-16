/*
    Um symbol representa um indetificador unico.
*/ 

let user = Symbol('user');
let user = Symbol('user');
//São diferentes.  user === user retorna false

alert(user.description);
//Para alertar o valor de um symbol, e necessario um .description ou .toString()

let user = Symbol.for('user');
//Para criar um symbol global e necessario usar Symbol.for()
//Serve para caso um symbol necessite se tornar valido para todo o codigo



//Existe uma sintaxe chamada Encadeamento opcional - ?.
//E basicamente um jeito de acessar propriedades aninhadas mesmo que não exista.
//Interrompe a avaliação se o valor anterior a ele for true null ou undefined, e ele retorna false undefined.
let id = {}

alert(id?.adress?.street);
//No caso não existe adress

//Existe tambem o ?() para verificar funções que possivelmente não existam



