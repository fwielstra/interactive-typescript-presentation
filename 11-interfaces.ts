// definitely putting the Java back in JS
// Only better; "duck typing" or "structural subtyping"

// Function that expects an object with a property "label" of type string
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

// declare an object that includes that property
const myObj = {
  size: 10,
  label: "Size 10 Object"
};

printLabel(myObj); // valid

printLabel({ size: 10 }); // not valid

// Extracting the argument type to an interface:

interface LabeledValue {
  label: string;
}

// ALTERNATIVELY: Create a type alias with a shape.

type LabeledValue2 = { label: string };

function printLabel2(labelledObj: LabeledValue) {
  console.log(labelledObj.label);
}

printLabel2(myObj);
printLabel2({ size: 10 }); // not valid

// Declaring an object that has to match the interface explicitly:
const strictObj: LabeledValue = {
  label: "test",
  size: 10 // error!
};

// This breaks from regular JS where you could add anything
// to any object, but in TS, if you declare something with an
// exact interface, it has to match all properties and no extra props.
// Explicit interface disallows dynamic properties

// trick to allow 'any' parameters:
interface LabeledValueWithWhatever {
  label: string;
  [key: string]: any;
}

const labeledValueWithWhatever: LabeledValueWithWhatever = {
  label: "yeet",
  property: 1337,
  gabbleblotchits: "plurdled"
};

// Other trick to allow 'any' parameters:

const looseObj: any = {
  label: "test",
  size: "10"
};

// Pop quiz: What is the type of this object?

const whatAmI = {
  size: 10,
  label: "Size 10 Object"
};

// We can extract the (inferred) type of the object and use it as a type annotation:
type What = typeof whatAmI;

const stuff: What = {
  size: 42,
  label: "henk"
};
