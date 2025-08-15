console.log("Hello")

const accountId = 144553 // can't be changed
let accountEmail = "Baul@google.com"
var accountPassword = "0013" // var should be avoided cz of block/functional scope issue
accountLocation = "Kolkata" //possible but avoid
let accountState;
let isLoggedIn = false;

// null => standalone value //type: object
// sysmbol => unique

// object 

console.log(accountEmail)
console.table([accountId,accountEmail,
    accountPassword,accountLocation,accountState])
console.log(typeof accountId);

// alert (3 + 3) // can't use since it is node not browser

//"use strict" // implies newer version, default

