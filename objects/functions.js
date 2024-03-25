const student = {
  name: "John Jones",
  age: 17,
  id: "345675879778",
  class: "JavaScript",
  scholarship: true,
  phones: ["11967226058", "119672gg6058", "11967226058"],
  average: 7.5,
  isAprove: function(baseAverage) {
    return this.average >= baseAverage ? true : false;
  },
};

console.log(student.isAprove(8))