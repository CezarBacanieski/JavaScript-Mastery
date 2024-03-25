//one

const library = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publicationYear: 1954,
  },
  {
    id: 2,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publicationYear: 1605,
  },
  { id: 3, title: "1984", author: "George Orwell", publicationYear: 1949 },
];

function findBookForId(id) {
  return library.find((book) => book.id === id) || null;
}

const existingBook = findBookForId(1);
console.log(existingBook);

const nonexistentBook = findBookForId(7); //return null
console.log(nonexistentBook);

// two

const movieCatalog = [
  { id: 1, title: "Matrix", director: "Lana Wachowski", year: 1999 },
  {
    id: 2,
    title: "Jurassic Park",
    director: "Steven Spielberg",
    releaseYear: 1993,
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  },
];

function filterMoviesForYear(year) {
  return movieCatalog.filter((movieCatalog) => {
    return movieCatalog.year === year;
  });
}

const yearMovie = filterMoviesForYear(1999);
console.log(yearMovie);

const yearMovie2 = filterMoviesForYear(2010);
console.log(yearMovie2);

//three

const productList = [
  { id: 1, name: "T-shirt", price: 25.99 },
  { id: 2, name: "Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 79.99 },
  { id: 4, name: "Cap", price: 15.99 },
];

function filterOrderProductsForPrice(maxPrice) {
  const filteredProducts = productList.filter(
    (product) => product.price <= maxPrice
  );
  return filteredProducts.sort((a, b) => a.price - b.price);
}

const filter = filterOrderProductsForPrice(80);
console.log(filter);

//four

const animals = [
  { id: 1, name: "Lion", species: "Feline", age: 5 },
  { id: 2, name: "Elephant", species: "Mammal", age: 10 },
  { id: 3, name: "Penguin", species: "Bird", age: 3 },
];

function orderAnimals(comparation) {
  return animals.sort(comparation);
}

function compareRisingAge(a, b) {
  return a.age - b.age;
}

const orderedAnimalsRising = orderAnimals(compareRisingAge);
console.log(orderedAnimalsRising);

function compareDescendingAge(a, b) {
  return b.age - a.age;
}

const orderedAnimalsDescending = orderAnimals(compareDescendingAge);
console.log(orderedAnimalsDescending);

//five

const departments = [
  {
    id: 1,
    name: "Sales",
    employees: [
      { id: 101, name: "Ana", position: "Sales Representative" },
      { id: 102, name: "Carlos", position: "Sales Manager" },
    ],
  },
  {
    id: 2,
    name: "IT",
    employees: [
      { id: 201, name: "Maria", position: "Developer" },
      { id: 202, name: "João", position: "Systems Analyst" },
    ],
  },
];

function findEmployeeForId(id) {
  for (const department of departments) {
    const foundEmployee = department.employees.find(
      (employee) => employee.id === id
    );
    if (foundEmployee) {
      return foundEmployee;
    }
  }
  return null;
}

const existingEmployee = findEmployeeForId(201);
console.log(existingEmployee);

const nonexistentEmployee = findEmployeeForId(2001);
console.log("Employee employee not found (ID 2001):");
console.log(nonexistentEmployee);
