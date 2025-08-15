let score = "97"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) 

// null => 0
// 33abc, undefined =>NaN

// "" => false, "baul" => true

/**********************operations***********************/

console.log(2**3)
 
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let counter = 10
console.log(++counter)
console.log(counter);

// === strict check, boyh value and data-type is checked

// primitive data types
/* 
    String, number, boolean, null, undefined, symbol, bigint
*/

// Javascript is dynamically typed language

// reference/ non-primitve types
/*
array, objects, functions
*/
// 1234758695n : n makes it bigint

const id = Symbol('123')
const otherid = Symbol('123')
console.log(id == otherid)

const heroes = ["Messi",2,"Ronaldo"]
console.log(typeof heroes);

let myobj = {
    name: "Baul",
    age: 23
}

const myfun = function(){
    console.log("Hello!!!");
}