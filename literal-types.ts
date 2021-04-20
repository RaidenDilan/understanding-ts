/*
 * LITERAL TYPES
 * on runtime check we tell TS that we only want to allow our string values and nothing else.
 * 'as-number' | 'as-text'
 */

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // union types combined with litral types
) {
  let result;

  // SOLUTION 1: doing conversion before combining values
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  }
  else result = input1.toString() + input2.toString();

  return result;

  // if (typeof input1 === 'number' && typeof input2 === 'number' ) result = input1 + input2;
  // else result = input1.toString() + input2.toString();
  
  // // SOLUTION 2: forcing conversion
  // if (resultConversion === 'as-number') return +result; // or parseFloat(result) but +result is shorter.
  // else return result.toString();
}


const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Raiden', 'Dilan', 'as-text');
console.log(combinedNames);
