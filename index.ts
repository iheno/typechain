const name = "heno",
  age = 39,
  gender = "male";

const sayhi = (name, age, gender?) => {
  console.log(`hello ${name}, you are ${age} olds, and ${gender}`);
};

sayhi(name, age, gender);

export {};
