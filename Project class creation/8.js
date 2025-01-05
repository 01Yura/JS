// Присваеваем переменной "content" значение через обратные кавычки `` и вставляем туда свойства обьекта 
const content = `
        <h1>Page about vehicles</h1>
        <h3>Describe my car ${myCar.name}:</h3>
        <ul>
            <li>Name: ${myCar.name}</li>
            <li>Type: ${myCar.type}</li>
            <li>Brand: ${myCar.brand}</li>
            <li>Color: ${myCar.color}</li>
            <li>Config: ${myCar.config}</li>
            <li>Condition: ${myCar.condition}</li>
            <li>Price: ${myCar.price}</li>
        </ul>
`
// Выводим на страницу значение переменной "content"
document.body.innerHTML = content

// Еще способ
const content2 = "<h1>" + myCar.name + "</h1>"
document.body.innerHTML = content2