// Создаем расширенный класс на основе класса Vehicle
class Car extends Vehicle{
    // Прописываем все старые и новые свойства
    constructor(name, type, brand, color, config, condition, price, body_type){
// super() — это вызов конструктора родительского класса Vehicle.
// Он передаёт аргументы type, brand, color, config, condition, price в родительский конструктор, чтобы инициализировать соответствующие свойства.
        super(name, type, brand, color, config, condition, price)
// Добавляем новое свойство
        this.body_type=body_type
    }
}

class Motocycle extends Vehicle{
       constructor(name, type, brand, color, config, condition, price, moto_type){
        super(name, type, brand, color, config, condition, price)
        this.moto_type=moto_type
    }
}