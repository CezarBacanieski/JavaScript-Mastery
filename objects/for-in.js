const student = {
  name: "John Jones",
  age: 17,
  id: "345675879778",
  class: "JavaScript",
  scholarship: true,
  phones: ["11967226058", "119672gg6058", "11967226058"],
  address: [
    {
      street: "sebastio ivo",
      number: 410,
      complement: "apartment 56",
    },
    {
      street: "Rua dois e cinquenta",
      number: 71,
      complement: "apto410",
    },
  ],
};

for (let key in student) {
  const type = typeof student[key];
  if (type !== "object" && type !== "function") {
    const text = `the key ${key} has the value ${student[key]}`;
    console.log(text);
  }
}
