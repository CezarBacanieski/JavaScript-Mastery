const student = {
  name: "John Jones",
  age: 17,
  id: "345675879778",
  class: "JavaScript",
  scholarship: true,
  phones: ["11967226058", "119672gg6058", "11967226058"],
  address: [{
    street: "Street Joseph Climber",
    number: "45",
    complement: "apartment 71",
  }],
};

student.address.push({
    street: "Street Joseph Climber two",
    number: "451",
    complement: "",
  });
// console.log(student.address);
// console.log(student.address[1]);

const filterListComplement = student.address.filter((address) => address.complement)
console.log(filterListComplement)

