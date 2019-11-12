interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "heno",
  age: 32,
  gender: "male"
};

const sayhi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} olds, and ${person.gender}!`;
};

console.log(sayhi(person));

export {};
