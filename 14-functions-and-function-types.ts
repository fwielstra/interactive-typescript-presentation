// here's a function with all the bells and whistles:
function add(x: number, y: number): number {
  return x + y;
}

type Callback = (x: number, y: number) => number;

// a function can have type compatiblity,
// a combination of params and return type:
let fnType: Callback = add;

// this can be used to specify callbacks for example:

function doSomething(method: (message: string) => void) {
  method('woot');
}

const callback = (message: string) => console.log(message);

doSomething(callback);









// default argument values
function printStuff(message: string, name: string = "Freek") {
  console.log(message + name);
}

printStuff("Hello");
printStuff("Hello", "Cthulhu");

// note also type inference when using default values:

function printStuffInferred(message = "hello world") {
  console.log(message);
}

printStuff(13371337); // error

// varargs / rest-params:
function buildAdulation(first: string, ...rest: string[]) {
  return first + " " + rest.join(" ");
}

let employeeName = buildAdulation("iä", "iä", "Cthulhu", "fhtagn");
