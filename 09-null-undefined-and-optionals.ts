// null and undefined are subtypes of all other types:
let num: number;
let num2: number = undefined;

// but because we have --strictNullChecks,
// we are not allowed to use them there
// unless we are explicit in where we expect them:

// using a type union:
let optionalNum: number | null = null;
let optionalNum2: number | undefined = undefined;

// using syntactic sugar:
function doSomethingg(a: number, b?: number) {
  console.log(a + b);
}

// Note that notation is only possible in method
// arguments and class properties, return types and
// variable declarations do not support it.

// class declaration (note the dank error):
class Blaat {
  a?: string;
  b: string = 'saf';
}
