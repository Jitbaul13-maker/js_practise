function sayname(){
    console.log("Hello!!");
}
sayname()
console.log();

function add(num1, num2){
    return num1 + num2
}
const result = add(4,7)
console.log(result);
console.log();

function msg(name = "Someone"){
    if(name === undefined) //we take emty string, undefined as false in js
    {
        return `Invalid user!`
    }
    return `${name} logged in!`
}
console.log(msg("Baul"));
console.log();

function calculatePrice(num1, ...num){
    return num1, num
}
console.log(calculatePrice(34, 64, 23));
console.log();


// handleobject({
//     name: "Richa",
//     age: 27
// })
function handleobject(anyobject){
    console.log(`name: ${anyobject.name}, age: ${anyobject.age}`);
}
const user = {
    name: "baul",
    age: 18
}
// handleobject(user)

// console.log(anyobject.name);
console.log();

const arr = [10, 23, 56]
function returnval(getarr){
    return getarr[1]
}
console.log(returnval(arr));
