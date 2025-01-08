// forEach() перебирает каждый элемент массива и всатвляет его в качестве параметра в функцию
const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((eachFruit) => console.log("I want to eat a " + eachFruit));

// .map() перебирает каждый элемент и создает отдельный массив, названный как переменная
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((item) => item[0]);
console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((item) => item / 100);

// fiter() проходится по элементам массива и выбирает только те элементы, которые соответствуют условию и возвращает true, создавая новый массив, названный как переменная
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter((num) => num < 250);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter((word) => word.length > 7);

// Метод .reduce не понял нихера, может принимать второй аргумент - в данном случае 10
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

// Примеры

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value (some or every)
nums.some((num) => num < 0);
