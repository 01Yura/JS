let starships = {
  uss_enterprise: {
    name: "USS Enterprise",
    shields: true,
    weapons: true,
    engine_power: 90,
  },
  millennium_falcon: {
    name: "Millennium Falcon",
    shields: true,
    weapons: true,
    engine_power: 100,
  },
  prometheus: {
    name: "Prometheus",
    shields: true,
    weapons: true,
    engine_power: 70,
  },
};

let keys = Object.keys(starships);
let result = "",
  shipCounter = 0;

for (let i = 0; i < keys.length; i++) {
  if (starships[keys[i]].engine_power < 90) continue;
  shipCounter++;
  result +=
    starships[keys[i]].name + (i < keys.length - shipCounter ? ", " : "");
}
console.log(result);
