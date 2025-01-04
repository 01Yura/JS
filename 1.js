//let x = prompt("Введите первое число:")
//let y = prompt("Введите второе число:")
//let z = x + y
//console.log(`Результат сложения ${x} и ${y} будет равен:`, z)

//let colors = ["red", "green", "black"]
//colors.push("gray")
//document.write(colors)

/*
let colors = ["red", "green", "black"]
colors.push("gray")
document.write(colors[0], " ", colors[3])
*/

//"use strict";
//let = "Векна";
//console.log(creature);

// console.log({key1:123,key2:"qwerty"})

let fruit = "яблоко";
let message = "Я люблю ";

switch (fruit) {
  case "банан":
  case "яблоко":
    message += "есть ";
  case "апельсин":
    message += "сочный ";
  case "виноград":
    message += "фрукт.";
    console.log(message);
    break;
  default:
    console.log("Я не люблю этот фрукт.");
}