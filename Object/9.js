// Встроенные методы


// Метод Object.keys() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Возвращает массив свойств(ключей) обьекта, без значений
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot); 
console.log(robotKeys);  
// Вывод: [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]



// Object.entries() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// Возвращает массив ключ: значение
const robotEntries =  Object.entries(robot) 

console.log(robotEntries);
// Вывод:
// [ [ 'model', 'SAL-1000' ],
//   [ 'mobile', true ],
//   [ 'sentient', false ],
//   [ 'armor', 'Steel-plated' ],
//   [ 'energyLevel', 75 ] ]



// Метод Object.assign(target, source) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Возвращает целевой(target) обьект, дополненный свойствами из одного или нескольктх source обьектов
const newRobot = {laserBlaster: true, voiceRecognition: true}
Object.assign(newRobot,robot)
console.log(newRobot);
// Вывод:
// { laserBlaster: true,
//     voiceRecognition: true,
//     model: 'SAL-1000',
//     mobile: true,
//     sentient: false,
//     armor: 'Steel-plated',
//     energyLevel: 75 }