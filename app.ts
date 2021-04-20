/*
 * Type Aliases / Object Types
 */

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// We can avoid unnecessary repetition and manage types centrally.
// The above converted to the code bellow

type User = {
  name: string;
  age: number
};
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const user = { name: 'Raiden', age: 27 };

const greeting = greet(user)
console.log(greeting);

const checkAge = isOlder(user, user.age)
console.log(checkAge);
