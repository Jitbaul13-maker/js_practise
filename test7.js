let a = 10
const b = 20
var c = 30 // block level scoping does not work

// console.log(this);

// global scope is different in browser console and node

// add(6) //hoisting issue, can't be accessed bcz of declaration
const add = function(num)
{
    // return num++;
    console.log(this);
}
// console.log(add(4));


// arrow function

const fun = () => {
    let username = "diya"
    console.log(this);
}
// fun();

const addnum = (num1, num2) => {
    return num1+num2 // explicit return
}
// console.log(addnum(8,6));

const sub = (num1,num2) => (num1-num2); // implicit return

// IIFE

(function greet(){
    console.log("Good Evening");
})(); // required to stop context

((db) => {
    console.log(`Connected ${db}`);
})("JDBC");