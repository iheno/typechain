// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// for js add class
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "heno",
//   age: 32,
//   gender: "male"
// };

const Heno = new Human("Heno", 18, "male");

const sayhi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} olds, and ${person.gender}!`;
};

console.log(sayhi(Heno));

export {};
