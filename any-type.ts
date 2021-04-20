// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR'
};

// const person: {
//   name: string,
//   age: number,
//   hobbies: string[]
//   role: [number, string], // marking a tupel, fixed-length array
// } = {
const person = {
  name: 'Raiden',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin'); // TS doesn't catch this error when using tupels becuase in TS the push method is an exception.
// person.role[1] = 10;

// person.role = [0, 'admin']; // this is ALLOWED, hence no TS errors in our IDE.

let favoriteActivities: any[]; // Stay away from "any" as this goes against TS. It's used for more flexibility.
// let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}