age = 18
nationality = "Indian"
if (age<=0) {
    console.log("Invalid age!");
}
else if (age>= 18 && nationality == "Indian") {
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible");
}

const balance = 1000
switch (balance) {
    case 1000:
        console.log("Sufficient");
        break;
    case 500:
        console.log("Not Sufficient");
        break;
    default:
        console.log("Invalid");
        break;
}

//truthy: [], true, 1, "0", 'false', " ", {}, function(){}
//falsy: false, 0, -0, 0n, "", null, undefined, NaN

//nulish caolescing operator(??)

let val;
val = null ?? 10
console.log(val);

//ternary operator

const price = 100
price >20 ? "expensive" : "Afffordable"

// check empty object

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Empty");
}
