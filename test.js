// Problem 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const double = (arr) =>
  arr.map(({ quantity, price }) => ({
    quantity: quantity * 2,
    price: price * 2,
  }));
console.log(double(itemsObject));

const filterItems = (arr) =>
  arr.filter(({ quantity, price }) => quantity > 2 && price > 300);
console.log(filterItems(itemsObject));

const totalValue = (arr) =>
  arr.reduce((acc, item) => acc + item.quantity * item.price, 0);
console.log(totalValue(itemsObject));
