// Сокращения для значений свойств обьекта
// Это не сокращенный вариант

const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };

//   А вот сокращенный

const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
  };

  

// Destructive functionality (в фигурных скобках указываем одновременно название нужного нам свойства(ключа), и через равно указываем просто название обьекта, без свойств)
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot
  functionality.beep()  