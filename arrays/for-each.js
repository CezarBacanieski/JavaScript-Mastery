const grades = [10, 6.5, 8, 7.5, 5];

let sumOfGrades = 0;

grades.forEach(function (grade) {
  sumOfGrades += grade;
});

const average = sumOfGrades / grades.length

console.log(`The grades average are ${average}`)

