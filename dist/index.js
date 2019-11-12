"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "heno",
    age: 32,
    gender: "male"
};
const sayhi = (person) => {
    return `hello ${person.name}, you are ${person.age} olds, and ${person.gender}!`;
};
console.log(sayhi(person));
//# sourceMappingURL=index.js.map