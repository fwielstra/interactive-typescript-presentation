// Any

// 'implicit' type if not specified; TSC will give error in strict mode
// or when compiler option --noImplicitAny is set
function someFunction(x, y) {
  return x + y;
}

// allowed, but only because you're explicit,
// not because it's a good idea to use any
function someOtherFunction(x: any, y: any): number {
  return x + y;
}

// Most imported JS will have no type information
import { add } from "./02-javascript.js";

add(1, 2);

// any type should be avoided as much as possible
