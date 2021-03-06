const person: {
  name: string,
  age: number
} = {
// const person = {
  name: 'Raiden',
  age: 27
};

console.log(person.name);

const product: {
  id: string,
  price: number,
  tags: string[],
  details: {
    title: string,
    description: string,
  }
} = {
// const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product);