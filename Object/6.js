// Геттер. Кроме того свойства обьекта, зачения которых не должны меняться начинаются с underscore по соглашению.
// И для получения такого свойства используются геттеры

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return `System malfunction: cannot retrieve energy level`;
    }
  },
};
// Геттер метод можно вызывать без круглых скобок
console.log(robot.energyLevel);

// Сеттер, чтобы с помощью метода set можно было изменить значение параметра, предварительно проверим соответствие условий
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

//   Метод вызывается как переменная, без скобокб со знаком =
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
