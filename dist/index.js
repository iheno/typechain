"use strict";
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// for js add class
class Human {
    constructor(name, age, gender) {
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
const sayhi = (person) => {
    return `hello ${person.name}, you are ${person.age} olds, and ${person.gender}!`;
};
console.log(sayhi(Heno));
//# sourceMappingURL=index.js.map