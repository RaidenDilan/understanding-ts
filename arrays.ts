// const person: {
//   name: string,
//   age: number,
//   hobbies: string[]
// } = {
const person = {
  name: 'Raiden',
  age: 27,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}