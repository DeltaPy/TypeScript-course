let stringArray = ["one", "hey", "denis"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArray[0] = "john";
stringArray.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

// guitars = stringArray;
// mixedData = guitars

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

//Tuple
let myTupple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];
mixed = myTupple;

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj); //object
myObj = bands;
myObj = {};

const exampleObj ={
    prop1: 'Denis',
    prop2: true,
};

exampleObj.prop2 = false

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}
let JP: Guitarist = {
    name: "Jimmy",
    albums: ['I', 'II', "III"]
}

const greatGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name}!`
    }
}

//Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);

