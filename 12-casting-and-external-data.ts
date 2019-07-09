const fetch = require("node-fetch");

// Dealing with external data

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// we cannot determine what type the response has.
// Also, type information is erased during compiling
(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  console.log(typeof todo); // object
  console.log();
  console.log(todo);
})();

// We need to set our expectation explicitly for use during development:

(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // casting using `as` syntax:
  const todo = (await response.json()) as Todo;

  // casting using type declaration:
  const todo2: Todo = await response.json();

  // Still no type information at runtime though.
  // We CANNOT use Typescript to validate correctness or match expectation during runtime.
  console.log(typeof todo);
  console.log(typeof todo2);
  console.log();
  console.log(todo);
})();
