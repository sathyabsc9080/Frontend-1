const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueNumbers.length; j++) {
    if (numbers[i] === uniqueNumbers[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log(uniqueNumbers); 
