// Синтаксис функции без параметров
function greetWorld() {
  console.log('Hello, World!');
}

greetWorld(); // Output: Hello, World!


// Синтаксис функции с параметрами
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }

  sayThanks("Cole")

// Функция с дефолтным параметром, если не ввели свой параметр
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!  


// Выражение return
function monitorCount(rows, columns){return rows*columns}

const numOfMonitors = monitorCount(5,4)
console.log(numOfMonitors) 


// Функция helper (одна в другой)
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  }
  
  const totalCost=costOfMonitors(5,4)
  
  console.log(totalCost)


// Function expressions
const plantNeedsWater = function(day){if (day==="Wednesday"){return true} else {return false}
}
console.log(plantNeedsWater("Tuesday"))


// Arrow functions
const plantNeedsWaters = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };


// Concise Body Arrow Functions
const squareNum = (num) => {
    return num * num;
  };

const squareNum2 = num => num * num;

// Notice the following changes:

// The parentheses around num have been removed, since it has a single parameter.
// The curly braces { } have been removed since the function consists of a single-line block.
// The return keyword has been removed since the function consists of a single-line block.
