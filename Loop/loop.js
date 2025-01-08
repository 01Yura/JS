// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
  
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }
  


//  do while loop
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);


const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// for loop with break
for (let i=0; i<rapperArray.length; i++){
  if (rapperArray[i]=='Notorious B.I.G.'){
    console.log(rapperArray[i])
    break
  }
  console.log(rapperArray[i])
}
console.log("And if you don't know, now you know.")