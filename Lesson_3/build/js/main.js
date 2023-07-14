"use strict";
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
let bands = [];
bands.push("Van Halen");
//Tuple
let myTupple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTupple;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj); //object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Denis',
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let JP = {
    name: "Jimmy",
    albums: ['I', 'II', "III"]
};
const greatGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
};
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
