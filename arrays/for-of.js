const grades = [10, 6.5, 8, 7.5];

let sumOfGrades = 0;

for (let grade of grades) {
  sumOfGrades += grade;
}

const average = sumOfGrades / grades.length;

console.log(`The average grade is ${average}`);
