const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];
const names = ["Ana", "Ana", "Maria", "Mauro", "Mauro", "Mauro"];
const grades = [10, 6.5, 8, 7.5, 5];
const salaPY = ["JU", "Leo", "Raquel"];

//using spread

// const joinAllArrays = [...names, nomesTurmaB, grades, salaPY]
// console.log(joinAllArrays)

function concatArrays(...arrays) {
  return [].concat(...arrays);
}

const joinAllArrays = concatArrays(nomesTurmaB, names, grades, salaPY);
console.log(joinAllArrays);

//using reduce

const values = [10, 6.5, 8, 7.5, 5];

const sumValues = values.reduce(
  (accumulator, numbers) => accumulator + numbers,
  0
);

console.log(sumValues);

// removing duplicates and joing lists

const colorsList1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];
const colorsList2 = ["Laranja", "Verde", "Roxo", "Azul"];

const uniqueColors = [...new Set([...colorsList1, ...colorsList2])];
const joinTwoLists = colorsList1.concat(colorsList2);
const joinListColors = new Set(joinTwoLists);
console.log(joinListColors);
console.log(uniqueColors);

// pair numbers

const numbers = [10, 6.5, 8, 7.5, 5];

function filterPairNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const listPairNumbers = filterPairNumbers(numbers);
console.log(listPairNumbers);

// filter multiply by 3 and greater than 5

const numbersTwo = [10, 6.5, 8, 7.5, 5, 30, 50, 48, 1, 3, 15];

function filterNumbers(arr) {
  return arr.filter((num) => num % 3 === 0 && num > 5);
}

const multiplyThreeGreaterFive = filterNumbers(numbersTwo);
console.log(multiplyThreeGreaterFive);

// receive an array of numbers and add all them up

function receiveAndAddAll(numArr) {
  return numArr.reduce((accumulator, num) => accumulator + num, 0);
}

const addAllArray = receiveAndAddAll(numbersTwo);
console.log(addAllArray);
