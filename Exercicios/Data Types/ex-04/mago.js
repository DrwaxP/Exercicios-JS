let str = ['mago-hifen', 'background-color', 'list-imagem'];
function camelcase() {
    
    for(let i of str) {
        let a;

        a = i.split('-');

        let form = a[0] + a.slice(1).map(p => 
            p.charAt(0).toUpperCase() + p.slice(1)
        ).join('');

        console.log(form);
        
    }
    
}

camelcase();

/*
    let a = str[0].split(', ');
    for(let i of a) {
        b = a.join('-');
        console.log(b);
    }
*/


let a = ['Paulo, Aston, Vanesaa, Marco'];
let b = a[0].split(', ');

console.log(b[1]);
//O split corta e depois ele transforma cada um separado em um elemento do array

