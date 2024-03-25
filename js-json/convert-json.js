const student = require("./student.json");

const stringStudent = JSON.stringify(student);

console.log(stringStudent);
console.log(typeof stringStudent);

const objStudent = JSON.parse(stringStudent);

console.log(objStudent);
console.log(typeof objStudent);
