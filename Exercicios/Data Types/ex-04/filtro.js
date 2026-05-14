function tabel(a, b) {

    let tabela = [
        {id: 1, name: 'Alice'},
        {id: 6, name: 'Aston'},
        {id: 2, name: 'Marco'},
        {id: 9, name: 'Paulo'},
        {id: 5, name: 'Martins'},
        {id: 7, name: 'Panuci'}
    ];

    let filtro = tabela.filter(item => item.id >= a && item.id <= b);
    
    console.log(filtro);

}

//tabel(1, 5);

function search(arr, a, b) {
    return arr.find(item => (a <= item && item <= b ));
    
}

let arr = [2, 5, 7, 8, 3, 6, 4, 1];

let busca = search(arr, 1, 5);
console.log(busca);
console.log(arr);

