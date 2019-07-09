// Type guards

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors

// Each of these property accesses will cause an error
if (pet.swim) {
  pet.swim();
} else if (pet.fly) {
  pet.fly();
}

// To get the same code working, we’ll need to use a type assertion:
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

// User-defined type predicates

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//  see more: https://www.typescriptlang.org/docs/handbook/advanced-types.html
