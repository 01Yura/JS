// The Set object in JavaScript stores unique values of any type, with an emphasis on unique. You can't have the same value more than once in a Set.

const itemsToPack = new Set();
itemsToPack.add("water bottle");
itemsToPack.add("laptop");
itemsToPack.add("headphones");
itemsToPack.add("snacks");
itemsToPack.add("book");
itemsToPack.add("sunscreen");

console.log (itemsToPack)
// - add(): Adds a new item to the Set
// - has(): Checks if an item exists in the Set
// - delete(): Removes an item from the Set
// - size(): Returns the number of items in the Set

if (!itemsToPack.has("water bottle")) {
    itemsToPack.add("water bottle");
   } else {
    console.log("Water bottle is already on the list!");
   }

const backpack1.items = ["water bottle", "laptop"];
const backpack2.items = [ "headphones", "snacks", "book"];

itemsToPack.forEach(item => {
    if (backpack1.items.includes(item)) {
        console.log(`${item} is packed in backpack 1`);
    } else if (backpack2.items.includes(item)) {
        console.log(`${item} is packed in backpack 2`);
    } else {
        console.log(`${item} is not packed`);
    }
});
