let i = 0
while (i < 10) {
    console.log(i)
    i += 2
}

let input
do {
    input = prompt("Enter a number grater than 10")
} while (input <= 10)
alert(`Вы ввели число ${input}`)