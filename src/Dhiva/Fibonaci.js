let a = 0;
let b = 1;

console.log(a); 
console.log(b); 

while (true) {
  let next = a + b;
  if (next > 100) break;
  console.log(next);
  a = b;
  b = next;
}

for (let i = 0; i < 20; i++) { 
    let result = a + b;
    if (result > 100) break;
    console.log(result);
    a = b;
    b = result;
  }