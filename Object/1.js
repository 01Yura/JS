

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  console.log(spaceship)
  spaceship.color = "glorious gold" // меняем значение свойства
  spaceship.numEngines = 5 // добавляем новое свойство
  delete spaceship['Secret Mission'] // удаляем свойство
  console.log(spaceship)