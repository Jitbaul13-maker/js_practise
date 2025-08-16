//Objects

//Object literals

const sym1 = Symbol("mysym")

const user = {
    name: "Baul",
    age: 18,
    [sym1]: "Key2",
    "location": "kolkata",
    alive: true,
    lastlogin: ["Monday", "Wednesday"]
}

// console.log(user.age);
// console.log(user["location"]);
// console.log(user[sym1]);

user.location = "Italy"
// console.log(user["location"]);
// Object.freeze(user)

user.greeting = function(){
    console.log(`Hello, ${this.name}`);
}

// console.log(user.greeting());
console.log();


// singleton
// const user1 = new Object();

const user1 = {};

user1.id = 123
user1.location = "Bangalore"
user1.alive = false

const user2 = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fname: "Neha",
            lname: "Pal"
        }
    }
}

// console.log(user2.fullname.userfullname.fname);

// const user3 = Object.assign({},user1,user2)
const user3 = {...user1, ...user2}
// console.log(user3);
// console.log();

// console.log(Object.keys(user1));
// console.log(Object.values(user2));
// console.log(Object.entries(user1));

const user4 = [
    {
        id: 13,
        nam: "Rahul"
    },
    {
        id: 14,
        nam: "Rohit"
    },
]

// console.log(user4[1].nam);

const course = {
    name: "ECE",
    price: 999,
    Instructor: "Chandan Gupta"
}

const {Instructor: inst} = course

console.log(inst);
