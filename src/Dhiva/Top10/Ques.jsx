const letters = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'c', 'c'];
 
const letterCount = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
 
console.log(letterCount);