// Создаем 2 обьекта на основе расширенных классов
const myCar=new Car("Passenger car", "Lada", "Black", "Standart", "Used", "1000", "Sedan")
const myMoto=new Motocycle("Motocycle", "Minsk", "Red", "Standart", "New", "500", "Sportbike")

// Проверяем, что обьекты создались
console.log(myCar)
console.log(myMoto)

// Проверяем, что методы унаследовались
myCar.describe()
myCar.repaint("XXXXXXXXXXXXXXXXXXXX")
console.log(myCar.color)