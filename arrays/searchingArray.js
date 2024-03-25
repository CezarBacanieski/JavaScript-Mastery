const students = ["Ana", "João", "Maria", "Pedro"];
const average = [10, 8, 7.5, 9];

const list = [students, average];

function showNameAndGrade(student) {
  if (list[0].includes(student)) {
    const index = list[0].indexOf(student);
    const avarageStudent = list[1][index];
    console.log(`${student} has an avarage of ${avarageStudent}`);
  } else {
    console.log(`Student doesnt exist in the list`);
  }
}
showNameAndGrade("Ana");


//this code takes the grades and adds them all up and then divides by the length of the array
let sumOfGrades = 0;
for (let i = 0; i < average.length; i++) {
  sumOfGrades += average[i];
}
const studentsAverage = sumOfGrades / average.length;
console.log(`The grade average is ${studentsAverage.toFixed(2)}`);


// this code below is used to show on the item and the item's index in the terminal
for (let i = 0; i < students.length; i++) {
  console.log(`Item name: ${students[i]} and your index is ${i}`);
}
