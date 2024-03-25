const grades = [10, 6.5, 8, 7.5, 5];
const names = ["Ana Carla", "João Lucas", "Henrique Pedro"];

const updatedGrades = grades.map((grade) => (grade + 1 >= 10 ? 10 : grade + 1));
console.log(updatedGrades);

const stardandizedNames = names.map((name) => name.toUpperCase());
console.log(stardandizedNames);

const arrayNums = [1, 2, 3, 4];

function multiplyByTen(num) {
  return num * 10;
}

const newNums = arrayNums.map((num) => num * 10);
console.log(newNums);
const arrayMultiply = arrayNums.map(multiplyByTen);
console.log(arrayMultiply);
