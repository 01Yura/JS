// nesteed loops for comparing items in arrays

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}



const bobsFollowers = ["Eric", "Kenny", "Kaile", "Batters"]
const tinasFollowers = ["Max", "Kaile", "Eric"]
const mutualFollowers = []

for (let i=0; i<bobsFollowers.length; i++){
  for (let j=0; j<tinasFollowers.length; j++){
    if (bobsFollowers[i]==tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)


// Цикл for in (чтобы проходить по свойствам объекта)
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for (let crewRole in spaceship.crew) {
console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`)
}

for (let crewRole in spaceship.crew) {
console.log(`${spaceship.crew[crewRole].name}: ${spaceship.crew[crewRole].degree}`)
}