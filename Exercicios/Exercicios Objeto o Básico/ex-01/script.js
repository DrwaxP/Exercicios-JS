let calculator = {
    read() {
        this.a = +prompt('Digite uma valor: ');
        this.b = +prompt('Digite outro valor: ');
    },

    sum() {
        return (this.a + this.b);
    },

    mul() {
        return (this.a * this.b);
    }
};



calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
