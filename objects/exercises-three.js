//one

const person = {
  name: "cezar",
  grades: [8, 9, 10, 7],
  calculateAverage: function () {
    const sumGrades = this.grades.reduce(
      (accumulator, grade) => accumulator + grade,
      0
    );
    const average = sumGrades / this.grades.length;
    return average.toFixed(2);
  },
  evaluatePerformance: function () {
    const average = this.calculateAverage();
    if (average >= 9) {
      return "Desempenho excelente";
    } else if (average >= 7.5 && average < 9) {
      return "Bom desempenho";
    } else if (average >= 6 && average < 7.5) {
      return "Desempenho regular";
    } else {
      return "Desempenho insulficiente";
    }
  },
};

console.log(person.calculateAverage());
console.log(person.evaluatePerformance());

//two

const car = {
  brand: "tesla",
  model: "x",
  year: 2024,
  color: "black",
};

for (let x in car) {
  console.log(x, car[x]);
}

car.programmer = "VSCODE";
car.language = "JavaScript";

console.log("uptades properties");
for (let x in car) {
  console.log(x, car[x]);
}

//three

const car1 = {
  brand: "tesla",
  model: "x",
  year: 2024,
  color: "black",
  running: true,
  turnOnORNot: function () {
    console.log(`the car is turn on?:  ${this.running}`);
  },
  turnOn: function () {
    if (!this.running) {
      this.running = true;
      console.log("The car is running now");
    } else {
      console.log("the car already is turned on");
    }
  },
  turnOff: function () {
    if (this.running) {
      this.running = false;
      console.log("The car is turned off");
    } else {
      console.log("the car already is turned off");
    }
  },
  showDetails: function () {
    const status = this.running ? "turn on" : "turn off";
    return `car details: \nBrand: ${this.brand}\n Model: ${this.model}\n Year: ${this.year}\n Color: ${this.color}\n Status: ${status}`;
  },
};

car1.turnOnORNot();

car1.turnOn();
car1.turnOff();
car1.turnOff();
car1.turnOn();
console.log(car1.showDetails());

//four

const car2 = {
  brand: "tesla",
  model: "x",
  year: 2024,
  color: "black",
  running: false,
  plate: "RTM5476",
};

Object.defineProperty(car2, "plate", { enumerable: false });

console.log("Car enumerable properties:");
for (let properties in car2) {
  console.log(`${properties}: ${car2[properties]}`);
}

const keysObject = Object.keys(car2);
console.log(keysObject);

console.log(car2.plate);

//five

const car3 = {
  brand: "bmw",
  model: "x6",
  year: 2024,
  color: "white",
};

const newDetails = {
  brand: "mercedes",
  model: "g63",
  year: 2024,
  color: "gray",
};

const newCarDetails = { ...car3, ...newDetails };
console.log("Car with new details:");
console.log(newCarDetails);

newCarDetails.model = "AMG One";
console.log("Car with modified details:");
console.log(newCarDetails);
