/*let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null


let user = {
    name: 'Paulo',
    age: 20,
};

user.f = function () {
    alert(this.name)
};

let admin = user;
user.name = 'Aston';
admin.f();


let user = {
    name: 'Aston',
    search_name() {
        let admin = () => alert(this.name);
        admin();
    }
}

user.search_name();
*/


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); //Retorna Undefined/ou error. Pois o valor this e chamado como uma função e não como um metodo com uma sintaxe de ponto.




let calculator = {
  read() {
    let a = Number(prompt('Digite um valor: '));
    let b = Number(prompt('Digite um valor: '));
  },
  sum() {
    return {
        
    }
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );