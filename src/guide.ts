let name: string;
let age: number | string; // union
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// type Person = {
//   name: string;
//   age?: number; //optional property
// };

const lotsOfPeople: Person[];

const person: Person = {
  name: "Abhishek",
  age: 28
};

console.log(person);

// let printName: Function;

let printName1: (name: string) => void;
let printName2: (name: string) => number;
let printName3: (name: string) => Person;

let personName: unknown; //recommended instead of "any" time

// void vs never:
// void returns undefined but never doesn't return anything
let printName: (name: string) => never;

// type vs interface:

type Person1 = {
  name: string;
  age?: number;
};

interface Person2 {
  name: string;
  age: number;
}

type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
}; // now y contains properties of X also.

let y: Y = {
  c: "sjsdsd",
  d: 42
};

interface Guy extends Person2 {
  profession: string;
}

const guyObj: Guy = {
  profession: "engineer"
};

console.log(guyObj);

type Y2 = Person2 & {
  c: string;
  d: number;
}; // now Y2 contains properties of Person2 interface also.

interface A1 extends X {
  attributes: string;
}
