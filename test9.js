//for loop

for (let i = 1; i <= 10; i++) {
    if (i == 8) {
        console.log("Breakpoint reached");    
        break;
    }
    if (i == 5) {
        continue;
    }
    else{   
        console.log(i+1);
    }
}
console.log();

let arr = [1, 3, 6, 4, 9]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

//while loop
let index = 8;
while (index >= 5) {
    console.log(index);
    index--;    
}

//do-while loop
let score = 1
do{
    console.log(score);
    score++;
}while(score<=10);

