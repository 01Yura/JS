// Цикл for in (чтобы проходить по свойствам объекта)
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewRole in spaceship.crew) {
  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`);
}

for (let crewRole in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewRole].name}: ${spaceship.crew[crewRole].degree}`
  );
}
