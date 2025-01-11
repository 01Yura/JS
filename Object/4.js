// Замена значений ключей и добавление новыз свойств обьекту через функции

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Создаем функцию, которая принимает в качестве параметра - имя обьекта и меняет конкретный параметр этого обьекта на нужное значение
let greenEnergy = (objectParametr) => {
  objectParametr["Fuel Type"] = "avocado oil";
};

// Создаем функцию, которая принимает в качестве параметра - имя обьекта и меняет добавляет новый параметр к этому обьекту и нужное значение
let remotelyDisable = (objectParametr) => {
  objectParametr.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
