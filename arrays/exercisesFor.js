const names = ["Ana", "João", "Maria", "Pedro", "Carla", "Lucas"];
const numbers = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
takeName = "";
for (let name of names) {
  takeName += name;
}
console.log(takeName);

function showNumberAndItems() {
  for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
  }
}

showNumberAndItems();

let sumOfelements = 0;
function intNumbers() {
  for (let number of numbers) {
    sumOfelements += number;
  }
}
intNumbers();
console.log(sumOfelements);

function returnValues(arr) {
  let lowerValue = 0;
  let highestValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestValue) {
      highestValue = arr[i];
    }
    if (arr[i] < lowerValue) {
      lowerValue = arr[i];
    }
  }
  return `the largest number is ${highestValue} and the smallest number is ${lowerValue}`;
}

console.log(returnValues(numbers));

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`The even nunbers are: ${numbers[i]}`);
  }
}

let sumNumbers = 0;

for (number of numbers) {
  sumNumbers += number;
}
let average = sumNumbers / numbers.length;
console.log(average);
