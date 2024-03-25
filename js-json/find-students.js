const students = require("./students.json");

function searchInformation(list, key, value) {
  return list.find((student) => student[key].includes(value));
  /*
    I have to use this include method because the key phone number is a 
    list and I can't search with my function when it is a list, the terminal was returning undefined
  */
}

const studentFound = searchInformation(students, "name", "Izaak");
console.log(studentFound);
const studentPhone = searchInformation(students, "phone", "9916828153");
console.log(studentPhone);
