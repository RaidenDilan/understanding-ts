/*
 * UNION TYPES
 * on runtime check we tell TS that we are fine with either a number or string, we use:
 * number | string
 */

function combine(input1: number | string, input2: number | string) {
  let result;
  
  if (typeof input1 === 'number' && typeof input2 === 'number' ) result = input1 + input2;
  else result = input1.toString() + input2.toString();

  return result;
}


const combinedAges = combine(30, 30)
console.log(combinedAges);

const combinedNames = combine('Raiden', 'Dilan')
console.log(combinedNames);
