const data = require("./data.json");
const animals = require("./animals.json");

//one
console.log("Content imported from data.json:");
console.log(data);

console.log("\nData access:");
console.log(data.products);
console.log(data.users);

//two
const product = {
  id: 1,
  name: "T-shirt",
  price: 25.99,
};

const productString = JSON.stringify(product);
console.log(productString);

//three

const objectAnimals = {
  animals: [
    {
      id: 1,
      name: "Lion",
      type: "Mammal",
      habitat: "Savanna",
    },
    {
      id: 2,
      name: "Penguin",
      type: "Bird",
      habitat: "South Pole",
    },
    {
      id: 3,
      name: "Snake",
      type: "Reptile",
      habitat: "Tropical Forest",
    },
  ],
};

const newAnimal = {
  id: 4,
  name: "Elephant",
  type: "Mammal",
  habitat: "Grasslands",
};

const animalToModifie = objectAnimals.animals.find(
  (animals) => animals.id === 2
);
if (animalToModifie) {
  animalToModifie.habitat = "Ocean Antartic";
}

const removeAnimalIndex = objectAnimals.animals.findIndex(
  (animals) => animals.id === 1
);

if (removeAnimalIndex !== -1) {
  objectAnimals.animals.splice(removeAnimalIndex, 1);
}

const newStringJsonAnimals = JSON.stringify(objectAnimals, null, 2);

console.log("JavaScript object resulting from operations:");
console.log(objectAnimals)

//four

function receiveObj(object) {
  return JSON.parse(JSON.stringify(object));
}

const originalPerson = {
  id: 1,
  name: "Alice",
  age: 30,
};

const personModified = receiveObj(originalPerson);

personModified.name = 'Robson';
personModified.age = 40;

console.log(originalPerson);
console.log(personModified);
