const names = ["Ana", "João", "Maria", "Pedro", "Carla", "Lucas"];
const salaPY = ["JU", "Leo", "Raquel"];
const average = [10, 8, 7.5, 9];

function concatArray(array1, array2, array3) {
  const join = array1.concat(array2, array3);
  return join;
}

const array1 = names;
const array2 = salaPY;
const array3 = average;

const resultConcat = concatArray(array1, array2, array3);
console.log(resultConcat);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const partNumbers = numbers.slice(3, 7);
console.log(partNumbers);

const fruits = ["Apple", "Banana", "Orange", "Lemon", "Pineapple"];
fruits.splice(2, 2, "Kiwi", "Peach");
console.log(fruits);

const mainMenu = ["Rice", "Beans", "Eggs", "Meat", "Soup", "Pasta"];
const dessertMenu = [
  "Chocolate Cake",
  "Apple Pie",
  "Tiramisu",
  "Cheesecake",
  "Ice Cream Sundae",
  "Lemon Tart",
  "Pavlova",
];

const fullMenu = mainMenu.concat(dessertMenu);
console.log(fullMenu);

const matriz = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    const value = i * 3 + j + 1;
    row.push(value);
  }
  matriz.push(row);
}
matriz[2][1] = 15;

console.log(matriz);

console.log(matriz[1][1]);
