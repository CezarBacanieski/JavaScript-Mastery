const students = ["Ana", "Maria", "Mauro"];
const grades = [7, 4.5, 8, 7.5];

const failed = students.filter((_, index) => {
  return grades[index] < 7;
});

console.log(failed);
