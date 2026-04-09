//let a = 1, b = 1;
let c = ++a; 
let d = b++;  
/*A = 2
  B = 2
  C = 2
  D = 1*/ 



//let a = 2;
let x = 1 + (a *= 2);
// A = 4 e X = 5




"" + 1 + 0 // 10
"" - 1 + 0 // 2
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // -95
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2



let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 3

//Tem que transformar as str em "Números" primeiro usando o Number(..) ou o + antes do prompt.
/* EX:
    let a = +prompt("First number?", 1);
    let b = +prompt("Second number?", 2);

    alert(a + b); // 3


    Também funciona se colocarmos o prefixo + no alert.
    EX:

    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(+a + +b); // 3
 */