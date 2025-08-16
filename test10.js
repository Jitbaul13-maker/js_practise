//for of loop

const arr = [1, 3, 6, 2, 9]

for (const i of arr) {
    console.log(i);
}

const greet = "Hello!"

for (const i of greet) {
    console.log(`${i}`);
}

//maps

const map = new Map()
map.set("In", 91)
map.set("Isr", 92)
console.log(map);
for (const [key, value] of map) {
    console.log(key, value);
}

const myObj = {
    'game1': "IGI",
    'game2': "POP"
}
for (const key in myObj) {
    console.log(key,myObj[key]);
}

const lang = ["java", "Python", "Javascript"]
for (const key in lang) {
    console.log(key);
    console.log(lang[key]);
}

//for each loop

const career = ["SSC", "UPSC", "GATE", "Private"]
career.forEach((element, index, array) => {
    console.log(element, index, array);
});

const newObj = [
    {
        name:"Baul",
        location: "Kolkata"
    },
    {
        name: "Shree",
        location: "Bangalore"
    }
]

newObj.forEach(item => {
    console.log(item.location);
})