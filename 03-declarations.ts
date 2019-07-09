// same as JS

const done = true;

// ...but type is inferred in TS
const strType = "string";
const numType = 1;
const objType = {};

// Note that it cannot reliably infer the type in this case
// Avoid code like this. Prefer consts, prefer sticking to one type for a variable.
let blaat;
blaat = 1;
blaat = "str";
blaat = {};

// TS: Explicit type annotations
let bleet: number;
bleet = 1;
bleet = "str";

// Other types

let bool: boolean = true;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";

// Advanced: Union types (read as OR)

let bliit: number | string;
bliit = 1337;
bliit = "str";
bliit = {};
