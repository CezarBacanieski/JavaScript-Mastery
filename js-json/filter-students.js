const students = require("./students.json");

function filterForProperty(list, property) {
  return list.filter((student) => {
    return !student.address.hasOwnProperty(property);
  });
}

const listAdressesIncompletes = filterForProperty(students, "zipcode");
console.log(listAdressesIncompletes)