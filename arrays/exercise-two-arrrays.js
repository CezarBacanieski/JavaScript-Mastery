const names = ["Ana Carla", "João Lucas", "Henrique Pedro"];

names.forEach((item, index) => {
  console.log(`Item: ${item} index: ${index}`);
});

///

function performsOperationOnArray(arr, functionCallBack) {
  return arr.map(functionCallBack);
}

function sumNumArr(num) {
  return num + 50;
}

const listNum = [10, 6.5, 8, 7.5, 5];
const addedNumber = performsOperationOnArray(listNum, sumNumArr);
console.log(addedNumber);

const sougthNumber = 6.5;
let position = -1;

for (let i = 0; i < listNum.length; i++) {
  if (listNum[i] === sougthNumber) {
    position = [i];
    break;
  }
}
console.log(
  `The sougth number is: ${sougthNumber} and its index is: ${position}`
);

///

const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];
const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];

const allClasses = nomesTurmaA.concat(nomesTurmaB);

const sougthStudent = allClasses.find((name) => name === "Maria Santossss");
if (sougthStudent) {
  console.log("Student found:", sougthStudent);
} else {
  console.log("Student not found");
}

///

const numbers = [6, 9, 12, 15, 18, 21];

numbers.forEach((num) => console.log(num * 3));

const indexNumber18 = numbers.findIndex((number) => number === 18)


if (indexNumber18 !== -1) {
    console.log(`The number 18 is at index ${indexNumber18}`)
} else {
    console.log('The number 18 is not in the index')
}