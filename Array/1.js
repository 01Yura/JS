// создать массив
testArray = [1, "test", true, 5.5]
console.log(testArray)

// Вывести конкретный элемент по индексу
console.log(testArray[3])

// Заменить элемент по индексу
testArray[0]="first"
console.log(testArray)

// Добавить элемент по индексу в конец массива
testArray[testArray.length] = 'new item'
console.log(testArray)

// Добавить элемент по индексу больше чем конец массива
testArray[10] = "number 10"
console.log(testArray)
console.log(testArray[8])

// Вывести массив в виде строки
console.log(testArray.join(", "))

// Вставить элемент в конец с помощью Push
console.log(testArray)
console.log(testArray.push("pencil", 99999))
console.log(testArray)

testArray.push("pen", "12345")
console.log(testArray)

// Вставить элемент в начало
testArray.unshift("123")
console.log(testArray[0])
console.log(testArray)

// Shift удаляет первый, pop удаляет последний
testArray.shift()
console.log(testArray)
testArray.pop()
console.log(testArray)




