const student = {
  name: "John Jones",
  age: 17,
  id: "345675879778",
  class: "JavaScript",
  scholarship: true,
  phones: ["11976564123", "1193453534", "1192343532"],
  address: [
    {
      street: "sebastio ivoc",
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

function displayPhones(phone1, phone2, phone3) {
  console.log(`call ${phone1}`);
  console.log(`call ${phone2}`);
  console.log(`call ${phone3}`);
}

displayPhones(...student.phones);

const dataSend = {
  recipient: student.name,
  ...student.address[0],
};

console.log(dataSend);
