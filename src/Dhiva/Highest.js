const array = ['a','a','b','c','d','d','c','b','c','f'];

const letterCount = {};

array.map((array)=>{
    letterCount[array] = (letterCount[array]||0) + 1;
})

let maxCount = [0];

for(let key in letterCount){
    if(letterCount[key] > maxCount){
        maxCount = letterCount[key]
    }
}

let mostTimes = [];

for(let key in letterCount){
    if(letterCount[key] === maxCount){
        console.log(key)
        mostTimes.push(key)
        
    }
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let highest = number[0];
let lowest = number[0];

for (let i = 1; i < number.length; i++) {
    if (number[i] > highest) {
        highest = number[i];
    }
    if (number[i] < lowest) {
        lowest = number[i];
    }
}

console.log("No of Occurence",letterCount);
console.log("Max Count",maxCount);
console.log("Most times Repeat",mostTimes);
console.log("Highest",highest);
console.log("Lowest",lowest);
