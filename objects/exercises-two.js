// exercise 1

person = {
    name: 'Roberto',
    age: 49,
    single: false,
    hobbies: ['sing', 'soccer', 'gym', 'walk'],
    address: {
        street:'milionnaire mind',
        city: 'New York',
        state: 'New York'
    }
}

// exercise 2

function showPersonInfo(person) {
    console.log("Person Information:");
    console.log(`Name: ${person.name} (Type: ${typeof person.name})`);
    console.log(`Age: ${person.age} years old (Type: ${typeof person.age})`);
    console.log(`Single: ${person.single} (Type: ${typeof person.single})`);
    console.log(`Hobbies: ${person.hobbies.join(", ")} (Type: ${typeof person.hobbies})`);
    console.log('Address: ')
    console.log(`Street: ${person.address.street}`)
    console.log(`City: ${person.address.city}`)
    console.log(`State: ${person.address.state}`)
}

showPersonInfo(person)

// exercise three

person = [
  {
    name: "Roberto",
    age: 49,
    city: "New York",
  },
  {
    name: "Lara",
    age: 20,
    city: "Los Angeles",
  },
  {
    name: "Sabrina",
    age: 17,
    city: "New jersey",
  },
];

person.push({
  name: "Gabriela",
  age: 25,
  city: "Italy",
});

function showListPerson(person) {
  console.log("list persons: ");
  person.forEach((person) => {
    console.log(
      `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
    );
  });
}
showListPerson(person);

function filterCity(person, city) {
  return person.filter( person => person.city == city);
}

showPersonInAnotherCity = filterCity(person, 'Los Angeles')
console.log('Person in los angeles: ')
console.log(showPersonInAnotherCity)

// exercise four

calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b != 0) {
      return a / b;
    } else {
      return "Impossible do that";
    }
  },
  average: function(num) {
    const addNum = num.reduce((total, num) => total + num, 0);
    return addNum / num.length;
  },
};

console.log("Add: ", calculator.add(8, 9))
console.log("Minus: ", calculator.minus(90, 76))
console.log("Times: ", calculator.times(67, 43))
console.log("Divide: ", calculator.divide(45, 23).toFixed(2))

numToAverage = [4, 7, 9, 6, 10, 8]

console.log('Average is: ', calculator.average(numToAverage).toFixed(2))

//exercise five

contBank = {
  holder: "Cezar",
  balance: 1000,
  deposit: function (value) {
    this.balance += value;
  },
  withdraw: function (value) {
    if (value <= this.balance) {
      this.balance -= value;
    } else {
      console.log("You cant do this");
    }
  },
};

client = {
  name: "Carla",
  cont: contBank,
};

function showBalance(client) {
  console.log(
    `Client name: ${client.name} and balance: ${client.cont.balance}`
  );
}

client.cont.deposit(8000);
client.cont.withdraw(10000);

showBalance(client);
