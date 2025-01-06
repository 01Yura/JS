let x = 10, y = 5;

x++;   
console.log(x);

--y;
console.log(y);        

let z = y++;  
let w = ++y;   


console.log(y); // 6
console.log(z); // 4
console.log(w); // 62