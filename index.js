// variables
const list = [
  "show",
  "hide",
  "visible",
  () => {
    return hi;
  },
];
for (let index = 0; index < list.length; index++) {
  console.log(list[index], "\n");
}

// concatination
const myName = "Venky";
console.log(`Hello ${myName}`, "\n");

// object literals
function getBook(title, author) {
  return {
    title,
    author,
  };
}
book1 = getBook("calibre fall", "Venky");
console.log(book1, "\n");

// object reconstruction
const user = {
  name: "venky",
  age: 20,
};
const { name, age } = user;
console.log(name, age, "\n");

// arrow function
const sayName = () => {
  console.log("I can't say my name!!!", "\n");
};
sayName();
const userName = {
  first: "Venky",
  second: "Inky",
  getName: function () {
    console.log(`the first name is ${this.first}`, "\n");
    const getFullName = () => {
      console.log(`the full name is ${this.first} ${this.second}`, "\n");
    };
    getFullName();
  },
};
userName.getName();

// default function parameteres
const add = (x = 5, y = 6) => {
  console.log(x + y, "\n");
};
add();

// foreach
const shoppingList = ["milk", "cow", "eggs", "bananas"];
shoppingList.forEach((product, index) => {
  console.log(index + 1 + "." + product + " nice product", "\n");
});

// map
const newList = shoppingList.map((item) => {
  console.log(item + " new", "\n");
});

// filter
const filterList = shoppingList.filter((item) => item !== "cow");
console.log(filterList, "\n");

// constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayPerson() {
    console.log(`The name is ${this.name} and age is ${this.age}`);
  }
}
class PersonFullDetails extends Person {
  constructor(name, age, dob, bloodgroup) {
    super(name, age);
    this.dob = dob;
    this.bloodgroup = bloodgroup;
  }
}
const person1 = new PersonFullDetails("venky", 20, "09/22/2002", "A+");
console.log(person1, "\n");

// promises
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ user: "venky", password: "df490decscsfkkf" });
    reject(new Error("Something went wrong!!!"));
  }, 2000);
});

prom
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
