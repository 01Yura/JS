// В глобальном скоупе (когда они созданы просто в коде - global namespace, а не внутри функции) переменные доступны везде
let satellite = "The Moon"
let galaxy = "The Milky Way"
let stars = "North Star"

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())


// В данном примере переменая обьявлена в так называемом Block scope, то есть внутри функции и называется Local variable, и не доступна за пределами функции и при ее запросе выдаст ошибку
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
  }
  
  logVisibleLightWaves()
  console.log(lightWaves) // тут будет ошибка lightWaves is not defined


// Переменная в разных скоупах
  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights'
      console.log(lightWaves)  // Northern Lights
    }
    console.log(lightWaves);  // Moonlight
  };
  
  logVisibleLightWaves();






