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
      complement: null,
    },
  ],
};

const keysObject = Object.entries(student);
console.log(keysObject);

if (!keysObject.includes("address")) {
  console.error("there must be a registered address");
}
