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


function assertType(value, type) {
    if (typeof value !== type) {
      throw new TypeError(`Expected ${type}, but got ${typeof value}`);
    }
   }
   
   function add(a, b) {
    assertType(a, "number");
    assertType(b, "number");
    return a + b;
   }