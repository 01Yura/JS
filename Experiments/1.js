let starships = {
  ship1: {
    ship_name: "Enterprise",
    engine_power: 100,
    color: "green",
  },
  ship2: {
    ship_name: "Voager",
    engine_power: 50,
    color: "black",
  },
};

console.log(starships.ship2.color);

function changeColor(ship, data) {
  starships[ship].color = data;
}

changeColor("ship1", "blue");
console.log(starships.ship1.color);
