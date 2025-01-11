// Создаем метод как свойство обьекта. Метод - это функция обьекта
const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };
  
// Можно сократить запись, чтобы не использовать синтаксис ключ: значение
const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

  alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'



// Вот объект с 2мя методами
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat()
alienShip.takeOff()