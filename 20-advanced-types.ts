// Turning mutable immutable using Readonly:

interface Rectangle {
  width: number;
  height: number;
}

const rect: Rectangle = {
  width: 10,
  height: 20
}

rect.width = 20; // fine


// 'cast' to readonly:
const readonlyRect: Readonly<Rectangle> = rect;
readonlyRect.width = 30; // wtf are you doing











// bonus; not in stdlib yet, but, trick to make readonly props writeable:
type Mutable<T extends { [x: string]: any }, K extends string> = {
  [P in K]: T[P];
}

const mutableRect: Mutable<Readonly<Rectangle>, keyof Rectangle> = rect;
mutableRect.width = 40; // fine again







// Turning non-optional fields optional using Partial
interface Circle {
   r: number;
}

const circle: Circle = { r: undefined }; // narp
const nullableCircle: Partial<Circle> = { r: undefined } // yarp


// Creating a type which has a subset of properties using Pick
const partialRect: Pick<Rectangle, 'width'> = rect;
partialRect.width;  // woop
partialRect.height; // bork
