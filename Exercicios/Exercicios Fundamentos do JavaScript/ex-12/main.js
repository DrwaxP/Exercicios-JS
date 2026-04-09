/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

let ask = (question, yes, no) => {
    let id = confirm(question);
    if (id == true){
        yes();
        
    }else no();
    
    return id;
}    

ask(
    "Você deseja logar na sua conta?",
    function() {alert("Seja bem vindo.");},
    function() {alert("Operação cancelada: error :[");}

);
console.log(id);