// Пример nested object и пример свойства обьекта, которое является массивом обьектов (passengers)

let spaceship = {
    passengers: [
      {
        name: 'Funtik',
        degree: 'Doctor',
        'favorite foods': ['watermelon', 'pasta', 'pizza', 'borch']
      },
      {
        name: 'Vinni Pooh',
        degree: 'Bear',
        'favorite foods': ['honey']
      }
    ],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0]
  let firstPassenger = spaceship.passengers[0]
  
  