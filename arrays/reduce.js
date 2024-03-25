const salaJS = [6, 8, 9, 3, 5, 2, 4, 5, 1, 9, 10];
const salaJava = [6, 9, 5.5, 3.6, 7.9];
const salaPY = [0, 10, 6, 7.9, 4.6];

function calculateAverage(gradeList) {
  const sumGrades = gradeList.reduce((accumulator, grade) => accumulator + grade, 0);
  const average = sumGrades / gradeList.length;
  return average;
}

console.log(calculateAverage(salaJS).toFixed(2));
console.log(calculateAverage(salaJava).toFixed(2));
console.log(calculateAverage(salaPY).toFixed(2));
