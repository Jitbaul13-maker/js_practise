//Memory => stack(Primitive) & heap(Non-Primitive)

let myname = "Ghochu"
let othername = myname
console.log(othername)

let userone = {
    email: "userone@gmail.com"
}
console.log(userone.email);

let usertwo = userone 
usertwo.email = "userone@email.com"
console.log(userone.email);

/*--------------------------------------------------------*/

const fname = "Jit"
const lname = "Roy"

console.log(`Full name is ${fname} ${lname}`);

const game = new String("  Foot-ball ")

console.log(game);
console.log(game.length);
console.log(game.toUpperCase()); 
console.log(game.charAt(3));
console.log(game.indexOf('t'));
console.log(game.slice(0,4)); //we can use negavive index
console.log(game.trim()); //only whitespace
console.log(game.split("-"));
console.log(game.replace("-",""));
console.log(game.includes("ho"));

/*-----------------------------------------------------------*/

const score = new Number(400.786)
console.log(score);
console.log(score.toString().length);
console.log(score.toFixed(2));
console.log(score.toPrecision(6));
console.log(score.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE);

/*------------------------------------------------------------*/

console.log(Math);
console.log(Math.abs(-21));
console.log(Math.round(4.5));
console.log(Math.ceil(4.3)); //floor
console.log(Math.sqrt(49));
console.log(Math.min(3, 5, 2, 8, 1));
console.log((Math.random()*10) + 1); // between 0 and 1

const max = 10
const min = 5
console.log(Math.floor(Math.random() * (max-min+1)) + min);
