

let user = {
    name: "Aston",
    age: 20
};

console.log(user?.name);//Aston
console.log(user?.local)//Undefined

let userAdmin = {
    code() {
        return "Hello"
    }
}

let userGuest = {}

console.log(userAdmin.code?.());//Hello
console.log(userGuest.code?.());//Undefined

let key = 'FirstName'
let userLogin = {
    FirstName: "Paulo",
    id: 1234
};

userLogin.SecondName = null


console.log(userLogin?.[key]);//Paulo
console.log(userLogin?.SecondName?.[key]);//Undefinded



