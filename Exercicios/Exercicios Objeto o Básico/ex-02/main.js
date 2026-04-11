/*
function A() { }
function B() { }

let a = new A();
let b = new B();

alert( a == b ); // true
*/

let id = {};

function A() {
    return id
}

function B() {
    return id
}

alert(new A() == B());





//Crie uma nova calculadora

let calculator = new Calculator();
calculator.read();

function Calculator() {
    this.read = function() {
        this.a = +prompt('Digite um valor: ');
        this.b = +prompt('Digite outro valor: ');
    }

    this.sum = function() {
        return (this.a + this.b);
    }

    this.mul = function() {
        return (this.a * this.b);
    }
}

alert( 'Sum=' + calculator.sum() );
alert( 'Mul=' + calculator.mul() );

