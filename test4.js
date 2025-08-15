// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log();

let createdDate = new Date(2025, 9, 4) // month start from 0
console.log(createdDate.toString());
console.log();

let createdDate2 = new Date("2025-08-15")
console.log(createdDate2.toLocaleString());
console.log();

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate2.getTime());
console.log(createdDate2.getDate());
console.log();

let newd = createdDate.toLocaleString('default',{
    weekday: "long",
    localeMatcher: "best fit"
})

// console.log(newd.weekday);

/*----------------------------------------------------------*/

//array

const arr = [0, 1, 2, 6, 9, 5, true]
const arr2 = new Array("Baul", "Diji", "Lokesh")
console.log(arr[1]);
arr.push(4)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(3)
console.log(arr);
console.log(arr.shift());
console.log(arr.includes(8));
console.log(arr.indexOf(4));

const newarr = arr.join()
console.log(newarr);
console.log();


// slice keeps original array intact, splice modifies the original array

const heroes = ["Thor", "Hulk", "Iron man"]
const heroes2 = ["Batman", "Superman", "Wonder Woman"]

// heroes.push(heroes2)
// console.log(heroes);
// console.log(heroes[3][1]);

const all_heroes = heroes.concat(heroes2)
console.log(all_heroes);
console.log();
const all_new_heroes = [...heroes, ...heroes2]
console.log(all_new_heroes);
console.log();

const arr3 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]
const arr4 = arr3.flat(Infinity)
console.log(arr4);

console.log(Array.isArray("Baul"));
console.log(Array.from("Baul"));
console.log(Array.of(100,200,300));

const myname = "Jit"
console.log(myname[1]);
