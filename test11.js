const arr = [1, 5, 3, 7, 8]
const newnum = arr.filter(item => item>5)
console.log(newnum);
console.log();


const nums = []
arr.forEach(num => {
    if (num>4) {
        nums.push(num)
    }
})
console.log(nums);
console.log();

const newarr =  arr.map( num => num+10)
console.log(newarr);

const arr2 = arr.filter(num => num>5).map(num => num+10)
console.log(arr2);

const initialval = 0;
const sum = arr.reduce((a,b) => a+b, initialval)
console.log(sum);