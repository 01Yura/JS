const newDeskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

console.log(newDeskArray)
newDeskArray.pop()
newDeskArray.sort()
let last_item=newDeskArray.pop()
console.log(last_item)
newDeskArray.unshift(last_item)

let indexUSBdrive = newDeskArray.indexOf("USB drive")
newDeskArray.push(newDeskArray.splice(indexUSBdrive,1))
let indexLaptop = newDeskArray.indexOf("laptop")
newDeskArray.splice(indexLaptop,1)