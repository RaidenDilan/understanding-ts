/*
 * Function Return Types & "void"
 * function add(n1: number, n2: number) : number
 * our Func returns a type of "number"
 */

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void - 
function printResult(num: number): void {
  console.log('Result is ' + num);
  // TS inference does it's job so we don't have to specify "void" here.
  // We are not returning anything in this function so we have avoid return type in TS.
  // This Func also returns "undefined" which is a Type in TS.
  // In TS we can't return "undefined" so we use void instead and tell TS that we don't return any value.

  // in JS when we "return;" in a Func it is "undefined" but in TS we get a differentiation here.
}

printResult(add(5, 12));
// console.log(printResult(add(5, 12))); // this will be undefined because we are not returning anything in our printResult Func.


// function add(n1: number, n2: number): string {
//   return n1.toString() + n2.toString();
// }