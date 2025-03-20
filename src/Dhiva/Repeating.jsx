// Nth Non Repeating...
const letters = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h'];
 
const findNthNonRepeatingLetter = (letters, n) => {
    const letterCount = {};
 
    letters.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
 
    const nonRepeatingLetters = letters.filter(letter => letterCount[letter] === 1);
 
    return nonRepeatingLetters.length >= n ? nonRepeatingLetters[n - 1] : null;
};
 
console.log(findNthNonRepeatingLetter(letters, 2)); 

    // Repeating letters...

// const letters = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h'];

// const letterCount = {};

// letters.forEach(letter => {
//     letterCount[letter] = (letterCount[letter] || 0) + 1;
// });

// console.log( Repeating letters :"letterCount)

     // Non Repeating letters...

// const letters = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h'];

// const letterCount = {};
 
//     letters.forEach(letter => {
//         letterCount[letter] = (letterCount[letter] || 0) + 1;
//     });
 
//     const nonRepeatingLetters = letters.filter(letter => letterCount[letter] === 1);

//     console.log( "Non Repeating letters :" nonRepeatingLetters)