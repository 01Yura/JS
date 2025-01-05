// Создаем класс, на основе которого будем создавать расширенные классы. 
// Всё, что описано внутри фигурных скобок { ... }, относится к шаблону, по которому будут создаваться объекты.
class Vehicle{
// Конструктор — это метод, который автоматически вызывается при создании нового объекта.
    constructor(name, type, brand, color, config, condition, price){  // Создаем необходимые параметры(свойства) для обьекта
// Создаём свойства объекта и присваивает ему значение из соответствующего параметра
        this.type=type
        this.brand=brand
        this.color=color
        this.config=config
        this.condition=condition
        this.price=price
        this.name=name
    }
// Метод repaint принимает один параметр newColor.
// Он обновляет свойство color объекта на новое значение.
    repaint(newColor){
        this.color=newColor
    }
    reprice(newPrice){
        this.price=newPrice
    }
    describe(){
        console.log(`This vehicle is: ${this.type}, brand: ${this.brand} and ${this.color} color. It costs ${this.price}. `)
    }

}
// При наследовании дочерний класс автоматически унаследует все эти методы и свойства.